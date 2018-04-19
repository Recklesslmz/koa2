const router = require('koa-router')()
    // router.post('/login', async ctx => {
    //     const { userName, password } = ctx.request.body
    //     ctx.body = Object.assign({
    //         data: {
    //             userName,
    //             password,
    //         }
    //     })

// })
router.get('/fetchName', async ctx => {
    let url = ctx.url

    //从上下文中的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    //从上下文中直接获取

    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

module.exports = router