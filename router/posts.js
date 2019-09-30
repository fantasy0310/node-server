const router = require('koa-router')()

router.get('/posts', async (ctx, next) => {
    await ctx.render('posts', {
        session: ctx.session,
    })
    // ctx.body = {
    //     code: 0
    // }
})

module.exports = router