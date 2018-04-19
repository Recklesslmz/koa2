const compose = require('koa-compose')

module.exports = function(routers) {
    const middleware = []
    routers.forEach(router => {
        middleware.push(router.routes())
        middleware.push(router.allowedMethods())
    })
    return compose(middleware)
}