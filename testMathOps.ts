import {add, subtract, multiply} from './math_ops.ts'
import {assertEquals} from './testDeps.ts'
const localAssert = (expect : any, actual : any) => {
    if (expect != actual) {
        throw new Error(`assertion error expecting ${expect} got ${actual}`)
    }
}

Deno.test(function addRight() {
    localAssert(50, add(20, 30))
})

Deno.test(function subtractRight(){
    localAssert(-10, subtract(20, 30))
})

Deno.test(function multiplyRight() {
    assertEquals(900, multiply(30, 30))
})
