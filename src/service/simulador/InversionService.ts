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
import { InversionNoRealizadaError } from "../../error/simulador/InversionNoRealizadaError";
import { VentaResponseDTO } from "../../dto/simulador/VentaResponseDTO";


class InversionService{
 
    public async invertir(userId:number, inversion:IInversion){
        let inversionRepository = getRepository(Inversion);

        await this.verificarInversion(inversionRepository, userId, inversion)

        let precioMoneda = await precioService.getPrecioActual(inversion.codigo)

        let valorInversionInicial = inversion.monedas * 0.1

        let cantidad = valorInversionInicial/precioMoneda.close

        let inversionInicial = new Inversion(userId, cantidad, precioMoneda.close, valorInversionInicial, inversion.codigo.toUpperCase())

        await inversionRepository.save(inversionInicial)

        await usuarioService.agregarMonedas(userId, -inversion.monedas)
        let monedas = await usuarioService.getMonedasDelUsuario(userId)

        return new InversionResponseDTO(monedas.monedas, cantidad, valorInversionInicial)

    }

    public async vender(userId:number, codigo:string){
        let inversionRepository = getRepository(Inversion);

        let inversionActual = await inversionRepository.createQueryBuilder('i')
            .innerJoinAndSelect('i.usuario', 'u')
            .where('u.usuarioId = :usuarioId', { usuarioId: userId})
            .andWhere('i.codigo = :codigo', { codigo: codigo})
            .getOne();
        
        if(!inversionActual){
            throw new InversionNoRealizadaError()
        }

        let precioMoneda =await precioService.getPrecioActual(codigo)

        let monedas = Math.ceil((inversionActual.cantidad * precioMoneda.close) *10)

        usuarioService.agregarMonedas(userId, monedas)
        inversionRepository.delete({inversionId : inversionActual.inversionId})

        let monedasTotales = await usuarioService.getMonedasDelUsuario(userId)

        return new VentaResponseDTO(monedas, monedasTotales.monedas)

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

            totalAcumulado = totalAcumulado+parseFloat(resumen.total)
            inversionInicialAcumulada = inversionInicialAcumulada+resumen.inversionInicial
        }

        let rendimientoTotal = ((totalAcumulado*100)/inversionInicialAcumulada) - 100

        return new ResumenInversionesDTO(rendimientoTotal, inversionInicialAcumulada, totalAcumulado, resumenes)

    }

    private async getRendimientoInversion(inversion:Inversion){
        let precioActual = await precioService.getPrecioActual(inversion.codigo)

        let totalInversion = precioActual.close*inversion.cantidad

        let rendimiento = ((totalInversion*100)/inversion.inversionInicial) - 100

        let resumen = new RendimientoInversionDTO(rendimiento, inversion.inversionInicial, totalInversion, inversion.cantidad, inversion.codigo)

        return resumen
    }



    private async verificarInversion(inversionRepository, userId:number, inversion:IInversion){
        let inversionActual = await inversionRepository.createQueryBuilder('i')
            .innerJoinAndSelect('i.usuario', 'u')
            .where('u.usuarioId = :usuarioId', { usuarioId: userId})
            .andWhere('i.codigo = :codigo', { codigo: inversion.codigo.toUpperCase()})
            .getOne();

        console.log(inversionActual)

        if(inversionActual){
            throw new InversionYaRealizadaError()
        }
    }


}


const inversionService = new InversionService()
export default inversionService