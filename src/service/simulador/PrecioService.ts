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
            let valoresHistoricos = await yahooFinanceService.getValoresHistoricos()

            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.BTC)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.APPLE)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.TESLA)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.GOLD)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.MACDONALDS)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.WALMART)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.ETH)
            this.guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, MonedaMap.NVIDIA)

        }

    }

    private async guardarValoresHistoricos(valoresHistoricos, preciosHistoricosRepository, codigo:string){

        let valoresHistoricosMoneda = valoresHistoricos[codigo]

        for(let i =0; i < valoresHistoricosMoneda["timestamp"].length; i++){
            let nuevoPrecio = new Precio(moment.unix(valoresHistoricosMoneda["timestamp"][i]).format('YYYY-MM-DD'), valoresHistoricosMoneda["close"][i], codigo)
            preciosHistoricosRepository.save(nuevoPrecio)
        }
    }

    public async getPrecioActual(codigo:string){

        let preciosRepository = getRepository(Precio);

        let precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: codigo})
            .getOne();

        if(!precioActual){
            let valoresActuales = await yahooFinanceService.getValorActual()

            await this.guardarPrecioDeHoy(preciosRepository, valoresActuales)
            await this.actualizarPrecioDeCierre(preciosRepository, valoresActuales)
            
        }else{
            if(precioActual.ultimaActualizacion < moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss')){
                await this.actualizarPrecioDeHoy(preciosRepository)
            }else{
                return precioActual
            }
        }

        precioActual = await preciosRepository.createQueryBuilder('p')
            .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
            .andWhere('p.codigo = :codigo', { codigo: codigo})
            .getOne();

        return precioActual

    }

    private async guardarPrecioDeHoy(preciosRepository, valoresActuales){

        for(let i =0; i<valoresActuales.length; i++){
            
            let valorActual = valoresActuales[i]
            console.log("Agregando valor del dia de "+valorActual["symbol"])
            let precioActual = new Precio(moment().format('YYYY-MM-DD'), valorActual["regularMarketPrice"], valorActual["symbol"])

            await preciosRepository.save(precioActual)
        }

    }

    private async actualizarPrecioDeHoy(preciosRepository){

        let valoresActuales = await yahooFinanceService.getValorActual()

        for(let i =0; i<valoresActuales.length; i++){
            let valorActual = valoresActuales[i]
            console.log("Actualizando valor del dia de "+valorActual["symbol"])
            let precioActual = await preciosRepository.createQueryBuilder('p')
                .where('p.fecha = :fecha', { fecha: moment().format('YYYY-MM-DD') })
                .andWhere('p.codigo = :codigo', { codigo: valorActual["symbol"]})
                .getOne();
            await preciosRepository.update({precioId : precioActual.precioId}, {valor: valorActual["regularMarketPrice"], ultimaActualizacion : moment().format('YYYY-MM-DD HH:mm:ss')})
        }
        
    }

    private async actualizarPrecioDeCierre(preciosRepository, valoresActuales){

        for(let i =0; i<valoresActuales.length; i++){
            let valorActual = valoresActuales[i]
            console.log("Actualizando valor de cierre de ayer de "+valorActual["symbol"])

            let precioDeAyer = await preciosRepository.createQueryBuilder('p')
                .where('p.fecha = :fecha', { fecha: moment().subtract(1, 'day').format('YYYY-MM-DD') })
                .andWhere('p.codigo = :codigo', { codigo: valorActual["symbol"]})
                .getOne();
            
            if(!precioDeAyer){
                precioDeAyer = new Precio(moment().subtract(1, 'day').format('YYYY-MM-DD'), valorActual["regularMarketPreviousClose"], valorActual["symbol"])
                await preciosRepository.save(precioDeAyer)
            }else{
                await preciosRepository.update({precioId : precioDeAyer.precioId}, {valor: valorActual["regularMarketPreviousClose"], ultimaActualizacion : moment().format('YYYY-MM-DD HH:mm:ss')})
            }
        }

    }

}


const precioService = new PrecioService()
export default precioService