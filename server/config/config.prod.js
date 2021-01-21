const path = require("path")
const serviceAddr = require("./serviceAddr")
const proxy = serviceAddr.xxx

module.exports = appInfo => {
    const config = exports = {}
    let language;
    config.keys = appInfo.name + "xxxx"
    config.session = { key: "ISPIM_ID" },
        config.middleware = ["xxx"]  //middleware中的插件
    config.view = {
        defaultViewEngine: "nunjucks",
        mapping: {
            '.html': 'nunjucks',
        },
        root: [path.join(appInfo.baseDir, '../dev/views')].join(",") // 静态目录
    }
    // 去除头部
    config.static = {
        prefix: '/ued',
        dir: path.join(appInfo.baseDir, "../dev/")
    }
    try {
        // 图标
        config.siteFile = {
            "/favicon.ico": fs.readFileSync(path.join(appInfo.baseDir, "../dev/favicon.ico"))
        }
    } catch (e) {

    }
    // 使用https
    config.cluster = {
        listen: {
            path: "",
            port: ""
        },
        https: {
            key: "",
            cert: "",
            ciphers: ""
        }
    }
    config.proxy=true
    config.security = {
        csrf: {
            headerName: "x-csrf-token-egg"
        },
        hsts: {
            enable: true
        },
        csp: {
            enable: true
        }
    }
}