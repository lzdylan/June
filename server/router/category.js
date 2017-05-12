/**
 * Created by war3_2 on 2017/5/5.
 */
var Category = require("../junedb/category.js");
var multer = require('multer');
var logoName = '';
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, 'upload/category')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        logoName = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
        cb(null, logoName);
    }
});
//添加配置文件到muler对象。
var upload = multer({
    storage: storage
}).single('cat_logo');

exports.findCategory = function (request, response) {
    Category.find(function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.removeCategory = function (request, response) {
    Category.findOneAndRemove({'cat_name': request.body.cat_name}, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            response.json(res)
        }
    })
}
exports.editCategory = function (request, response) {
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
exports.updateCategory = function (request, response) {
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
exports.addCategory = function (request, response) {
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
    upload(request, response, function (err) {
        if (err) {
            // 发生错误
            response.json({
                errno: 1,
                message: '上传失败!'
            });
            return
        }
        response.json({
            errno: 0,
            message: '上传成功!',
            logoName: logoName
        });
        // 一切都好
    })
}