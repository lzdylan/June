/**
 * Created by war3_2 on 2017/4/17.
 */
var AdminUser = require("./junedb/admin_user.js");
/**
 * 插入
 */
function insert() {
    var admin_user = new AdminUser({
        user_name : 'dylan',                 //用户账号
        password: '123456'                           //密码
    });

    admin_user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

insert();