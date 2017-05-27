/**
 * Created by war3_2 on 2017/4/20.
 */
var express = require('express');
var Login = require("./login.js");
var GoodsType = require("./goodsType.js");
var Category = require("./category.js");
var Users = require("./users.js");
var Brands = require("./brands.js");
var Goods = require("./goods.js");
var apiRouters = express.Router();
// 登录
apiRouters.get('/login', Login.getLogin);
apiRouters.post('/login', Login.postLogin);
//商品类型
apiRouters.post('/findGoodsType', GoodsType.findGoodsType);
apiRouters.post('/removeGoodsType', GoodsType.removeGoodsType);
apiRouters.post('/updateGoodsType', GoodsType.updateGoodsType);
apiRouters.post('/editGoodsType', GoodsType.editGoodsType);
apiRouters.post('/addGoodsType', GoodsType.addGoodsType);
apiRouters.post('/uploadGoodsType', GoodsType.imgUpload);
//商品分类
apiRouters.post('/findCategory', Category.findCategory);
apiRouters.post('/removeCategory', Category.removeCategory);
apiRouters.post('/editCategory', Category.editCategory);
apiRouters.post('/addCategory', Category.addCategory);
apiRouters.post('/updateCategory', Category.updateCategory);
apiRouters.post('/uploadCategory', Category.imgUpload);
//商品品牌
apiRouters.get('/findBrand', Brands.findBrand);
apiRouters.post('/removeBrand', Brands.removeBrand);
apiRouters.post('/editBrand', Brands.editBrand);
apiRouters.post('/addBrand', Brands.addBrand);
apiRouters.post('/updateBrand', Brands.updateBrand);
apiRouters.post('/uploadBrand', Brands.imgUpload);
//商品管理
apiRouters.post('/findGoods', Goods.findGoods);
apiRouters.post('/removeGoods', Goods.removeGoods);
apiRouters.post('/editGoods', Goods.editGoods);
apiRouters.post('/addGoods', Goods.addGoods);
apiRouters.post('/updateGoods', Goods.updateGoods);
apiRouters.post('/uploadGoods', Goods.imgUpload);
//客户管理
apiRouters.post('/loadUsers', Users.loadUsers);
apiRouters.post('/editUsers', Users.editUsers);
apiRouters.post('/updateUsers', Users.updateUsers);
module.exports = apiRouters;