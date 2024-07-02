function minIncrementForUnique(nums) {
    // Sort the array first
    nums.sort((a, b) => a - b);
    
    let moves = 0;
    
    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // If the current number is less than or equal to the previous number
        if (nums[i] <= nums[i - 1]) {
            // Calculate the increment needed to make it unique
            let increment = nums[i - 1] - nums[i] + 1;
            // Add the increment to the current number
            nums[i] += increment;
            // Add the increment to the total moves
            moves += increment;
        }
    }
    
    return moves;
}

// Example usage:
const nums = [3, 2, 1, 2, 1, 7];
console.log(minIncrementForUnique(nums)); // Output: 6
