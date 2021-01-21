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
        
    }
}