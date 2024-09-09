//Leap Year Checker

//This function checks whether a given year is a leap year or not using if-else statements:
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
console.log(`${year} is a leap year:`, isLeapYear(year));  // Output: true

//Ticket Pricing

//This program determines the price of a movie ticket based on the user’s age using if-else statements:
function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else {
        return "$20";
    }
}

// Example usage:
let age = 15;
console.log(`The ticket price for age ${age} is:`, getTicketPrice(age));  // Output: $15

//Fibonacci Sequence (Recursion)

//This recursive function generates the nth Fibonacci number:

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
let n = 6;
console.log(`Fibonacci number at position ${n} is:`, fibonacci(n));  // Output: 8

//Palindrome Checker (Recursion)

//This recursive function checks if a given string is a palindrome, ignoring spaces, punctuation, and capitalization:

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');  // Remove non-alphanumeric characters and convert to lowercase

    function checkPalindrome(start, end) {
        if (start >= end) return true;  // Base case: If pointers have crossed, it is a palindrome
        if (str[start] !== str[end]) return false;  // If characters don't match, it is not a palindrome
        return checkPalindrome(start + 1, end - 1);  // Recursive case: move inward
    }

    return checkPalindrome(0, str.length - 1);
}

// Example usage:
let testString = "A man, a plan, a canal, Panama!";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString));  // Output: true