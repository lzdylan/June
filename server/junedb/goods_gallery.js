/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品相册
var mongoose = require('../connection_junedb.js');

var GoodsGallerySchema = new mongoose.Schema({
    img_id: {type: Number}, 		//商品相册ID
    goods_id:	{type: Number}, 		//图片属性商品的id
    img_url	: {type: String},	//实际图片url
    img_desc:	{type: String},		//图片说明信息
    thumb_url:	{type: String},		//微缩图片url
    img_original:	{type: String}		//根据名字猜，应该是上传的图片文件的最原始的文件的url
});

module.exports = mongoose.model('GoodsGallery',GoodsGallerySchema);