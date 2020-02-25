class Router {

    urlHandlerMap = {}
    async use(server) {
        for await (const req of server) {
            if (req.url in this.urlHandlerMap) {
                this.urlHandlerMap[req.url](req);
            } else {
                req.respond({body : 'sorry no route we were able to find'});
            }
        }
    }

    get(urlString, handler) {
        this.urlHandlerMap[urlString] = handler
    }
}

export const router = new Router();
