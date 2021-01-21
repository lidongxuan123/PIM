const Controller = require("egg").Controller
const urlApi = require("url")

const ms  = require("ms")

class loginController extends Controller {
    async index () {
        const {ctx, config} = this
        const req = ctx.request
        let body = ctx.request.body
        let session = ctx.session
    }
}