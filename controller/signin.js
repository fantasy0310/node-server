const md5 = require('md5')
const checkLogin = require('../middlewares/check')
const userModel = require('../models/index')

module.exports = {
    postSignin: (ctx, next) => {
        if (!ctx.request.body) {
            ctx.body = {
                code: 1,
                msg: '请输入用户名或密码'
            }
            return
        }
        let {name, password} = ctx.request.body
        console.log(ctx.request.body)
        if (name && password) {
            ctx.session = {
                user: name,
                id: 1101
            }
            console.log(ctx.session)
            ctx.body = {
                code: 0,
                msg: '登录成功'
            }
        }
    },
    getSignin: async (ctx, next) => {
        console.log(ctx.session)
        await checkLogin.checkNotLogin(ctx)
        await ctx.render('signin', {
            session: ctx.session,
        })
        // console.log(ctx.session)
        // ctx.body = {
        //     data: ctx.session
        // }
    },
    getInfo: async (ctx, next) => {
        await userModel.getInfo().then(res => {
            ctx.body = res
        })
    }
}