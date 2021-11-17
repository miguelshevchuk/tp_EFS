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
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: codigo})
            .getOne();

        if(!precioActual || precioActual.ultimaActualizacion < moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss')){
            await this.guardarTodosLosValoresHistoricos(preciosRepository)

            precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: codigo})
            .getOne();
        }

        return precioActual

    }

}


const precioService = new PrecioService()
export default precioService