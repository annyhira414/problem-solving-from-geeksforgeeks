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


function alternatingGroups(colors) {
  // Initialize the count of changes
  let changes = 0;

  // Loop through the colors array starting from the second element
  for (let i = 1; i < colors.length; i++) {
      // If the current color is the same as the previous one, it needs a change
      if (colors[i] === colors[i - 1]) {
          changes++;
      }
  }

  return changes;
}

// Test cases
console.log();
console.log(alternatingGroups([1, 1, 1])); // Output: 0
console.log(alternatingGroups([0, 1, 0, 0, 1])); // Output: 3
console.log(alternatingGroups([0, 1, 0])); // Output: 1

