

class YahooFinanceService{
 
    public async getValorActual(){
        console.log("Buscando en la API valor actual de todas las monedas")
        let responseData
        let axios = require("axios").default;

        let options = {
            method: 'GET',
            url: 'https://yfapi.net/v6/finance/quote',
            params: {region: 'US', lang: 'en', symbols: 'AAPL,TSLA,GOLD,BTC-USD,MCD,WMT,ETH-USD,NVDA'},
            headers: {
                'x-api-key': 'BRisfaVeoA3ljOyX3yH3d48KW4Z7og2m4jJFrIJf'
            }
        };

        await axios.request(options).then(function (response) {
            responseData = response.data["quoteResponse"]["result"]
        }).catch(function (error) {
            console.error(error);
        });

        return responseData
    }

    public async getValoresHistoricos(){
        console.log("Buscando en la API valores historicos de todas las monedas")
        let responseData
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://yfapi.net/v8/finance/spark',
            params: {interval: '1d', range: '1y', symbols: 'AAPL,TSLA,GOLD,BTC-USD,MCD,WMT,ETH-USD,NVDA'},
            headers: {
                'x-api-key': 'BRisfaVeoA3ljOyX3yH3d48KW4Z7og2m4jJFrIJf'
            }
        };

        await axios.request(options).then(function (response) {
            responseData = response.data
        }).catch(function (error) {
            console.error(error);
        });

        return responseData

    }


}

const yahooFinanceService = new YahooFinanceService()
export default yahooFinanceService