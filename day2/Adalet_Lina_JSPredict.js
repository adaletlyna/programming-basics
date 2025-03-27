//predict 1
function myBirthYearFunc() {
  console.log("I was born in" + 1980); //output: "I was born in1980"
}
myBirthYearFunc();
function myBirthYearFunc(birthYearInput) {
  console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980); //the function takes the argument birthYearInput nd replace it with 1980 => output= "Iwas born in 1980" (same as the previous output)

function add(num1, num2) {
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1); //displays the value of num1
  console.log("num2 is: " + num2); //displays the value of num2
  var sum = num1 + num2;
  console.log(sum); //displays the value of sum
}
add(
  10,
  20
); /*the fuction replace the two arguments num1 and num2 with 10 and 20=>output: "Summing Numbers!"
                                                                                           "num1 is: 10"
                                                                                           "num2 is: 20" 
                                                                                            30*/
                                                                                           