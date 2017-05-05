/**
 * Created by war3_2 on 2017/5/5.
 */
var Category = require("../junedb/category.js");

exports.fcategory = function (request, response) {
    Category.find(function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.rcategory = function (request, response) {
    Category.findOneAndRemove({'cat_name': request.body.cat_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.ecategory = function (request, response) {
    Category.findOne({'cat_name': request.body.cat_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(request.body.cat_name)
            response.json(res);
        }
    })
}
exports.acategory = function (request, response) {
    Category.find({'cat_name': request.body.cat_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                var goodsType = new Category(request.body);
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
                Category.update({'cat_name': request.body.cat_name}, goodsType, function(err, desc){
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