/**
 * Created by war3_2 on 2017/5/11.
 */
var mongoose = require('../connection_junedb.js');

var OrderSchema = new mongoose.Schema({
    order_sn: {type: String},
    order_status: {type: Boolean}, 	//订单的状态;0未确认,1确认,2已取消,3无效,4退货
    shipping_status: {type: Boolean}, 	//商品配送情况;0未发货,1已发货,2已收货,4退货
    pay_status: {type: Boolean}, 	//支付状态;0未付款;1付款中;2已付款
    consignee: {type: String}, 	//收货人的姓名,用户页面填写,默认取值表user_address
    country: {type: String}, 	//收货人的国家,用户页面填写,默认取值于表user_address,其id对应的值在region
    province: {type: String}, 	//收货人的省份,用户页面填写,默认取值于表user_address, 其id对应的值在region
    city: {type: String}, 	//收货人的城市,用户页面填写,默认取值于表user_address,其id对应的值在region
    district: {type: String}, 	//收货人的地区,用户页面填写,默认取值于表user_address,其id对应的值在region
    address: {type: String},	//收货人的详细地址,用户页面填写,默认取值于表user_address
    zipcode: {type: String}, 	//收货人的邮编,用户页面填写,默认取值于表user_address
    tel: {type: String}, 	//收货人的电话,用户页面填写,默认取值于表user_address
    mobile: {type: String}, 	//收货人的手机,用户页面填写,默认取值于表user_address
    email: {type: String}, 	//收货人的Email, 用户页面填写,默认取值于表user_address
    postscript: {type: String},	//订单附言,由用户提交订单前填写
    pay_name: {type: String},	//用户选择的支付方式名称,取值表payment
    goods_amount: {type: Number}, 	//商品的总金额
    pack_fee: {type: Number}, 	//包装费用,取值表pack
    shipping_fee: {type: Number}, 	//配送费用
    add_time: {type: Date, default: new Date()}, 	//订单生成时间
    confirm_time: {type: Date, default: new Date()}, 	//订单确认时间
    pay_time: {type: Date, default: new Date()}, 	//订单支付时间
});

module.exports = mongoose.model('Order',OrderSchema);