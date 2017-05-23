/**
 * Created by war3_2 on 2017/5/22.
 */
var Goods = require("../junedb/goods.js");
var muilter  = require('../multerUtil');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick : true });
var original_img = '';
var goods_thumb = '';
var goods_img = '';
var upload = muilter.single('original_img');

exports.findGoods = function (request, response) {
    var dataCount = 0;
    var condition = '';
    var pageSize = Number(request.body.pageSize);                   // 一页多少条
    var currentPage = request.body.current;                // 当前第几页
    var skipnum = (currentPage - 1) * pageSize;   // 跳过数
    condition = request.body.goods_name ? {'goods_name': request.body.goods_name} : {};
    Goods.count(condition, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            dataCount = res;
        }
    });
    Goods.find(condition).skip(skipnum).limit(pageSize).exec(function (err, res) {
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
exports.removeGoods = function (request, response) {
    Goods.findOneAndRemove({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.editGoods = function (request, response) {
    Goods.findOne({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.updateGoods = function (request, response) {
    var goodsData = request.body;
    goodsData.last_edit = Date.now();
    goodsData.original_img.push(original_img);
    goodsData.goods_thumb.push(goods_thumb);
    goodsData.goods_img.push(goods_img);
    Goods.update({'goods_name': request.body.goods_name}, goodsData, function(err, desc){
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
exports.addGoods = function (request, response) {
    console.log(request.body)
    Goods.find({'goods_name': request.body.goods_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                var goodsData = new Goods(request.body);
                goodsData.original_img.push(original_img);
                goodsData.goods_thumb.push(goods_thumb);
                goodsData.goods_img.push(goods_img);
                goodsData.save(function(err, desc){
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
                    message: '商品已经存在，添加失败!',
                    desc: res
                });
            }
        }
    })
}

exports.imgUpload = function (request, response) {
    upload(request, response, function (err) {
        if (err) {
            // 发生错误
            response.json({
                errno: 1,
                message: '上传失败!'
            });
            return
        }
        var path = request.file.path;
        original_img = 'upload/images/'+request.file.filename;
        goods_thumb = 'upload/goods/thumb/'+request.file.filename;
        goods_img = 'upload/goods/middle/'+request.file.filename;
        imageMagick(path)
            .resize(150, 150)
            .autoOrient()
            .write(goods_thumb, function(err){
                if (err) {
                    console.log(err);
                }
            });
        imageMagick(path)
            .resize(800, 800)
            .autoOrient()
            .write(goods_img, function(err){
                if (err) {
                    console.log(err);
                }
            });
        response.json({
            errno: 0,
            message: '上传成功!'
        });
        // 一切都好
    })
}