module.exports = {
    checkNotLogin: (ctx) => {
        console.log(ctx.session.user)
        if (ctx.session && ctx.session.user) {
            ctx.redirect('/posts')
            return false
        }
        return true
    }
}