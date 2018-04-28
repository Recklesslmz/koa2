const Koa = require('koa')
const router = require('koa-router')()
const userModal = require('../mysql/sql')
const app = new Koa()


router.post('/register', async(ctx, next) => {
    let { userName, mobile, password } = ctx.request.body
    await userModal.signUp({ userName, mobile, password }).then(result => {
        console.log(result)
        ctx.body = Object.assign({ data: 200 })
    })
})

router.get('/getName', async(ctx) => {
    let res,
        postsLength,
        name = decodeURIComponent(ctx.request.querystring.split('=')[1]);
    await userModal.findUserData(name).then(result => {
        postsLength = result
    })
    ctx.body = Object.assign({ data: 200, res: res, postsLength, postsLength })
})
router.get('/getPage', async(ctx) => {
    ctx.body = Object.assign({ data: '你好，koa' })
})
module.exports = router