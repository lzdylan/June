/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品分类
var mongoose = require('../connection_junedb.js');

var CategorySchema = new mongoose.Schema({
    cat_name: {type: String},                  //分类名称
    cat_desc : { type: String},                //分类描述
    measure_unit : { type: String, default: '件'},            //该分类的计量单位
    is_show: {type: Boolean, default: false},                   //是否在前台页面显示 true显示; false不显示
    add_time: {type: Date, default: Date.now()},
    last_edit: {type: Date, default: Date.now()},
    cat_logo: {type: String}
});

module.exports = mongoose.model('Category',CategorySchema);