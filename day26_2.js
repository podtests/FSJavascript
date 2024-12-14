class Animal{
    name;
    #type;
    
    
    constructor(name, type){
        this.name = name;
        this.#type = type;
    }
    

    /*
    constructor() {

    }
      */  

    walk() {
        console.log(`Animal  ${this.name} is walking`);
    }
}

export {Animal};


