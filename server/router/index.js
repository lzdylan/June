/**
 * Created by war3_2 on 2017/4/20.
 */
var express = require('express');
var AdminUser = require("../junedb/admin_user.js");
var GoodsType = require("../junedb/goods_type.js");
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
});
apiRouters.get('/fgoodsType', function (request, response) {
    GoodsType.find({'is_show': true}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
});
apiRouters.post('/rgoodsType', function (request, response) {
    GoodsType.findOneAndRemove({'type_name': request.body.type_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            GoodsType.find({'is_show': true}, function(err, res){
                if (err) {
                    console.log("Error:" + err);
                }
                else {
                    response.json(res)
                }
            })
        }
    })
});
apiRouters.post('/agoodsType', function (request, response) {
    GoodsType.find({'type_name': request.body.type_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                var goodsType = new GoodsType({
                    type_name: request.body.type_name,
                    type_desc: request.body.type_desc,
                    is_show: request.body.is_show,
                    show_in_nav: request.body.show_in_nav
                });
                goodsType.save(function(err, desc){
                    if (err) {
                        console.log("Error:" + err);
                    }
                    else {
                        response.json({
                            errno: 0,
                            message: '添加成功'
                        });
                    }
                })
            }else {
                response.json({
                    errno: 0,
                    message: '产品类型已存在！'
                });
            }
        }
    })
});

module.exports = apiRouters;