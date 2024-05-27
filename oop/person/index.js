class Person  {
    constructor(name, email){
        this.name =name;
        this.emial =email
    }

    changeName(name){
        this.name = name;
    }
    sentText(msg){
        console.log(this.name , msg);
    }  

    
}

const p1 = new Person ("hira anny", "hira@gmail.com")
 
p1.sentText("this text only for you")


// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

    

//     sentText(msg) {
//         console.log(this.name, msg);
//     }
// }

// const p1 = new Person("hira", "hira@gmail.com");
// p1.sentText("this text only for you");
