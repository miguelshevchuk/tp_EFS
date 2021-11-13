import { getRepository } from "typeorm";
import moment from "moment";
import { Precio } from "../../model/Models";
import { MonedaMap } from "./MonedaMap";
import yahooFinanceService from "./YahooFinanceService";


class PrecioService{
 
    public async actualizarPreciosHistoricos(){
        let preciosHistoricosRepository = getRepository(Precio);
        let preciosHistoricos = await preciosHistoricosRepository.find({codigo: MonedaMap.BTC})

        if(!preciosHistoricos || preciosHistoricos.length ===0){
            console.log("Actualizando valores historicos de "+MonedaMap.BTC);
            let valoresHistoricos = await yahooFinanceService.getValoresHistoricos(MonedaMap.BTC)

            for(let i =0; i < valoresHistoricos["timestamp"].length; i++){
                let nuevoPrecio = new Precio(moment.unix(valoresHistoricos["timestamp"][i]).format('YYYY-MM-DD'), valoresHistoricos["close"][i], MonedaMap.BTC)
                preciosHistoricosRepository.save(nuevoPrecio)
            }

        }

    }

    public async getPrecioActual(){

        let preciosRepository = getRepository(Precio);

        let precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: MonedaMap.BTC})
            .getOne();

        if(!precioActual){
            console.log("Agregando valor del dia de "+MonedaMap.BTC)
            let valorActual = await yahooFinanceService.getValorActual(MonedaMap.BTC)

            await this.guardarPrecioDeHoy(preciosRepository, valorActual)
            await this.actualizarPrecioDeCierre(preciosRepository, valorActual)
            
        }else{
            if(precioActual.ultimaActualizacion < moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss')){
                await this.actualizarPrecioDeHoy(preciosRepository, precioActual)
            }
        }

        precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: MonedaMap.BTC})
            .getOne();

        return precioActual

    }

    private async guardarPrecioDeHoy(preciosRepository, valorActual){
        console.log("Agregando valor del dia de "+MonedaMap.BTC)

        let precioActual = new Precio(moment.unix(valorActual["regularMarketTime"]).format('YYYY-MM-DD'), valorActual["regularMarketPrice"], MonedaMap.BTC)
        await preciosRepository.save(precioActual)
    }

    private async actualizarPrecioDeHoy(preciosRepository, precioActual){
        console.log("Actualizando valor del dia de "+MonedaMap.BTC)

        let valorActual = await yahooFinanceService.getValorActual(MonedaMap.BTC)
        await preciosRepository.update({precioId : precioActual.precioId}, {valor: valorActual["regularMarketPrice"], ultimaActualizacion : moment().format('YYYY-MM-DD HH:mm:ss')})

    }

    private async actualizarPrecioDeCierre(preciosRepository, valorActual){
        console.log("Actualizando valor de cierre de ayer de "+MonedaMap.BTC)

        let precioDeAyer = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().subtract(1, 'day').format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: MonedaMap.BTC})
            .getOne();
        
        if(!precioDeAyer){
            precioDeAyer = new Precio(moment().subtract(1, 'day').format('YYYY-MM-DD'), valorActual["regularMarketPreviousClose"], MonedaMap.BTC)
            await preciosRepository.save(precioDeAyer)
        }else{
            await preciosRepository.update({precioId : precioDeAyer.precioId}, {valor: valorActual["regularMarketPreviousClose"], ultimaActualizacion : moment().format('YYYY-MM-DD HH:mm:ss')})
        }

    }

}


const precioService = new PrecioService()
export default precioService