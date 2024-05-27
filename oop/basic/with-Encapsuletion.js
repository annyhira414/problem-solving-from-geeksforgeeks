
// encapsulation mane holo same properti  or method gula akta place re rakha , Player name akta class banaychi ter maje sob specialty(বিশিষ্ট) gula rakha . then akta player er info dibo then aita oi info gula  access korbo . 
//  aigula maje privat and public way te access korte parba.
class Player {
 #birthday;


  constructor(name, birthday, salary, numberOfMonth) {
    this.name = name;
    this.#birthday = birthday;
    this.salary = salary;
    this.numberOfMonth = numberOfMonth;
  }
   TotalSalary() {
    return (this.salary * this.numberOfMonth)
  }
  
  calcule_age(){
    let diff_ms = Date.now() - new Date(this.birthday).getTime();
    let age_define = new Date(diff_ms);

    return Math.abs(age_define.getUTCFullYear() - 1970)
  }
  
}

const player1 = new Player("sakib","1996-10-08",5000, 12 )

console.log("total salary is", player1.TotalSalary());
console.log("name of Palyer is" , player1.name);
console.log("year", player1.calcule_age());

//  bahir theke Player class er proportiy access korte parbe .
console.log("bahir theke Player class er proportiy access korte parbe",player1.birthday)
// jodi amraaiter aage # dey tahole aita privet hoye jabe , then r apni access korte parbo na . see 3 & 8 number line . 
