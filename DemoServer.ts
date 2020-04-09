import {Application, Router} from './oak.ts'

const app = new Application()
const router = new Router()

router.get('/ping', context => {
    context.response.body = {status : "OK"}
})
app.use(router.allowedMethods())
app.use(router.routes())
try {
    await app.listen('127.0.0.1:3000')
} catch(err) {
    console.log(err)
}
