/**
 * Created by war3_2 on 2017/5/5.
 */
var Brand = require("../junedb/brand.js");
var muilter  = require('../multerUtil');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick : true });
var brand_logo = '';
var upload = muilter.single('brand_logo');

exports.findBrand = function (request, response) {
    Brand.find(function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.removeBrand = function (request, response) {
    Brand.findOneAndRemove({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.editBrand = function (request, response) {
    Brand.findOne({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.updateBrand = function (request, response) {
    var brandData = request.body;
    brandData.last_edit = Date.now();
    brandData.brand_logo = brand_logo;
    Brand.update({'brand_name': request.body.brand_name}, brandData, function(err, desc){
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
exports.addBrand = function (request, response) {
    Brand.find({'brand_name': request.body.brand_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                var brandData = new Brand(request.body);
                brandData.brand_logo = brand_logo;
                brandData.save(function(err, desc){
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
                    message: '品牌已经存在，添加失败!',
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
        brand_logo = 'upload/brands/'+request.file.filename;
        imageMagick(path)
            .resize(150, 150)
            .autoOrient()
            .write('upload/brands/'+request.file.filename, function(err){
                console.log(request.file);
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