import {Animal} from './day26_2.js';

class Dog extends Animal{
    place;
    name = "jerry";

    constructor(place, name, type){
        super(name, type);
        this.place = place;
        
        
    }

    eat() {
        console.log(this.name);        
        console.log(`Dog is eating at placve ${this.place}`);
    }

    walk() {
        console.log(`Dog  ${this.name} is walking`);
    }

}

//const lion = new Animal("Sher", "4 legged animal");
//lion.walk();
const tom = new Dog("Delhi", "TOM", "4 legged dog");
tom.eat();
tom.walk();
//tom.walk();