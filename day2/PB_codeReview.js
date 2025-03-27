// 1️⃣ Predict the Output: The Magic Numbers 🧙‍♂️
 // You have two magic numbers, x and y. Analyze the conditions and predict what will be printed!
 let x = 5;
 let y = 10;
 
 if (x * 2 === y) {
     console.log("?"); // Fill in the expected output
 } else if (x + y > 10 && y % 2 === 0) {
     console.log("?");
 } else {
     console.log("?");
 }
 
 // 2️⃣ Fix the Loop: Climbing the Mountain ⛰️
 // A hiker wants to count each step up the mountain, but the loop has an issue.
 // Fix it so the loop runs correctly from 1 to 5.
 let i = 5;
 while (i >=1) { // Fix this condition
     console.log("🚶‍♂️ Step:", i);
     i--;
 }
 
 // 3️⃣ Create a Function: Even or Odd Detective 🔍
 // Write a function `isEven(n)` that returns `true` if `n` is even and `false` otherwise.
 function isEven(n) {
     if (n%2==0){
        console.log("even");
     }
 }
 
 console.log(isEven(4)); // Expected output: true
 console.log(isEven(7)); // Expected output: false
 
 // 4️⃣ Break the Loop: The Treasure Hunt 🏴‍☠️
 // A pirate is searching for treasure hidden on island spot 3.
 // Modify the loop to stop once he finds it!
 for (let i = 1; i <= 5; i++) {
     console.log("🏝️ Searching spot:", i);
     // Add a condition to stop the loop when the treasure is found
 }
 
 // 5️⃣ Function with Parameters & Return Value: Supercharged Battery ⚡
 // Write a function `sumOfSquares(n)` that returns the sum of squares of numbers from 1 to `n`.
 function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i^2; 
    }
    return sum;
}

console.log(sumOfSquares(3)); // 1² + 2² + 3² = 14
console.log(sumOfSquares(5))

 
 console.log(sumOfSquares(3)); // Expected output: 14 (1² + 2² + 3²)
 
 // 6️⃣ Array Challenge: The Shopping Cart 🛒
 // You are building a shopping cart system. Implement the cart with array methods!
 let cart = [];
 
 // ➤ 1. Add three items to the cart using the correct method
 
 // ➤ 2. Remove the last item from the cart
 
 // ➤ 3. Print the total number of items in the cart
 
 // ➤ 4. Check if a specific item is in the cart and print a message accordingly