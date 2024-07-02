function rotateArray(nums, k) {
  // Ensure k is within the bounds of the array length
  k = k % nums.length;

  // Slice and concatenate the array to get the rotated result
  const rotatedPart = nums.slice(-k);
  const remainingPart = nums.slice(0, nums.length - k);
  return rotatedPart.concat(remainingPart);
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
console.log(rotateArray(nums1, k1));

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
console.log(rotateArray(nums2, k2));
