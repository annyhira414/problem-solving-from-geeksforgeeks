function isPrime(num){
    if (num <= 1) return false;
    for(i = 2; i <= Math.sqrt(num); i++ ) {
        if(num % i === 0) return false
    }
    return true;
}
let num = 3;
console.log("check its number is ", isPrime(num));