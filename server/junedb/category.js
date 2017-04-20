/**
 * Created by war3_2 on 2017/4/19.
 */
// 商品分类
var mongoose = require('../connection_junedb.js');

var CategorySchema = new mongoose.Schema({
    cat_id : { type: Number},                  //自增id号
    cat_name: {type: String},                  //分类名称
    keywords: {type: String},                  //分类的关键字,可能是为了搜索
    cat_desc : { type: String},                //分类描述
    parent_id: {type: Number},                 //该分类的父类ID,取值于该表的cat_id字段
    sort_order: {type: Number},                //该分类在页面显示的顺序,数字越大顺序越靠后,同数字,id在前的先显示
    template_file: {type: String},             //不确定字段,按名和表设计猜,应该是该分类的单独模板文件的名字
    measure_unit : { type: String},            //该分类的计量单位
    show_in_nav: {type: Number},               //是否显示在导航栏,0不;1显示
    is_show: {type: Number},                   //是否在前台页面显示 1显示; 0不显示
    grade : { type: Number},                  //该分类的最高和最低价之间的价格分级,当大于1时,会根据最大最小价格区间分成区间,会在页面显示价格范围,如0-300,300-600,600-900这种;
    filter_attr: {type: Number},             //如果该字段有值,则该分类将还会按照该值对应在表goods_attr的goods_attr_id所对应的属性筛选，如，封面颜色下有红，黑分类筛选
});

module.exports = mongoose.model('Category',CategorySchema);