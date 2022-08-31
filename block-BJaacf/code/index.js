// 1. Create an array named numbers and store 5 number values in it
let numbers =[1,2,3,4,5];
// 2. Calculate the sum of array items and print it to the console using console.log()
var sum =0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
var average=0;

for(let i = 0; i < numbers.length; i++){
    average += numbers[i] ;
}
console.log(average/numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()
var highestNumber =0;

for(let i = 0; i <= highestNumber; i++){
  if(numbers[i]> highestNumber){
    var highestNumber=numbers[i];
  }
}

console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()
var lowestNumber = numbers[0];

for(var i=1; i<numbers.length; i++){
    if(numbers[i] < lowestNumber){
        lowestNumber = numbers[i];   
    }
}

console.log(lowestNumber);
// 6. Find the even numbers in the array and print them to the console using console.log()
const even = numbers.filter(numbers => {
    return numbers % 2 === 0;
  });
  console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
const odd = numbers.filter(numbers => {
    return numbers % 2 === 1;
  });
  console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
const fiveNumber = numbers.filter(numbers => {
    return numbers % 5 === 0;
  });
  console.log(fiveNumber);

// 9. Log all the element of the array one by one

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
// 10. Find all the number in the array that is divisible by 3
const thirdNumber = numbers.filter(numbers => {
    return numbers % 3 === 0;
  });
  console.log(thirdNumber);
