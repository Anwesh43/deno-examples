const readFileThenCopyToConsole : Function = async (fileName : string) => {
      const f  = await Deno.open(fileName)
      await Deno.copy(Deno.stdout, f)
      f.close()
}

readFileThenCopyToConsole('example.txt')
