const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const cors = require('koa2-cors');
const routers = require('./router')

app.use(cors())
app.use(routers)
app.listen(3000, () => {
    console.log('项目启动了。。。')
})