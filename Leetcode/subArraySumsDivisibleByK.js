function subarraysDivByK(nums, k) {
  let count = 0;
  let prefixSum = 0;
  let remainderCount = { 0: 1 }; // Initialize with remainder 0 having one count

  for (let num of nums) {
    prefixSum += num;
    let remainder = ((prefixSum % k) + k) % k; // Handle negative remainders

    if (remainder in remainderCount) {
      count += remainderCount[remainder];
    } else {
      remainderCount[remainder] = 0;
    }

    remainderCount[remainder]++;
  }

  return count;
}

// Example usage:
const nums = [4, 5, 0, -2, -3, 1];
const k1 = 5;
console.log("subarraysDivByK", subarraysDivByK(nums, k1)); // Output: 7
