import {serve, ServerRequest} from 'https://deno.land/std@v0.30.0/http/server.ts'
import {router} from './router.js';

const port : number = 5000
const s = serve({port})
router.use(s)
router.get('/hello', (req : ServerRequest) => {
    req.respond({body: 'hello world'})
})
