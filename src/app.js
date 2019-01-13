import Constants from './config/app_constants';
import FirebaseService from './services/firebase_service';
import AppService from './services/app_service';

// The function "initialize" is in charge to connect to de database and get the data needed to mount the app functionality
const initialize = new Promise((resolve, reject) => {
    FirebaseService.getDatabaseByName(Constants.databaseName).then((data) => {
        if(data.val()){
            resolve(data.val());
        }else{
            reject("ERROR - (def)initialize::getDatabaseByName::data.val() is null");
        }
    }).catch((reason) => {
        console.log("ERROR - (def)initialize::getDatabaseByName::catch::reason: " + reason);
    }); 
});

initialize.then((dbData) => {
    AppService.createChartModels(dbData).then((models) => {
        let modelsByOrder = AppService.sortModelsByOrder(models);
        Object.keys(modelsByOrder).forEach(function(modelIndex){
            let chartModel = modelsByOrder[modelIndex];
            AppService.createPieChart(chartModel, "#AppContent")
        })
    });
}).catch((reason) => {
    console.log("ERROR - initialize::catch::reason: " + reason);
});

export {initialize};
 