const fs = require('fs')
const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

const main = ctx => {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'

    } else {
        ctx.response.body = 'Koa'
    }
}

const first = ctx => {
    ctx.response.body = '欢迎来到koa的世界'

}
const second = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">First Page</a> '

}

router.use('/', first)
router.use('/second', second)
app.listen(3000)