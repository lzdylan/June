/**
 * Created by war3_2 on 2017/4/17.
 */
/**
 * 用户信息
 */
var mongoose = require('./connection_junedb.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});
UserSchema.pre('save', function (next) {
    if(this.isNew) {
        this.logindate = Date.now();
    }else {

    }
    next();
})
UserSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('username')
            exec(cb)
    }
}
module.exports = mongoose.model('User',UserSchema);