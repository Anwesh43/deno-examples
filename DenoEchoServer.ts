const port = 9000
const listener = await Deno.listen({port})
console.log(`listening on ${port}`)
for await (const conn of listener) {
    Deno.copy(conn, conn)
}
