JS Workshop 4 — Utility Functions

This project contains a collection of JavaScript functions that solve common programming tasks such as factorial calculation, array operations, character counting, and filtering. Each function is simple, standalone, and includes console test examples.

📌 Functions Overview
1. factorial(n)

Calculates the factorial of a number.
Returns null for negative inputs.

2. findTwoLargest(arr)

Finds and returns the two largest unique numbers in an array.

3. reverseArray(arr)

Reverses an array using the built-in .reverse() method.

4. sumArray(arr)

Sums all numeric values in an array and returns the total.

5. countCharacter(str, char)

Counts how many times a specific character appears in a string.

6. filterOddNumbers(arr)

Returns a new array containing only odd numbers.

7. getUniqueElements(arr)

Removes duplicates from an array and returns unique values using Set.

🧪 Example Usage
console.log(factorial(5)); 
// 120

console.log(findTwoLargest([1, 10, 3, 7, 9]));
// [10, 9]

console.log(reverseArray([1, 2, 3, 4]));
// [4, 3, 2, 1]

console.log(sumArray([1, 2, 3, 4]));
// 10

console.log(countCharacter("a, b,s,a, e, f", "a"));
// 2

console.log(filterOddNumbers([1, 2, 3, 4, 5]));
// [1, 3, 5]

console.log(getUniqueElements([1, 2, 2, 3, 2, 4, 4, 5]));
// [1, 2, 3, 4, 5]

📘 About This Workshop

This repository is part of a JavaScript practice workshop focused on writing clean, simple algorithmic functions and understanding fundamental operations with arrays and strings.
