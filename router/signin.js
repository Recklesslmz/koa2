const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

router.get('/getName', async(ctx) => {
    ctx.body = Object.assign({ data: 200 })
})
router.get('/getPage', async(ctx) => {
    ctx.body = Object.assign({ data: '你好，koa' })
})
module.exports = router