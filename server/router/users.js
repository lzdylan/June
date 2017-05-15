/**
 * Created by war3_2 on 2017/5/12.
 */
var Users = require("../junedb/users.js");

exports.getFindUsers = function (request, response) {
    console.log(request.query);
    if(request.query) {
        var pageSize = Number(request.query.pageSize);                   // 一页多少条
        var currentPage = request.query.current;                // 当前第几页
        var skipnum = (currentPage - 1) * pageSize;   // 跳过数
        Users.find().skip(skipnum).limit(pageSize).exec(function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                response.json(res);
            }
        })
    } else {
        Users.find({}, function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                response.json(res);
            }
        })
    }
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
function getByPager(pageSize, currentPage){
    var pageSize = this.pageSize;                   // 一页多少条
    var currentPage = this.currentPage;                // 当前第几页
    var skipnum = (currentPage - 1) * pageSize;   // 跳过数
    Users.find().skip(skipnum).limit(pageSize).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            return res;
        }
    })
}

