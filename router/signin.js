const router = require('koa-router')()
const controller = require('../controller/signin')

router.post('/signin', controller.postSignin)
router.get('/signin', controller.getSignin)
router.get('/getinfo', controller.getInfo)

module.exports = router