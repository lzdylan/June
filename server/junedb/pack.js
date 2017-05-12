/**
 * Created by war3_2 on 2017/5/11.
 */
// 包装费用
var mongoose = require('../connection_junedb.js');

var PackSchema = new mongoose.Schema({
    pack_name: {type: String},		//包装的名称
    pack_img: {type: String},		//包装图纸
    pack_fee: {type: Number}, 		//包装的费用
    free_money: {type: Number}, 		//订单达到此金额可以免除该包装费用
    pack_desc: {type: String},		//包装描述
});

module.exports = mongoose.model('Pack',PackSchema);