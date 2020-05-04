/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

const reverseInteger = (number) => {
  let currentNum = number;
  let result = 0;

  while (currentNum >= 1) {
    result *= 10;
    result += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }

  return result;
}
