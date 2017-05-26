/**
 * Created by war3_2 on 2017/5/22.
 */
var Goods = require("../junedb/goods.js");
var muilter  = require('../multerUtil');
var upload = muilter.single('goods_img');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick : true });
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
                message: '上传失败!',
                img_box: request.file.filename
            });
            return
        }
        creatImg(150, 150, request.file.path, 'upload/goods/thumb/'+request.file.filename);
        creatImg(800, 800, request.file.path, 'upload/goods/middle/'+request.file.filename);
        response.json({
            errno: 0,
            message: '上传成功!',
            img_box: request.file.filename
        });
    })
}
function creatImg(width, height, path, name) {
    imageMagick(path)
        .resize(width, height)
        .autoOrient()
        .write(name, function(err){
            if (err) {
                console.log(err);
            }
        });
}