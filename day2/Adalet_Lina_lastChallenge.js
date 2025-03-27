var arr1 = [8, 6, 7, 5, 3, 0, 9];

console.log("Printing each number:");
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// #2 Print the sum of the number and its index
var arr2 = [4, 7, 13, 13, 19, 37, -2];

console.log("Printing sum of number and index:");
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i] + i);
}

// #3 Print only numbers greater than 5
var arr3 = [6, 2, 12, 14, -24, 5, 0];

console.log("Printing numbers greater than 5:");
for (var i = 0; i < arr3.length; i++) {
  if (arr3[i] > 5) {
    console.log(arr3[i]);
  }
}

// bonus:Replace numbers ≤ 5 with "No dice"
console.log("Replacing numbers ≤ 5 with 'No dice':");
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] <= 5) {
    arr3[i] = "No dice";
  }
}

console.log(arr3);
