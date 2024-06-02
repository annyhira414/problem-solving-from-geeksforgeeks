// const reversVowels = () => {
//  let vowels = {}
//  for(const latter of "aeiouAEIOU"){
//     vowels[latter] = ture;
//  }
// }

const revers = (sringOfArray) => {
  let left = 0;
  let right = sringOfArray.length - 1;
  let result = sringOfArray.split("");
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left < right) {
    if (!vowels.has(result[left])) {
      left++;
    } else if (!vowels.has(result[right])) {
      right--;
    } else {
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    }
  }
  return result.join("");
};

console.log("the vowels is ", revers("hello"));
