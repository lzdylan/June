/**
 * Created by war3_2 on 2017/5/5.
 */
var AdminUser = require("../junedb/admin_user.js");

exports.getLogin = function (request, response) {
    AdminUser.find(request.user_name, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
exports.postLogin = function (request, response) {
    console.log("request:" + request.body);
    AdminUser.find(request.body.user_name, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
            console.log(request.body.password);
            console.log(res[0].password);
            if (request.body.password === res[0].password) {
                response.json({
                    errno: 0,
                    logObject: res,
                    gaga:request.body,
                    compon: 'index'
                })
            }
        }
    })
}