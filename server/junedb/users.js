/**
 * Created by war3_2 on 2017/5/9.
 */
// 用户列表
var mongoose = require('../connection_junedb.js');

var UsersSchema = new mongoose.Schema({
    user_name: {type: String},
    user_email : { type: String},
    user_phone : { type: String},
    user_password : { type: String},
    user_avatar : { type: String},  // 头像
    sex: {type: Boolean},
    pay_points: {type: Number, default: 0}, // 消费积分
    reg_time : { type: Date, default: Date.now()},  // 注册时间
    is_enable: {type: Boolean},
    last_login: {type: Date, default: Date.now()}, // 最后一次登录时间
    alias: {type: String}, // 昵称
    wechat:{
        id: {type: String},
        token: {type: String},
        email: {type: String},
        name: {type: String}
    },
    alipay:{
        id: {type: String},
        token: {type: String},
        email: {type: String},
        name: {type: String}
    },
    qq:{
        id: {type: String},
        token: {type: String},
        email: {type: String},
        name: {type: String}
    },
    weibo:{
        id: {type: String},
        token: {type: String},
        email: {type: String},
        name: {type: String}
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' //这里要写你指向的数据库表名字
    },
    user_address: [{
        address_name: 	{type: String}, 	// 名称
        consignee: {type: String}, 	// 收货人的名字
        email: 	{type: String}, 	// 收货人的email
        province: 	{type: String},	 	// 收货人的省份
        city: 	{type: String},	 	// 收货人城市
        district: 	{type: String},	 	// 收货人的地区
        address: {type: String},	 	// 收货人的详细地址
        zipcode: {type: String}, 	// 收货人的邮编
        tel: {type: String}, 	// 收货人的电话
        mobile: {type: String}, 	// 收货人的手机号
        default_address: {type: Boolean, default: true}, // 默认地址
        best_time: {type: String},	 	// 收货人的最佳收货时间
    }]
});

module.exports = mongoose.model('Users',UsersSchema);