/**
 * Created by war3_2 on 2017/5/5.
 */
var GoodsType = require("../junedb/goods_type.js");

exports.fgoodsType = function (request, response) {
    GoodsType.find(function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.rgoodsType = function (request, response) {
    GoodsType.findOneAndRemove({'type_name': request.body.type_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.egoodsType = function (request, response) {
    GoodsType.findOne({'type_name': request.body.type_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(request.body.type_name)
            response.json(res);
        }
    })
}
exports.agoodsType = function (request, response) {
    GoodsType.find({'type_name': request.body.type_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                var goodsType = new GoodsType(request.body);
                goodsType.save(function(err, desc){
                    if (err) {
                        response.json({
                            errno: 1,
                            message: '添加失败!',
                            desc: desc
                        });
                    }
                    else {
                        response.json({
                            errno: 0,
                            message: '添加成功!',
                            desc: desc
                        });
                    }
                })
            }else {
                var goodsType = request.body;
                GoodsType.update({'type_name': request.body.type_name}, goodsType, function(err, desc){
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
        }
    })
}