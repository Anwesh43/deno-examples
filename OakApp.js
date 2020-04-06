import {Application, Router} from './Oak.ts'
import {green} from './colors.ts'
import Card from './Card.jsx'
import {ReactDOMServer} from './ReactDeps.ts'
const app = new Application()
const router = new Router()
router.get('/hello', context =>{
    console.log(green("got a request"), context.request.headers)
    context.response.body = 'hello world'
})

router.get('/card/:text', context => {
    const params = context.params
    const domString = ReactDOMServer.renderToString(Card(params))
    context.response.type = '.html'
    context.response.body = domString
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen("127.0.0.1:8000")
