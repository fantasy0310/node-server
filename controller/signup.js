const userModel = require('../models/index')
module.exports = {
    postSignup: async (ctx) => {
        console.log(ctx.request.body)
        let {nick_name, password, account} = ctx.request.body
        await userModel.findDataCountByName([nick_name]).then(res => {
            console.log(res)
            if (res.length > 0) {
                ctx.body = {
                    code: 0,
                    msg: '账号已被注册过'
                }
                return
            }
        })
        await userModel.insertData([nick_name, password, account]).then(res => {
            ctx.body = {
                code: 0,
                msg: '注册成功'
            }
        })
    }
}