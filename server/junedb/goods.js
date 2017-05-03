/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品
var mongoose = require('../connection_junedb.js');

var GoodsSchema = new mongoose.Schema({
    cat_id: 	{type: Number}, 	 //商品所属商品分类id，取值category的cat_id
    goods_sn: 	{type: Number},	 //商品的唯一货号
    goods_name: 	{type: String},	 //商品的名称
    goods_name_style: {type: String},	 //商品名称显示的样式；包括颜色和字体样式；格式如#ff00ff+strong
    click_count: 	{type: Number}, 	 //商品点击数
    brand_id: 	{type: Number}, 	 //品牌id，取值于brand 的brand_id
    provider_name:  {type: String},	 //供货人的名称，程序还没实现该功能
    goods_number: 	{type: Number}, 	 //商品库存数量
    goods_weight: 	{type: Number}, 	 //商品的重量，以千克为单位
    market_price: 	{type: Number}, 	 //市场售价
    shop_price: 	{type: Number}, 	 //本店售价
    promote_price: 	{type: Number}, 	 //促销价格
    promote_start_date: 	{type: Date}, 	 //促销价格开始日期
    promote_end_date: 	{type: Date}, 	 //促销价格结束日期
    warn_number: 	{type: Number}, 	 //商品报警数量
    keywords: 	{type: String},	 //商品关键字，放在商品页的关键字中，为搜索引擎收录用
    goods_brief: 	{type: String},	 //商品的简短描述
    goods_desc: 	{type: String},	 //商品的详细描述
    goods_thumb: 	{type: String},	 //商品在前台显示的微缩图片，如在分类筛选时显示的小图片
    goods_img: 	{type: String},	 //商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片
    original_img: 	{type: String},	 //应该是上传的商品的原始图片
    is_real: 	{type: Number}, 	 //是否是实物，1，是；0，否；比如虚拟卡就为0，不是实物
    extension_code: 	{type: String},	 //商品的扩展属性，比如像虚拟卡
    is_on_sale: 	{type: Number}, 	 //该商品是否开放销售，1，是；0，否
    is_alone_sale: 	{type: Number}, 	 //是否能单独销售，1，是；0，否；如果不能单独销售，则只能作为某商品的配件或者赠品销售
    Is_shipping:	{type: Number},
    integral: 	{type: Number}, 	 //购买该商品可以使用的积分数量，估计应该是用积分代替金额消费；但程序好像还没有实现该功能
    add_time: 	{type: Date}, 	 //商品的添加时间
    sort_order: 	{type: Number}, 	 //应该是商品的显示顺序，不过该版程序中没实现该功能
    is_delete: 	{type: Number}, 	 //商品是否已经删除，0，否；1，已删除
    is_best: 	{type: Number}, 	 //是否是精品；0，否；1，是
    is_new: 	{type: Number}, 	 //是否是新品
    is_hot: 	{type: Number}, 	 //是否热销，0，否；1，是
    is_promote: 	{type: Number}, 	 //是否特价促销；0，否；1，是
    bonus_type_id: 	{type: Number}, 	 //购买该商品所能领到的红包类型
    last_update: 	{type: Date}, 	 //最近一次更新商品配置的时间
    goods_type: 	{type: Number}, 	 //商品所属类型id，取值表goods_type的cat_id
    seller_note: 	{type: String},	 //商品的商家备注，仅商家可见
    give_integral:	{type: Number},	 //购买该商品时每笔成功交易赠送的积分数量
    rank_integral:	{type: Date},
    suppliers_id:	{type: Number},
    is_check:	{type: Number},
});
module.exports = mongoose.model('Goods',GoodsSchema);