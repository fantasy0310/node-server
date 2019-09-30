const Koa = require('koa')
const Router = require('koa-router')
const cityHandle = require('../controller/v1/cities')
const router = new Router()

router.get('/cities', cityHandle.getCity)

module.exports = router