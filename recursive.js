function isPalindrome(word) {
    // Base case: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively test the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If there is a difference, it's not a palindrome
        return false;
    }
}

// Example usage:
const testWord1 = "gag";
const testWord2 = "kayak";
const testWord3 = "php";
const testWord4 = "radar";
const testWord5 = "hello";

console.log(`${testWord1} is a palindrome: ${isPalindrome(testWord1)}`);
console.log(`${testWord2} is a palindrome: ${isPalindrome(testWord2)}`);
console.log(`${testWord3} is a palindrome: ${isPalindrome(testWord3)}`);
console.log(`${testWord4} is a palindrome: ${isPalindrome(testWord4)}`);
console.log(`${testWord5} is a palindrome: ${isPalindrome(testWord5)}`);
