/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品品牌
var mongoose = require('../connection_junedb.js');

var BrandSchema = new mongoose.Schema({
    brand_name: {type: String},                     //品牌名称
    brand_desc : { type: String},                   //品牌描述
    brand_logo : { type: String},                   //品牌logo
    sort_order: {type: Number},                     //品牌在前台页面的显示顺序,数字越大越靠后
    add_time : { type: Date, defult: Date.now()},  //品牌添加时间
    is_show: {type: Boolean},                       //该品牌是否显示;false否true显示
});

module.exports = mongoose.model('Brand',BrandSchema);