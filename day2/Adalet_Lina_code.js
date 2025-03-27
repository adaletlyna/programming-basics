function greeting(){
	return "Hello World";
}
var word = greeting();
console.log(word);
var arr = [1, 4, 7, 6, 2, 1];
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] > 3) {
        count++;
    }
}
console.log(count);



