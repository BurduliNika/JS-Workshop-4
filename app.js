// დავალება 1 - ფაქტორიალი
function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// დავალება 2 - ორი უდიდესი რიცხვის პოვნა
function findTwoLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return [first, second];
}

// დავალება 3 - მასივის შებრუნება (მეთოდის გამოყენებით)
function reverseArray(arr) {
  return arr.reverse();
}

// დავალება 4 - მასივის ელემენტების ჯამი
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// დავალება 5 - სიმბოლოს დათვლა სტრიქონში
function countCharacter(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) count++;
  }
  return count;
}

// დავალება 6 - მხოლოდ კენტი რიცხვები
function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

// დავალება 7 - უნიკალური ელემენტები
function getUniqueElements(arr) {
  return [...new Set(arr)];
}

// ტესტირება
console.log(factorial(5)); // 120
console.log(findTwoLargest([1, 10, 3, 7, 9])); // [10, 9]
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(countCharacter("a, b,s,a, e, f", "a")); // 2
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(getUniqueElements([1, 2, 2, 3, 2, 4, 4, 5])); // [1, 2, 3, 4, 5]
