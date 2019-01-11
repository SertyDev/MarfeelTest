import Constants from '../config/app_constants';
import Impresions from '../models/impresions_model';
import Revenue from '../models/revenue_model';
import Visits from '../models/visits_model';

// Allows mapping different models if that is the case (not in this assignment). This helps avoid scalable changes in the future
const generateChartModels = (jsonData) => {
    return new Promise((resolve, rejects) => {
        let models = [];
        Object.keys(jsonData).forEach(function(chartName){
            console.log(chartName);
            switch(chartName){
                case Constants.txtImpresionsDatabase:
                    models.push(mapImpresionsToModel(jsonData[chartName]));
                    break;
                case Constants.txtRevenueDatabase:
                    models.push(mapRevenueToModel(jsonData[chartName]));
                    break;
                case Constants.txtVisitsDatabase:
                    models.push(mapVisitsToModel(jsonData[chartName]));
                    break;
                default:
                    rejects("ERROR - generateChartModels::switch: The key {" + chartName + "} from the database object does not coincide with any chart name");
            }
        });

        if(models.length > 0){
            resolve(models);
        }else{
            rejects("ERROR - generateChartModels: There is not data in the database to show");
        }
    })    
}

//Because of the same database strcuture these 3 functions are almost the same but this way we could modified de database and models in an easy scalable way
const mapImpresionsToModel = (impresionsData) => {
    let total = impresionsData.Phone + impresionsData.Tablet;
    return new Impresions(total, impresionsData.Phone, impresionsData.Tablet);
}

const mapRevenueToModel = (revenueData) => {
    let total = revenueData.Phone + revenueData.Tablet;
    return new Revenue(total, revenueData.Phone, revenueData.Tablet);
}

const mapVisitsToModel = (visitsData) => {
    let total = visitsData.Phone + visitsData.Tablet;
    return new Visits(total, visitsData.Phone, visitsData.Tablet);
}

class DataService {
    static get generateChartModels{
        return generateChartModels(jsonData);
    }    
}

export default DataService;
