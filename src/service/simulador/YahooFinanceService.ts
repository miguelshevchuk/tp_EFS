

class YahooFinanceService{
 
    public async a(){
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
            params: {modules: 'defaultKeyStatistics,assetProfile'},
            headers: {
                'x-api-key': 'BRisfaVeoA3ljOyX3yH3d48KW4Z7og2m4jJFrIJf'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    public async getValorActual(moneda:string){
        console.log("Buscando en la API valor actual de "+moneda)
        let responseData
        let axios = require("axios").default;

        let options = {
            method: 'GET',
            url: 'https://yfapi.net/v6/finance/quote',
            params: {region: 'US', lang: 'en', symbols: moneda},
            headers: {
                'x-api-key': 'BRisfaVeoA3ljOyX3yH3d48KW4Z7og2m4jJFrIJf'
            }
        };

        await axios.request(options).then(function (response) {
            responseData = response.data["quoteResponse"]["result"][0]
        }).catch(function (error) {
            console.error(error);
        });

        return responseData
    }

    public async getValoresHistoricos(moneda:string){
        console.log("Buscando en la API valores historicos de "+moneda)
        let responseData
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://yfapi.net/v8/finance/spark',
            params: {interval: '1d', range: '1y', symbols: moneda},
            headers: {
                'x-api-key': 'BRisfaVeoA3ljOyX3yH3d48KW4Z7og2m4jJFrIJf'
            }
        };

        await axios.request(options).then(function (response) {
            responseData = response.data[moneda]
        }).catch(function (error) {
            console.error(error);
        });

        return responseData

    }


}

const yahooFinanceService = new YahooFinanceService()
export default yahooFinanceService