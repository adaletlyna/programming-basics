var age = 10;
var height = 42;
var isoldEnough = age >= 10; //age should be more than 10
var istallEnough = height >= 42; //height should be more than 42 inshes
/*console.log(isoldEnough);
console.log(istallEnough);
var isAbleToRide = isoldEnough && istallEnough; //to be able to ride both the age and the height sould satisfy the conditions
console.log(isAbleToRide); //output should be true*/

/*if(istallEnough){
    console.log("Get on that ride, kiddo!") ; 
}else{
    console.log("sorry Maybe next year");
}*/

//stretch feature 1
if (isoldEnough && istallEnough) {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("sorry Maybe next year");
}

//stretch feature 2
/*if(isoldEnough || istallEnough){
    console.log("Get on that ride, kiddo!");

}else{
    console.log("sorry Maybe next year");
}*/
/*var maturity = "Adult ";
console.log(maturity.trim());
if (maturity.trim().toLowerCase() == "adult") {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("sorry Maybe next year");
}*/
