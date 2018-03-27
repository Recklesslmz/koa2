const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>全家便利店</data>'
    }
}
app.use(main)
app.listen(3000)