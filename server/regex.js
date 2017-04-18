/**
 * Created by war3_2 on 2017/4/17.
 */
var User = require("./users.js");

function getByRegex(){
    var whereStr = {'username':{$regex:/m/i}};

    User.find(whereStr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

getByRegex();