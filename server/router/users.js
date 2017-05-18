/**
 * Created by war3_2 on 2017/5/12.
 */
var Users = require("../junedb/users.js");

exports.loadUsers = function (request, response) {
        var dataCount = 0;
        var condition = '';
        var pageSize = Number(request.body.pageSize);                   // 一页多少条
        var currentPage = request.body.current;                // 当前第几页
        var skipnum = (currentPage - 1) * pageSize;   // 跳过数
        condition = request.body.user_name ? {'user_name': request.body.user_name} : {};
        Users.count(condition, function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                dataCount = res;
            }
        });
        Users.find(condition).skip(skipnum).limit(pageSize).exec(function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                response.json({
                    res: res,
                    dataCount: dataCount
                });
            }
        });
}
exports.postFindUsers = function (request, response) {
    Users.find(request.body).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.editUsers = function (request, response) {
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
function loadData(condition) {
    Users.find(condition).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            return res;
        }
    })
}

