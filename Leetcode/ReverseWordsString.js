const reverseWords = (s) =>{
    let words =[];
    words= s.split("\s+");
    //words = s.match(/\S+/g);
    let result = '';
    for(let i = 0 ; i <words.length; i++){
        return result += words[i].split('').reverse().join('') ;
    }
     return result;
}
console.log(reverseWords("the sky is blue"));
// eulb si yks eht
// blue is sky the

function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
       result += words[i].split('').reverse().join('') + " ";
    }
    return result
  }
  console.log(reverseInPlace("the sky is blue"))
//   eht yks si eulb 

//   Input: s = "the sky is blue"
// Output: "blue is sky the"


function reverseInPlace(str) {
  var words = str.match(/\S+/g); // Split the string into words
  var result = "";
  for (var i = words.length - 1; i >= 0; i--) { // Loop from the last word to the first
     result += words[i] + " "; // Add each word followed by a space
  }
  return result.trim(); // Remove the trailing space
}

console.log(reverseInPlace("the sky is blue")); // Output: "blue is sky the"


var reverseWords1 = function(s) {
  let arr = s.split(' ');// The input string s ("the sky is blue") is split into an array of words based on spaces
  arr = arr.filter(word => word !== '');
  arr = arr.reverse().join(' ');
  return arr
};
console.log(reverseWords1("the sky is blue")); // Output: "blue is sky the"
