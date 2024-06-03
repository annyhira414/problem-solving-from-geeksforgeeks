const  reverse =(array) =>{
    let n = array.length;
    let b = new Array(n)

    for(let i = 0; i < n; i++){
        b[n-1-i] = array[i];
    }
    return b;
}



// let arr= [1,2,3,4,5];
// console.log(reverse(arr));

var reverseString = function(array) {
    let n = array.length;
    let b = new Array(n);
    for( let i = 0 ; i < n; i++){
        b[n-1-i] = array[i];
    }
    return b;
};

// let input = ["h","e","l","l","o"]
// let result = reverseString(input);
// console.log(result); // Expected output: ['e', 'd', 'c', 'b', 'a']


// solved this problem using two pointer 

const reverseStringTwoPointer = (arrayOfString)=>{

    let leftSide = 0 ;
    let rightSide =  arrayOfString.length -1 ;
    while(leftSide < rightSide){
       let temp = arrayOfString[rightSide]
       arrayOfString[rightSide] = arrayOfString[leftSide]
       arrayOfString[leftSide] = temp

       leftSide++
       rightSide--
    }
    return  arrayOfString;
    
}

let input = ["h","e","l","l","o"]
let result = reverseStringTwoPointer(input);
console.log(result);

