/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品类型
var mongoose = require('../connection_junedb.js');

var GoodsTypeSchema = new mongoose.Schema({
    type_name: {type: String},
    type_desc: {type: String},
    is_show: {type: Boolean, default: false},
    add_time: {type: Date, default: Date.now()},
    last_edit: {type: Date, default: Date.now()},
    type_logo: {type: String},
    show_in_nav: {type: Boolean, default: false},
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories' //这里要写你指向的数据库表名字
    }
});

module.exports = mongoose.model('GoodsType',GoodsTypeSchema);