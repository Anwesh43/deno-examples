var readStatus = await Deno.permissions.query({name : 'read'})
console.log(`status for reading `, readStatus)
var netStatus = await Deno.permissions.query({name : 'net'})
console.log(`status for network is `, netStatus)
console.log('_____')
console.log('revoking permissions')
if (readStatus.state === 'granted') {
    await Deno.permissions.revoke({name : 'read'})
}

if (netStatus.state === 'granted') {
    await Deno.permissions.revoke({name : 'net'})
}
readStatus = await Deno.permissions.query({name : 'read'})
console.log(`status for reading `, readStatus)
netStatus = await Deno.permissions.query({name : 'net'})
console.log(`status for network is `, netStatus)
