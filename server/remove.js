/**
 * Created by war3_2 on 2017/4/17.
 */
var User = require("./users.js");

function del(){
    var wherestr = {'username' : 'Tracy McGrady'};

    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

del();