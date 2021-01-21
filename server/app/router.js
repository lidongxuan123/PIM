module.exports = app=> {
    const {router, controller} = app
    

    const authCheck = app.middleware.authCheck()
    const initStatic = app.config.xxxx

    router.get(`${xxx}login.html`,app.controller.home.login)
}