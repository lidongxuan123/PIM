var httpProxy = require("http-proxy")  // 可以用来转发websocket

const koa = require("koa")

const proxy = httpProxy.createProxyServer({
    ws: true,
    changeOrigin: true,
})

let app = new koa()
class AppBootHook{
    constructor(app) {
        this.app = app
    }
    configwillLoad() {

    }

    async didload() {

    }
    async willRead(){

    }
    async didReady() {

    }
    async serverDidReady() {
        this.app.server.on("upgrade",(req,socket, head)=> {
            let target = null
            if(req.url.indexOf("xxx")>-1){
                target = "url/xxxx"
            }else {
                target = "xxxxxx"
            }

            proxy.ws(req,socket, head, {
                target: target,
                ws: true,
                changeOrigin: true,
                secure: false,
                httpVersion: "1.1",
                xfwd: true,
                hostRewrite: true,
                autoRewrite: true,
                protocolRewrite: 'http',
                rejectUnauthorized: false,
                down: false,
            })

            proxy.on("error",function(err,req,socket) {
                console.log("xxxxx")
            })
        })
        this.app.messenger.on("checkUser", async options => {
            const ctx = await this.app.createAnonymouseContent()
        })
    }
}