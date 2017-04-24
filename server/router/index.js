/**
 * Created by war3_2 on 2017/4/20.
 */
var express = require('express');
var AdminUser = require("../junedb/admin_user.js");
var apiRouters = express.Router();

apiRouters.get('/login', function (request, response) {
    AdminUser.find(request.user_name, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
});
apiRouters.post('/login', function (request, response) {
    console.log("request:" + request.body);
    AdminUser.find(request.body.user_name, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
            if (request.body.userpwd === res.password) {
                response.json({
                    errno: 0,
                    logObject: res,
                    compon: 'index'
                })
            }
        }
    })
});

module.exports = apiRouters;