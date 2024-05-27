class createArray {
    constructor(){
        this.items = [];
    }

    getItems(){
        return[...this.items];
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(itemToDelete){
        this.items = this.items.filter((item)=> item !== itemToDelete);
    }

    modifyItem(itemToChange, newValue){
        const index = this.items.indexOf(itemToChange);
        if(index !== -1){
            this.items[index] = newValue;
        }
    }

    modifyItemOne(chnageValue , newValue){
        const index = this.items.indexOf(chnageValue)
        if(this.index !== -1){
            this.items[index] = newValue;
        }
    }

    modifyItemTwo(changeTheValue, addNewValue){
        let chnageIndex = this.items.indexOf(changeTheValue)  ;
        if(this.chnageIndex !== -1){
            this.items[chnageIndex] = addNewValue;
        }
    }

}

const array = new createArray;


array.addItem("wow i create new array");
array.addItem('i love oop');
array.addItem("good");
console.log("this is abstraction");
console.log("show all add  info",array.getItems());
array.removeItem("i love oop");
console.log("removed one data",array.getItems());

array.modifyItem("good","i love js");
console.log("after modifi",array.getItems());