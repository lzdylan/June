/**
 * Created by war3_2 on 2017/5/12.
 */
var Users = require("../junedb/users.js");

exports.getFindUsers = function (request, response) {
    Users.find({}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.postFindUsers = function (request, response) {
    Users.findOne({'user_name': request.body.user_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.updateUsers = function (request, response) {
    var goodsType = request.body;
    Users.update({'user_name': request.body.user_name}, goodsType, function(err, desc){
        if (err) {
            response.json({
                errno: 1,
                message: '更新失败!',
                desc: desc
            });
        }
        else {
            response.json({
                errno: 0,
                message: '更新成功!',
                desc: desc
            });
        }
    })
}
