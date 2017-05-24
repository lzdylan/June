/**
 * Created by war3_2 on 2017/5/5.
 */
var Category = require("../junedb/category.js");
var muilter  = require('../multerUtil');
var gm = require('gm');
var imageMagick = gm.subClass({ imageMagick : true });
var cat_logo = '';
var upload = muilter.single('cat_logo');
var cat_req = null;
var cat_res = null;
exports.findCategory = function (request, response) {
    var condition = request.body.brand_id ? {'brand_id': request.body.brand_id} : {};
    Category.find(condition, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.removeCategory = function (request, response) {
    Category.findOneAndRemove({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.editCategory = function (request, response) {
    Category.findOne({'_id': request.body._id}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res);
        }
    })
}
exports.updateCategory = function (request, response) {
    var categoryData = request.body;
    categoryData.last_edit = Date.now();
    categoryData.cat_logo = cat_logo;
    Category.update({'cat_name': request.body.cat_name}, categoryData, function(err, desc){
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
exports.addCategory = function (request, response) {
    Category.find({'cat_name': request.body.cat_name}, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if(res.length === 0) {
                upload(cat_req, cat_res, function (err) {
                    if (err) {
                        // 发生错误
                        response.json({
                            errno: 1,
                            message: '上传失败!'
                        });
                        return
                    }
                    var path = cat_req.file.path;
                    cat_logo = 'upload/category/'+cat_req.file.filename;
                    imageMagick(path)
                        .resize(150, 150)
                        .autoOrient()
                        .write(cat_logo, function(err){
                            if (err) {
                                console.log(err);
                            }
                        });
                    var categoryData = new Category(request.body);
                    categoryData.cat_logo = cat_logo;
                    categoryData.save(function(err, desc){
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
                })
            }else {
                response.json({
                    errno: 1,
                    message: '商品分类已经存在，添加失败!',
                    desc: res
                });
            }
        }
    })
}

exports.imgUpload = function (request, response) {
    cat_req = request;
    cat_res = response;
}