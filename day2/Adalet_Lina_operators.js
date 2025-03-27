/*As the designated cake slicer and distributor at our office birthday parties, 
I want a function called howMuchLeftOverCake that passes two variables numberOfPieces and numberOfPeople into it and figures out the remaining pieces of cake.

Feature 2
Building off Feature 1, I want a console.log() to display...

"No leftovers for you!" if there aren't any leftovers
"You have some leftovers" if there are 2 pieces of cake or less
"You have leftovers to share" if there are 3 - 5 pieces of cake left over
"Hold another party!" if there are more than 5 pieces of cake left*/
/*function howMuchLeftOverCake(numberOfPieces , numberOfPeople){
    let leftOver = numberOfPieces % numberOfPeople
    if(leftOver===0){
        console.log("No leftovers for you!");
        
    }else if(leftOver<=2){
        console.log("You have some leftover");
        
    }else if(leftOver<=5&&leftOver>=3){
        console.log("Hold another party!");
        
    }else{
        console.log("Hold another party!");}
     
    

}
howMuchLeftOverCake(20,6);*/
var a=1;
var b=2;
function xyz(a,b){
    a+=1;
    b+=3;
    return([a,b]);
}
[a,b]=xyz(a,b);
console.log(a);
console.log(b);



