const v1 = require('./v1')
const signin = require('./signin')
const posts = require('./posts')
const signup = require('./signup')

module.exports = (app) => {
    app.use(v1.routes())
    app.use(signin.routes())
    app.use(posts.routes())
    app.use(signup.routes())
}