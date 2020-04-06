import {Application, Router} from './Oak.ts'
import {green} from './colors.ts'
const app = new Application()
const router = new Router()
router.get('/hello', context =>{
    console.log(green("got a request"), context.request.headers)
    context.response.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen("127.0.0.1:8000")
