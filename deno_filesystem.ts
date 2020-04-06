async function watchForFileEvents() {
    for await (let event of  Deno.fsEvents(Deno.cwd())) {
        console.log(event)
    }
}
watchForFileEvents()
