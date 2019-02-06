'use strict';


const Homey = require('homey');
const Domoticz = require('domoticz');

module.exports = [
    {
        method: 'POST',
        path: 'validate',
        fn: function(req,callback){
            let args = req.body;
            var dm = new Domoticz(args.username,args.password,args.host,args.port);
            dm.doLogin().then(()=>{
                callback(null,true);
            }).catch((error)=>{
                callback(error,false);
            });
        }
    },
    {
        method: 'DELETE',
        path: 'logs',
        fn: function (req, callback) {

            callback(null, true);
        }
    },
    {
        method: 'GET',
        path: 'logs',
        fn: function(req,callback){
            callback(null, {"id": "Feature disabled"});
        }
    }
];