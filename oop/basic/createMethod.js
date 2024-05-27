class Student{
    constructor(name,age,rollNumber,section){
        this.name =name;
        this.age = age;
        this.rollNumber = rollNumber;
        this.section = section;
    }

    allInfo(){
        return `Hi I am ${this.name} `
    }
}

const student1 = new Student("Hira",25,1,"A");
const student2 = new Student("Anny",25,2,"A");
const student3 = new Student("Habiba",25,3,"A");


console.log("full object",student1)
console.log(student1.allInfo());
console.log(student2.allInfo());
console.log(student3.allInfo());
console.log("my roll number is ",student1.rollNumber)
console.log("my roll number is ",student1.section)