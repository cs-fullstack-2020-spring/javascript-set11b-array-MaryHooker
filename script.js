// // #### Exercise 1
// // 1. Create an array.
// // 2. Add four names to the array.
// // 3. Print the array

// let favColors = ["pink", "purple", "green","blue"]
// console.log(favColors)
//******************************************************/

// // #### Exercise 2
// // 1. Create an array with 5 numbers in it.
// // 2. Print the numbers.

// let randomNumbers = [6,8,3,9,7]
// console.log(randomNumbers)
//*****************************************************/

// #### Exercise 3
// 1. Create an array with 4 names.
// 2. Print the third item in the array.
// 3. Delete the second item.
// 4. Print the third item in the array again.


let favColors = ["pink", "purple", "green","blue"]
//PRINT 3RD ITEM IN ARRAY
console.log(favColors[2])
//DELETE THE SECOND ITEM IN ARRAY (,) AND ONLY ONE ITEM
favColors.splice(1,1)
//PRINT THE REMAINING COLORS IN CONSOLE
console.log(favColors)
//NOW PRINT THE NEW 3RD ITEM IN ARRAY
console.log(favColors[2])

