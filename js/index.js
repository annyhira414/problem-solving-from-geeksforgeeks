// const words =['sp', 'elite', 'exuberant', 'destruction', 'present']
// const fine =  words.filter(word => word.length > 2)
// console.log(fine);
// console.log( typeof fine );
// console.log( typeof words);
const words = ['sp', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length < 3);

console.log(result);
console.log(typeof result);
console.log(typeof words);

function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
  console.log("value of ");
  console.log( typeof filtered);
  console.log(  filtered);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


function prime(num){
    for(let i = 2; num > i; i++){
        if (num % i === 0) {
            return false
        }
    }
    return num > 1;

}
console.log(array.filter(prime));