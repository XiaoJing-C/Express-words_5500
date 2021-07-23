// 连接数据库
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "words_5500"
})

connection.connect((err) => {
    if(err) {
        console.log("连接失败")
    }else {
        console.log("连接成功")
    }
})

let query=(sql, callback)=>{
    connection.query(sql, function(err, rows){
        callback(err, rows);
    });
}

exports.query = query;