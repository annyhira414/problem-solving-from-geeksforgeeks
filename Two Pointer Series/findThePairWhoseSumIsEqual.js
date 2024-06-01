function findPair(array, array_size, sum) {
  array.sort();
  let leftSide = 0;
  let rightSide = array_size - 1;

  while (leftSide < rightSide) {
    if (array[leftSide] + array[rightSide] == sum) return console.log("yes i got it");
    else if (array[leftSide] + array[rightSide] < sum) {
      leftSide++;
      console.log("left side increment ");
    } else rightSide--;
    console.log("Right side decrment ");
  }
  return console.log("do not found");
}

var array = [1, 4, 45, 6, 10, -8];
var sum = 5;
var array_size = array.length;
findPair(array, array_size, sum);
