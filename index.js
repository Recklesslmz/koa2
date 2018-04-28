const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const config = require('./config/config')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const routers = require('./router')

app.use(cors())
app.use(bodyParser())
app.use(routers)
const sessionMysqlConfig = {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST
};
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))
app.listen(config.prot, () => {
    console.log('项目启动了。。。')
})