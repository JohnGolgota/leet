// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
//
//
//
// Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x: number): boolean {
    let s = x.toString();
    let reversed = s.split("").reverse().join("");
    return s === reversed;
};

function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(message);
    }
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

assert(isPalindrome(121), "121 is not a palindrome");
assert(!isPalindrome(-121), "-121 is a palindrome");
assert(!isPalindrome(10), "10 is a palindrome");
