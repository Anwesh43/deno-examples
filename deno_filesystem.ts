async function watchForFileEvents() {
    for await (let event of  Deno.fsEvents("/")) {
        console.log(event)
    }
}
watchForFileEvents()
