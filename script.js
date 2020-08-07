const palindrome = (str) => {
  // Change str to lower case
  str = str.toLowerCase();
  // String to array, than reverse the string and return result of equality
  return str === str.split('').reverse().join('');
}

const isPalindrome = palindrome('Anna');

console.log(isPalindrome);