import * as d3 from "d3";
import D3Config from '../config/d3_config';
import Constants from '../config/app_constants';
import BottomChart from '../components/BottomChart';
import Impresions from '../models/impresions_model';
import Revenue from '../models/revenue_model';
import Visits from '../models/visits_model';

// Allows mapping different models if that is the case (not in this assignment). This helps avoid scalable changes in the future
const createChartModels = (jsonData) => {
    return new Promise((resolve, rejects) => {
        let models = [];
        Object.keys(jsonData).forEach(function(chartName){
            switch(chartName){
                case Constants.Impresions:
                    models.push(mapImpresionsToModel(jsonData[chartName]));
                    break;
                case Constants.Revenue:
                    models.push(mapRevenueToModel(jsonData[chartName]));
                    break;
                case Constants.Visits:
                    models.push(mapVisitsToModel(jsonData[chartName]));
                    break;
                default:
                    console.log("ERROR - createChartModels::switch: The key {" + chartName + "} from the database object does not coincide with any chart name");
            }
        });

        if(models.length > 0){
            resolve(models);
        }else{
            rejects("ERROR - createChartModels: There is not data in the database to show");
        }
    })    
}

//Because of the same database strcuture these 3 functions are almost the same but this way we could modified de database and models in an easy scalable way
const mapImpresionsToModel = (impresionsData) => {
    let total = impresionsData.Phone + impresionsData.Tablet;
    return new Impresions(impresionsData.Title, impresionsData.Order, impresionsData.Phone, impresionsData.Tablet, total);
}

const mapRevenueToModel = (revenueData) => {
    let total = revenueData.Phone + revenueData.Tablet;
    return new Revenue(revenueData.Title, revenueData.Order, revenueData.Phone, revenueData.Tablet, total);
}

const mapVisitsToModel = (visitsData) => {
    let total = visitsData.Phone + visitsData.Tablet;
    return new Visits(visitsData.Title, visitsData.Order, visitsData.Phone, visitsData.Tablet, total);
}

const sortModelsByOrder = (jsonModels) => {
    var sortableModels = [];
    for (let modelIndex in jsonModels){
        let currentModel = jsonModels[modelIndex];
        sortableModels.push([currentModel, currentModel.Order]);
    }

    var sortedModels = sortableModels.sort();
    var resModel = [];
    for (let modelIndex in sortedModels){
        resModel.push(sortedModels[modelIndex][0]);
    }
    return resModel;
}

const createPieChart = (dataModel, containerSelector) => {
    let charts = []
    // create the dom
    d3.select(containerSelector).append('div')
      .attr('class', 'pie-chart ref-' + dataModel.Order)
    // render the charts
    charts[dataModel.Order] = D3Config.singleValueDonut()
      .height(200)
    d3.select('.ref-' + dataModel.Order)
      .datum(dataModel)
      .call(charts[dataModel.Order])
    
    var byPhonePercent = Math.floor(dataModel.ByPhone/dataModel.Total*100);   
    var byTabletPercent = Math.floor(dataModel.ByTablet/dataModel.Total*100);

    var elmChart = document.querySelector('.ref-' + dataModel.Order);

    var elmChartHeader = document.createElement('div');
    elmChartHeader.className = 'header-chart';

    var elmTitleChart = document.createElement('span');
    elmTitleChart.className = 'title-chart';
    elmTitleChart.innerHTML = dataModel.Title;

    var currency = "";
    if(dataModel.Title.toLowerCase() === Constants.Revenue.toLowerCase()){
        currency = "€";
    }
    var elmTotalChart = document.createElement('span');
    elmTotalChart.className = 'total-chart';
    elmTotalChart.innerHTML = dataModel.Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + currency;
    
    elmChart.append(elmChartHeader);
    elmChartHeader.append(elmTitleChart);
    elmChartHeader.append(elmTotalChart);
    elmChart.append(createElementFromHTML(BottomChart(
        dataModel.Title.toLowerCase(),
        "Tablet",
        byTabletPercent,
        dataModel.ByTablet,
        "Smartphone",
        byPhonePercent,
        dataModel.ByPhone)));
}

const createElementFromHTML = (strHtml) => {
    var div = document.createElement('div');
    div.innerHTML = strHtml.trim();

  return div.firstChild; 
}

class AppService {
    static createChartModels(jsonData){
        return createChartModels(jsonData);
    }
    static sortModelsByOrder(jsonModels){
        return sortModelsByOrder(jsonModels);
    }
    static createPieChart(dataModel, containerSelector){
        return createPieChart(dataModel, containerSelector);
    }

    //TESTING USAGE
    static mapImpresionsToModel(impresionsData){
        return mapImpresionsToModel(impresionsData);
    }
    static mapRevenueToModel(revenueData){
        return mapRevenueToModel(revenueData);
    }
    static mapVisitsToModel(visitsData){
        return mapVisitsToModel(visitsData);
    }
}

export default AppService;
