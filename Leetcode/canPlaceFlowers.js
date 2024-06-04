const canPlaceFlower = (flowerbed , n)=>{
    if (n === 0){
        return true;
    }
    for (let i = 0 ; i < flowerbed.length; i++){
        if(flowerbed[i] !== 1 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
            flowerbed[i] =1;
            n--;
            i++;
        }
        if (n === 0){
            return true;
        }

    }
    return false;
}
// let flowerbed1 = [1,0,0,0,1]
// let n= 2
// console.log("1st time ",canPlaceFlower(flowerbed,n));

// var canPlaceFlowers = function(bed, n) {
//     let bed = [...flowerbed]
//     for( let i = 0; i < flowerbed.length; i++){
//         if(flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.length -1 || flowerbed[i + 1] == 0)){
//             flowerbed[i] = 1
//             n--;
//         }
//     }
//     return n <= 0
// };
// let flowerbed = [1,0,0,0,1]
// let n = 2
// console.log("end time ",canPlaceFlower(bed,n));

var canPlaceFlowers = function(flowerbed, n) {
    // Make a copy of the flowerbed to avoid modifying the original array
    let bed = [...flowerbed];
    for(let i = 0; i < bed.length; i++) {
        if(bed[i] == 0 && (i == 0 || bed[i-1] == 0) && (i == bed.length - 1 || bed[i + 1] == 0)) {
            bed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};

let flowerbed1 = [1, 0, 0, 0, 1];
let n1 = 2;
console.log("1st time", canPlaceFlowers(flowerbed1, n1)); // Expected output: false

// Resetting the flowerbed for a new test case
let flowerbed2 = [1, 0, 0, 0, 1];
let n2 = 1;
console.log("2nd time", canPlaceFlowers(flowerbed2, n2)); // Expected output: true

