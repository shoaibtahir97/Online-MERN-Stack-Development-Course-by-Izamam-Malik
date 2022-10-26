/*
For loop always start with 0 as it represents the length of the array.
Data comes from only two places wither a user input or from database. Eventually the data taken from user is saved inside database

Example#1: 
let i = 0 

for(; i < arr.length; ){
	console.log([i]);
	i++;
}

All for loops elements are optional.  
If you don’t give any conditional statement inside the for loop then also it is considered as true value. This true value does not have a limit; it executes infinite times.

Array Map method:
map is a built in method of array which takes a parameter of function. The function takes two parameters one is index of array and other is value of array
Map has a disadvantage that it prints all the elements of the array at once. We cannot break the array at a certain instance. But in for loop we can use if statement to 
break the loop when a condition is met 
*/

let arr = [0,1,2,3,4,5,6,7];

arr.map((value, index)=>{
  console.log(`${value}: ${index}`);
})

/*
We can also perform function on each element and return the updated value to the same array or in a new array.
Map returns a new array. You can either store the updated value in the same array or in new array
*/

let arr2 = [1,2,3,4,5,6,7,8,9];

newArr = arr2.map((value, index)=>{
  return value * 2;
})

arr2 = arr2.map((value, index)=>{
  return value * 2;
})
