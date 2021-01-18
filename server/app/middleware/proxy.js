const proxy = require("http-proxy-middleware")
let c2k = require("koa2-connect")
const pathMatching =require('egg-path-matching')
const omit = require("lodash/omit")

module.exports = (Option, app) =>{
    return async function httpProxy(ctx, next) {
        const proxyTable = omit(options,['enable',"match","ignore"])
        const path = ctx.require.originalUrl || ctx.request.url
        Object.keys(proxyTable).some(async context=> {
            const match = pathMatching({match: context})
            const isMatch = match(path)
            let remoteIp= (ctx.request.headers['x-forwarded-for'] || '').split(",")[0] || ctx.request.ip
            ctx.request.headers['remoteIp'] = remoteIp.replace("/:::fffff:/", '')
            if(isMatch) {
                let proxyOptions = proxyTable[context]
                if(typeof proxyOptions == "string") {
                    proxyOptions = {
                        target: proxyOptions
                    }
                }
                a = await c2k(proxy(context, proxyOptions))(ctx, next)
            }
        })
        await next()
    }
}