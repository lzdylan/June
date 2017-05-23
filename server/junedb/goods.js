/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品
var mongoose = require('../connection_junedb.js');

var GoodsSchema = new mongoose.Schema({
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories' //商品分类
    },
    cat_name: {type: String},
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodstypes' //商品类型
    },
    type_name:{ type: String},
    brand_id: 	{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands' //商品品牌
    }, 	 //品牌id，取值于brand 的brand_id
    brand_name: {type:String},
    goods_sn: 	{type: Number},	 //商品的唯一货号
    goods_name: 	{type: String},	 //商品的名称
    goods_number: 	{type: Number}, 	 //商品库存数量
    goods_weight: 	{type: Number}, 	 //商品的重量，以千克为单位
    market_price: 	{type: Number}, 	 //市场售价
    shop_price: 	{type: Number}, 	 //本店售价
    cost: {type:String}, //商品成本
    promote_price: 	{type: Number}, 	 //促销价格
    promote_start_date: 	{type: Date, default: Date.now()}, 	 //促销价格开始日期
    promote_end_date: 	{type: Date, default: Date.now()}, 	 //促销价格结束日期
    warn_number: 	{type: Number}, 	 //商品报警数量
    keywords: 	{type: String},	 //商品关键字，放在商品页的关键字中，为搜索引擎收录用
    goods_brief: 	{type: String},	 //商品的简短描述
    goods_desc: 	{type: String},	 //商品的详细描述
    goods_thumb: 	{type: Array},	 //商品在前台显示的微缩图片，如在分类筛选时显示的小图片
    goods_img: 	{type: Array},	 //商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片
    original_img: 	{type: Array},	 //应该是上传的商品的原始图片
    is_on_sale: 	{type: Boolean}, 	 //该商品是否开放销售，true，是；false，否
    add_time: 	{type: Date, default: Date.now()}, 	 //商品的添加时间
    is_best: 	{type: Boolean}, 	 //是否是精品；false，否；true，是
    is_new: 	{type: Boolean}, 	 //是否是新品
    is_hot: 	{type: Boolean}, 	 //是否热销，false，否；true，是
    is_promote: 	{type: Boolean}, 	 //是否特价促销；false，否；true，是
    last_edit: 	{type: Date, default: Date.now()}, 	 //最近一次更新商品配置的时间
    seller_note: 	{type: String},	 //商品的商家备注，仅商家可见
    give_integral:	{type: Number}	 //购买该商品时每笔成功交易赠送的积分数量
});
module.exports = mongoose.model('Goods',GoodsSchema);