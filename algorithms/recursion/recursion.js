// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
  if (n === 0) return 1;
  if (n < 0) return null;

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
  if (array.length <= 0) return 0;

  let total = array[array.length - 1];
  let nextArray = array.slice(0, -1);
  total += sum(nextArray);
  return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (!Array.isArray(array)) return array;
  
  let total = 0;
  array.forEach(item => {
    total += arraySum(item);
  })
  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) return true;
  if (n === 1) return false;

  if (n >= 2) return isEven(n - 2);
  if (n < 0) return isEven(-n);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) return 0;

  if (n > 0) {
    return n + sumBelow(n - 1) - 1;
  } else {
    return n + sumBelow(n + 1) + 1;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  let start = x;
  let end = y;
  let reverse = false;
  if (x > y) {
    start = y;
    end = x;
    reverse = true;
  }

  let num = start + 1;
  if (end - start < 2) return [];
  if (end - start === 2) return [num];

  if (reverse) {
    return range(end, num).concat(num);
  } else {
    return [num].concat(range(num, end));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) return 1;

  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) return true;
  if (n < 1) return false;

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === '') return '';

  return reverse(string.slice(1)) + string.slice(0, 1);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length <= 1) return true;
  let newStr = string.toLowerCase().trim();
  if (newStr.slice(0, 1) !== newStr.slice(-1)) return false;

  return palindrome(newStr.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) return NaN;

  let absX = x > 0 ? x : -x;
  let absY = y > 0 ? y : -y;

  if (absY > absX) return x;

  let nextX = x > 0 ? x - absY : x + absY;

  return modulo(nextX, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) return 0;
  if (y === 1) return x;
  if (y === -1) return -x;
  
  if (y > 0) {
    return multiply(x, y - 1) + x;
  } else {
    return multiply(x, y + 1) - x;
  }
};
