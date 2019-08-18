class Inventory {
    constructor(gold, keys) {
        this.gold = gold;
        this.keys = keys;
    }
}

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
        this.inventory = new Inventory(10, 1);
    }
    describe() {
        return `${this.name} has ${this.health} health points, ${this
          .strength} as strength, ${this.xp} XP points,
          ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`;
      }
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                const bonusXP = 10;
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.inventory.gold} gold and ${target.inventory.keys} key(s)`);
                this.xp += bonusXP;
                this.inventory.gold += target.inventory.gold;
                this.inventory.keys += target.inventory.keys;
                target.inventory.gold = 0;
                target.inventory.keys = 0;
                target.health = 0;
            }
        } else {
            console.log(`${this.name} can't attack (It have been eliminated)`);
        }
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

const monster = new Character("Spike", 40, 20);
monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

const myObject = {
    prop: 2
};
const anotherObject = Object.create(myObject);
console.log(anotherObject.prop);
const yetAnotherObject = Object.create(anotherObject);
console.log(yetAnotherObject.unknownProp);

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        if (this.size > 60) {
            return "Grrr! Grrr!";
        } else {
            return "Woof! Woof!";
        }
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(value) {
        this.balance += value;
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`;
    }
}

let accounts = [
    new Account("Sean"),
    new Account("Brad"),
    new Account("Georges")
];
for (let account of accounts) {
    account.credit(1000);
    console.log(account.describe());
}
