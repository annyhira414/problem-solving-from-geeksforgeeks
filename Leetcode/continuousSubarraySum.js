// const continuousSubarray = (nums, k) =>{
//     let nums = [1,2,4,4];
//     let  k  = 3 ;

//     for(let i = 0 ; i < nums.length - 1  ; i++){
//         if(nums[i] === k ){
//             return true;
//         }
//         return false;
//     }

// }
function hasPairWithSum(arr, k) {
  const seen = new Set();

  for (const num of arr) {
    const complement = k - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Example usage
const array = [1, 3, 3, 4];
const k = 2;
const result = hasPairWithSum(array, k);
console.log(result); // Output: true
