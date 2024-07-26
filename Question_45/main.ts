function makeCar(manufacturer: string, model: string, ...options: [string, any][]): { [key: string]: any } {
    let car: { [key: string]: any } = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

const car1 = makeCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]);
const car2 = makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]);

console.log(car1);
console.log(car2);