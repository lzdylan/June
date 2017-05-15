/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品类型
var mongoose = require('../connection_junedb.js');

var GoodsTypeSchema = new mongoose.Schema({
    type_name: {type: String},
    type_desc: {type: String},
    is_show: {type: Boolean, default: false},
    show_in_nav: {type: Boolean, default: false}
});

module.exports = mongoose.model('GoodsType',GoodsTypeSchema);