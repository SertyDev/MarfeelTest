
'use strict';

import fire from '../config/_firebase_config';
import impresionsModel from '../models/impresions_model';
import revenueModel from '../models/revenue_model';
import visitsModel from '../models/visits_model';

fire.database().ref('AdsRepo').once('value').then(function (adsDB) {    
    console.log(JSON.stringify(adsDB));
});
