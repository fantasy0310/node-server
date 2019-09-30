const router = require('koa-router')()
const controller = require('../controller/signup')

router.post('/signup', controller.postSignup)

module.exports = router