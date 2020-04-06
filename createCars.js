import Car from './Car.ts'

const setTimeoutPromise = (delay) => new Promise((resolve, reject) => setTimeout(resolve, delay))
const createCar = async (make, build, price) => {
    await setTimeoutPromise(3000)
    const car = new Car()
    car.setPrice(price)
    car.setBuild(build)
    car.setMake(make)
    console.log(car.toString())
}

createCar("Amaza", "Honda", 800000)
