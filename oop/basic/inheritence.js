// parent er kas thke kono kiso niya ase. 


class Human{
    constructor(hand,brain,leg,eye){
        this.hand = hand;
        this.brain = brain;
        this.leg = leg;
        this.eye = eye;
    }
}

// baby new class  but a baby is a human  and its have own property


class Baby extends Human{
    constructor(hand ,cry){
        super();
        this.cry = cry;
        this.hand = hand;
    }
}

const baby1 = new Baby(2,"mew,mew")
console.log(baby1.hand);
console.log(baby1.cry);



