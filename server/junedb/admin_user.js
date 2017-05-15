/**
 * Created by war3_2 on 2017/4/19.
 */
// 管理员
var mongoose = require('../connection_junedb.js');

var AdminUserSchema = new mongoose.Schema({
    user_name: {type: String},                        //管理员登录名
    email: {type: String},                        //管理员邮箱
    password : { type: String},                  //管理员登录密码
    add_time : { type: Date, default: Date.now()},                    //管理员添加时间
    last_login: {type: Date, default: Date.now()},                        //管理员最后一次登录时间
    last_ip: {type: Number},                        //管理员最后一次登录IP
    action_list : { type: Array}                      //管理员管理权限列表
});

module.exports = mongoose.model('AdminUser',AdminUserSchema);