/**
 * Created by war3_2 on 2017/5/5.
 */
var GoodsType = require("../junedb/goods_type.js");

exports.findGoodsType = function (request, response) {
    var condition = request.body.cat_id ? {'cat_id': request.body.cat_id} : {};
    GoodsType.find(condition, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.removeGoodsType = function (request, response) {
    GoodsType.findOneAndRemove({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.editGoodsType = function (request, response) {
    GoodsType.findOne({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.updateGoodsType = function (request, response) {
    var goodsType = request.body;
    goodsType.last_edit = Date.now();
    GoodsType.update({'_id': request.body._id}, goodsType, function(err, desc){
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
exports.addGoodsType = function (request, response) {
    GoodsType.find({'type_name': request.body.type_name, 'cat_id': request.body.cat_id}, function (err, res) {
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
                response.json({
                    errno: 1,
                    message: '商品类型存在，添加失败!',
                    desc: res
                });
            }
        }
    })
}