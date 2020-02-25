const writeFromStdoutToFile : Function = async (fileName : string) => {
    const file = await Deno.open(fileName, 'w+')
    await Deno.copy(file, Deno.stdin)
    file.close()
}
writeFromStdoutToFile('aa.txt')
