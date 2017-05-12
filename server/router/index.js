/**
 * Created by war3_2 on 2017/4/20.
 */
var express = require('express');
var Login = require("./login.js");
var GoodsType = require("./goodsType.js");
var Category = require("./category.js");
var Users = require("./users.js");
var apiRouters = express.Router();

apiRouters.get('/login', Login.getLogin);
apiRouters.post('/login', Login.postLogin);

apiRouters.get('/findGoodsType', GoodsType.findGoodsType);
apiRouters.post('/removeGoodsType', GoodsType.removeGoodsType);
apiRouters.post('/updateGoodsType', GoodsType.updateGoodsType);
apiRouters.post('/editGoodsType', GoodsType.editGoodsType);
apiRouters.post('/addGoodsType', GoodsType.addGoodsType);

apiRouters.get('/findCategory', Category.findCategory);
apiRouters.post('/removeCategory', Category.removeCategory);
apiRouters.post('/editCategory', Category.editCategory);
apiRouters.post('/addCategory', Category.addCategory);
apiRouters.post('/updateCategory', Category.updateCategory);
apiRouters.post('/upload', Category.imgUpload);


apiRouters.get('/getFindUsers', Users.getFindUsers);
apiRouters.post('/postFindUsers', Users.postFindUsers);
apiRouters.post('/updateUsers', Users.updateUsers);
module.exports = apiRouters;