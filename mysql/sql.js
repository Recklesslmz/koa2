const mysql = require('mysql')
const config = require('../config/config')

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

let query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
}
let posts = `create table if not exists posts(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(40) NOT NULL,
    content  VARCHAR(40) NOT NULL,
    uid  VARCHAR(40) NOT NULL,
    moment  VARCHAR(40) NOT NULL,
    comments  VARCHAR(40) NOT NULL DEFAULT '0',
    pv  VARCHAR(40) NOT NULL DEFAULT '0',
    PRIMARY KEY ( id )
   );`;

let comment = `create table if not exists comment(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    content VARCHAR(40) NOT NULL,
    postid VARCHAR(40) NOT NULL,
    PRIMARY KEY ( id )
   );`;

const createTable = sql => query(sql, [])

createTable(posts);
createTable(comment);


let insertData = function(value) {
        let _sql = "insert into user(name,sex) values(?,?);";
        return query(_sql, value);
    }
    // 查找用户
let findUserData = (name) => {
        let _sql = `select * from user where name="${name}";`
        return query(_sql)
    }
    //注册用户
let signIn = function(value) {
    let _sql = `indert into `
}
module.exports = {
    query,
    insertData,
    findUserData
}