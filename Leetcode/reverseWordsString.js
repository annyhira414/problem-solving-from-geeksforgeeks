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