/**
 * Created by war3_2 on 2017/4/20.
 */
var express = require('express');
var Login = require("./login.js");
var GoodsType = require("./goodsType.js");
var Category = require("./category.js");
var apiRouters = express.Router();

apiRouters.get('/login', Login.getLogin);
apiRouters.post('/login', Login.postLogin);

apiRouters.get('/fgoodsType', GoodsType.fgoodsType);
apiRouters.post('/rgoodsType', GoodsType.rgoodsType);
apiRouters.post('/egoodsType', GoodsType.egoodsType);
apiRouters.post('/agoodsType', GoodsType.agoodsType);

apiRouters.get('/fcategory', Category.fcategory);
apiRouters.post('/rcategory', Category.rcategory);
apiRouters.post('/ecategory', Category.ecategory);
apiRouters.post('/acategory', Category.acategory);
apiRouters.post('/upload', Category.imgUpload);

module.exports = apiRouters;