const path = require('path')
const fs = require('fs')
const router = require('koa-router')()
const combineRouters = require('../middlewares/combine_routes')

const signin = require('./signin')

const routers = combineRouters([router, signin])

module.exports = routers