const candie = (candiArray, extra) => {
  let output = [];
  let max = Math.max(...candiArray);
  for (let c = 0; c < candiArray.length; c++) {
    if (candiArray[c] + extra >= max) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
};

let candiArray = [2, 3, 5, 1, 3];
let extra = 3;
console.log(candie(candiArray, extra));
