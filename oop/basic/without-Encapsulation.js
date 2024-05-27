let name = "sakib";
let birthday = "1996-10-08";
let salary = 5000;
let numberOfMonth = 12;

function TotalSelary (salary ,numberOfMonth){
  return  salary * numberOfMonth;
}


function calcule_age(bod){
    let define = Date.now() - new Date(bod).getTime();
    let age_define = new Date(define);

    return Math.abs(age_define.getUTCFullYear()-1970)
}

console.log("ans", TotalSelary (salary ,numberOfMonth))
console.log("now age is",calcule_age(birthday));