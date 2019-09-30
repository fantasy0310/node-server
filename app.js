const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session2')
const views = require('koa-views')
const router = require('./router/index')

const app = new Koa()

let config = {
    key: 'SID'
}

app.use(session(config))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(bodyParser({
    formLimit: '1mb'
}))
router(app)
console.log(process.argv)
// app.use(router.routes())
app.listen(9009)