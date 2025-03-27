//How do we know we need a loop here?
// We need a loop because the process is repeated every 2 miles, and it continues until the runner reaches mile 6.

//  What's the starting point of the loop?
// The loop starts at 0 miles since the runner begins running from mile 0.

// When should the loop stop?
// The loop should stop at mile 6 : no more candy is given after that.

// How will the loop know when to stop?
// The loop will check the number of  miles and stop when it reaches 6.

// What's incrementing for each iteration of the loop?
// The runner's mileage increases as they keep running.

//  What variables do we need?
// We need a variable for the runner's miles

function candy(){
   /* for(milesRun=0; milesRun<=6; i+=2){
        if(milesRun!=0){
            console.log("give candy at",milesRun,"miles");
            
        }

    }*/
    let i=0;
    while(i<6){
        i+=2;
        let speed= Math.random()*10;
        if(speed>5.5){
            console.log("give candy at ",i,"miles");
        }else console.log("not fast enough!");      
    
}}
candy()
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
