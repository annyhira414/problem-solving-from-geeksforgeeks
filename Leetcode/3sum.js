// const threeSum = (nums) => {
//   // s-1 need sort array

//   nums.sort((a, b) => a - b);
//   let result = [];
//   for (i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] == nums[i - 1]) {
//       continue;
//     }
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) right--;
//       if (sum < 0) left++;
//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);
//         left++;
//         while (nums[left] == nums[left - 1] && left < right) {
//           left++;
//         }
//       }
//     }
//   }
//   //return result;
// };
// let nums = [-1, 0, 1, 2, -1, -4];
// console.log("ans sort", threeSum(nums));

const threeSum2 = (nums) => {
  // s-1 need sort array

  nums.sort((a, b) => a - b);
  let result = [];
  for (i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      if (sum < 0) left++;
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
};
