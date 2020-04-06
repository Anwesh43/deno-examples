import {ls} from './commands.json'
console.log(ls);
window.onload = async () => {
    console.log("hello running commands")
}
async function runLs() {
    const result = Deno.run(ls)
    const {code} = await result.status();
    if (code == 0) {
        const output = await result.output();
        console.log(new TextDecoder().decode(output));
    }
}

runLs()
