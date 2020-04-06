class Car {

    price : number = 0
    build : string = ""
    make : string = ""

    setPrice(price : number) {
        this.price = price
    }

    setBuild(build : string) {
        this.build = build
    }

    setMake(make : string) {
        this.make = make
    }

    getPrice() {
        return this.price
    }

    getBuild() {
        return this.build
    }

    getMake() {
        return this.make
    }

    toString() {
        return `the car is ${this.build} ${this.make} and ${this.price}`
    }
}

export default Car
