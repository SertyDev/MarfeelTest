
import AppService from '../src/services/app_service';
import mdlImpresions from '../src/models/impresions_model';
import mdlrevenue from '../src/models/revenue_model';
import mdlVisits from '../src/models/visits_model';

describe('Initialize Unit Test', () => {
  
  var strTestDbData = "";
  var test_dbData = "";
  var models = [];
  var expected_sort = [];

  beforeAll(function(){
    strTestDbData = "{\"Impresions\":{\"Order\":2,\"Phone\":30000000,\"Tablet\":20000000,\"Title\":\"Impresions\"},\"Revenue\":{\"Order\":1,\"Phone\":80000,\"Tablet\":120000,\"Title\":\"Revenue\"},\"Visits\":{\"Order\":3,\"Phone\":120000000,\"Tablet\":480000000,\"Title\":\"Visits\"}}"
    test_dbData = JSON.parse(strTestDbData);
      
    models.push(AppService.mapImpresionsToModel(test_dbData["Impresions"]));
    models.push(AppService.mapRevenueToModel(test_dbData["Revenue"]));
    models.push(AppService.mapVisitsToModel(test_dbData["Visits"]));
        
    expected_sort.push(models[1]);
    expected_sort.push(models[0]);
    expected_sort.push(models[2]);
  });
  
  
  it('TEST_AppService', () =>{
    expect(AppService.createChartModels(test_dbData).then).toBeTruthy();
    expect(AppService.sortModelsByOrder(models)).toEqual(expected_sort);
  });

});
