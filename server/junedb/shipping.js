/**
 * Created by war3_2 on 2017/5/11.
 */
// 配送方式
var mongoose = require('../connection_junedb.js');

var ShippingSchema = new mongoose.Schema({
    shipping_code: {type: String}, //配送方式的字符串代号
    shipping_name: {type: String}, //配送方式名称
    shipping_desc: {type: String}, //配送方式描述
    insure: {type: Number}, //保价费用，单位元，或者是百分数，该值直接输出为报价费用
    support_cod: 	{type: Boolean}, //是否支持货到付款，1，支持；0，不支持
    enabled: 	{type: Boolean}, //该配送方式是否被禁用，1，可用；0，禁用
});

module.exports = mongoose.model('Shipping',ShippingSchema);