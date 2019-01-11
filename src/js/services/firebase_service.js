'use strict';

import fire from '../config/firebase_config';

const getDatabaseByName = (databaseName) => {
    return new Promise((resolve, reject) => {
        fire.database().ref(databaseName).once('value').then(function (adData) {    
            if (adData) {
                resolve(adData);
            } else {
                reject(new Error("ERROR - getDatabaseByName: An error occured trying to connect to database {" + databaseName + "}"));
            }
        });                
    });
};

class FirebaseService {
    static get getDatabaseByName(databaseName){
        return getDatabaseByName(databaseName);
    }    
}

export default FirebaseService;
