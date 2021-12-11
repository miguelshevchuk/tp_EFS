import { getRepository } from "typeorm";
import moment from "moment";
import { Precio } from "../../model/Models";
import { MonedaMap } from "./MonedaMap";
import yahooFinanceService from "./YahooFinanceService";


class PrecioService{
 
    public async actualizarPreciosHistoricos(){
        let preciosHistoricosRepository = getRepository(Precio);
        let preciosHistoricos = await preciosHistoricosRepository.find({})
        
        if(!preciosHistoricos || preciosHistoricos.length ===0){

            this.guardarTodosLosValoresHistoricos(preciosHistoricosRepository)
            

        }

    }

    private async guardarTodosLosValoresHistoricos(preciosHistoricosRepository){
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.BTC)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.APPLE)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.TESLA)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.GOLD)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.MACDONALDS)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.WALMART)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.ETH)
            await this.guardarValoresHistoricos(preciosHistoricosRepository, MonedaMap.NVIDIA)
    }

    private async guardarValoresHistoricos(preciosHistoricosRepository, codigo:string){

        preciosHistoricosRepository.delete({codigo: codigo})

        let valoresHistoricos = await yahooFinanceService.getDatosGrafico(codigo)

        for(let i =0; i < valoresHistoricos["timestamp"].length; i++){
            let indicadores = valoresHistoricos["indicators"]["quote"][0]
            //console.log(JSON.stringify(indicadores))
            let nuevoPrecio = new Precio(moment.unix(valoresHistoricos["timestamp"][i]).format('YYYY-MM-DD'), codigo, indicadores["open"][i], indicadores["close"][i], indicadores["high"][i], indicadores["low"][i])
            preciosHistoricosRepository.save(nuevoPrecio)
        }

    }

    public async getPrecioActual(codigo:string){

        let preciosRepository = getRepository(Precio);

        let precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.codigo = :codigo', { codigo: codigo})
            .orderBy('p.fecha', 'DESC')
            .limit(1)
            .getOne();

        if(!precioActual || precioActual.ultimaActualizacion < moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss')){
            await this.guardarTodosLosValoresHistoricos(preciosRepository)

            precioActual = await preciosRepository.createQueryBuilder('p')
                .where('p.codigo = :codigo', { codigo: codigo})
                .orderBy('p.fecha', 'DESC')
                .limit(1)
                .getOne();
        }

        return precioActual

    }

    public async getHistorialPrecios(codigo:string){

        let preciosRepository = getRepository(Precio);

        let historialDePrecios = await preciosRepository.createQueryBuilder('p')
            .andWhere('p.codigo = :codigo', { codigo: codigo})
            .orderBy('p.fecha', 'ASC')
            .getMany();

        if(!historialDePrecios || historialDePrecios.length ===0 || historialDePrecios[0].ultimaActualizacion < moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss')){
            await this.guardarTodosLosValoresHistoricos(preciosRepository)

            historialDePrecios = await preciosRepository.createQueryBuilder('p')
                .andWhere('p.codigo = :codigo', { codigo: codigo})
                .orderBy('p.fecha', 'ASC')
                .getMany();
        }

        return historialDePrecios

    }

}


const precioService = new PrecioService()
export default precioService