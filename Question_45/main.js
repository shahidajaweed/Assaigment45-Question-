"use strict";
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const car1 = makeCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]);
const car2 = makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]);
console.log(car1);
console.log(car2);
