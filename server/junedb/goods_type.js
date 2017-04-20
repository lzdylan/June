/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品类型
var mongoose = require('../connection_junedb.js');

var GoodsTypeSchema = new mongoose.Schema({
    cat_id: {type: Number}, 		//自增id
    cat_name:	{type: String}, 		//商品类型名
    enabled: {type: Number},	//类型状态1，为可用；0为不可用；不可用的类型，在添加商品的时候选择商品属性将不可选
    attr_group:	{type: String},		//商品属性分组，将一个商品类型的属性分成组，在显示的时候也是按组显示。该字段的值显示在属性的前一行，像标题的作用
});

module.exports = mongoose.model('GoodsType',GoodsTypeSchema);