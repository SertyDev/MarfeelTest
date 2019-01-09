
'use strict';

import AdModel from '../models/AdModel';
import fire from '../config/_firebase';

// let p = new AdModel("Ad1");
// p.consoleName();
// console.log('The name of the Ad is: ' + p.name);

fire.database().ref('AdsRepo').once('value').then(function (adsDB) {    
    console.log(JSON.stringify(adsDB));
    console.log();
});
