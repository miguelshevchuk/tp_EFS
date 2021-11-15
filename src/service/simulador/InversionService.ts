import { getRepository } from "typeorm";
import moment from "moment";
import { Inversion, Precio } from "../../model/Models";
import { MonedaMap } from "./MonedaMap";
import yahooFinanceService from "./YahooFinanceService";
import { IInversion } from "../../interfaces/simulador/IInversion";
import precioService from "./PrecioService";
import usuarioService from "../usuario/UsuarioService";
import { InversionResponseDTO } from "../../dto/simulador/InversionResponseDTO";
import { RendimientoInversionDTO } from "../../dto/simulador/RendimientoInversionDTO";
import { ResumenInversionesDTO } from "../../dto/simulador/ResumenInversionesDTO";
import { InversionYaRealizadaError } from "../../error/simulador/InversionYaRealizadaError";


class InversionService{
 
    public async invertir(userId:number, inversion:IInversion){
        let inversionRepository = getRepository(Inversion);

        await this.verificarInversion(inversionRepository, userId, inversion)

        let precioMoneda = await precioService.getPrecioActual(inversion.codigo)

        let valorInversionInicial = inversion.monedas * 0.1

        let cantidad = valorInversionInicial/precioMoneda.valor

        let inversionInicial = new Inversion(userId, cantidad, precioMoneda.valor, valorInversionInicial, inversion.codigo)

        await inversionRepository.save(inversionInicial)

        await usuarioService.agregarMonedas(userId, -inversion.monedas)
        let monedas = await usuarioService.getMonedasDelUsuario(userId)

        return new InversionResponseDTO(monedas.monedas, cantidad, valorInversionInicial)

    }

    public async getResumenUsuario(userId:number){
        let inversionRepository = getRepository(Inversion);
        let inversiones = await inversionRepository.createQueryBuilder('i')
            .innerJoinAndSelect('i.usuario', 'u')
            .where('u.usuarioId = :usuarioId', { usuarioId: userId})
            .getMany();

        let totalAcumulado = 0
        let inversionInicialAcumulada = 0
        let resumenes = []

        for(let i=0; i<inversiones.length;i++){
            let inversion = inversiones[i]

            let resumen = await this.getRendimientoInversion(inversion)
            resumenes.push(resumen)

            totalAcumulado = totalAcumulado+resumen.total
            inversionInicialAcumulada = inversionInicialAcumulada+resumen.inversionInicial
        }

        let rendimientoTotal = ((totalAcumulado*100)/inversionInicialAcumulada) - 100

        return new ResumenInversionesDTO(rendimientoTotal, inversionInicialAcumulada, totalAcumulado, resumenes)

    }

    private async getRendimientoInversion(inversion:Inversion){
        let precioActual = await precioService.getPrecioActual(inversion.codigo)

        let totalInversion = precioActual.valor*inversion.cantidad

        let rendimiento = ((totalInversion*100)/inversion.inversionInicial) - 100

        let resumen = new RendimientoInversionDTO(rendimiento, inversion.inversionInicial, totalInversion, inversion.cantidad, inversion.codigo)

        return resumen
    }



    private async verificarInversion(inversionRepository, userId:number, inversion:IInversion){
        let inversionActual = await inversionRepository.createQueryBuilder('i')
            .innerJoinAndSelect('i.usuario', 'u')
            .where('u.usuarioId = :usuarioId', { usuarioId: userId})
            .andWhere('i.codigo = :codigo', { codigo: inversion.codigo})
            .getOne();

        if(inversionActual){
            throw new InversionYaRealizadaError()
        }
    }


}


const inversionService = new InversionService()
export default inversionService