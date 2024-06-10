function heightChecker(heights) {
  // Create a sorted copy of the heights array
  let sortedHeights = [...heights].sort((a, b) => a - b);

  // Initialize a counter for the number of different elements
  let count = 0;

  // Compare the elements of the original and sorted arrays
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count++;
    }
  }

  return count;
}

// Example usage:
let heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights)); // Output: 3
