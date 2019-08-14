const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.color = "red";
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = 2.5;
console.log(`My pen cost ${pen.price}`);

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} as experience`;
    }
};
console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);
aurora.health -= 20;
aurora.strength += 10;
console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

aurora.xp += 15;
console.log(aurora.describe());

let dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark() {
        return "Grrr!, Grrr!";
    }
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//let radius = Number(prompt("Enter the circle radius"));
let radius = 10;
let circle = {
    radius: radius,
    circumference() {
        return 2 * Math.PI * this.radius;
    },
    area() {
        return Math.PI * (this.radius ** 2);
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

let account = {
    name: "Alex",
    balance: 0,
    credit(value) {
        this.balance += value;
    },
    describe() {
        return `owner: ${this.name}, balance ${this.balance}`;
    }
};

console.log(account.describe());
account.credit(170);
console.log(account.describe());