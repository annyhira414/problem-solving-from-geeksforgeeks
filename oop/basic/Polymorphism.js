class PlayerStr {
    #name;
    constructor(name,age){
        this.#name = name;
        this.age = age;
        
    }

    sleep(){
        return ""
    }

}

class football extends PlayerStr{
   constructor(gool){
    super();
    this.gool = gool;
   }

}

class Cricket extends PlayerStr{
    constructor(name,centuries){
    super();
    this.name =name;
    this.centuries = centuries;
  }
}

const infoAboutPlayer = new football("sakib",34, 5);
const infoAboutPlayer1 = new Cricket("macy settle",31, 100)
console.log(infoAboutPlayer1.name);
console.log(infoAboutPlayer1.centuries);
console.log("learn");