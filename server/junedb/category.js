/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品分类
var mongoose = require('../connection_junedb.js');

var CategorySchema = new mongoose.Schema({
    cat_name: {type: String},                  //分类名称
    cat_desc : { type: String},                //分类描述
    measure_unit : { type: String, default: '件'},            //该分类的计量单位
    is_show: {type: Boolean},                   //是否在前台页面显示 true显示; false不显示
    cat_logo: {type: String},
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodstypes' //这里要写你指向的数据库表名字
    }
});

module.exports = mongoose.model('Category',CategorySchema);