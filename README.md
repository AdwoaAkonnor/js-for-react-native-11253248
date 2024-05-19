# Task One

The processArray function iterates through an array of numbers. It squares each even number and triples each odd number, then returns a new array with these processed values.  
Input: [4, 5, 6, 7, 8]
Output: [16, 15, 36, 21, 64]
The number 4 is even, so it is squared (4*4 = 16).
The number 5 is odd, so it is tripled (5*3 = 15).
The number 6 is even, so it is squared (6*6 = 36).
The number 7 is odd, so it is tripled (7*3 = 21).
The number 8 is even, so it is squared (8 * 8 = 64).

 Task Two

processArray

Takes an array of numbers as input.
Squares each even number and triples each odd number.
Returns a new array with the processed numbers.
formatArrayStrings

Takes two arrays: an array of strings and an array of processed numbers.
Ensures both arrays are of the same length.
Combines each string with its corresponding processed number.
Converts processed numbers to uppercase if even and to lowercase if odd.
Returns an array of formatted strings.
formatString

Converts a number to uppercase string if even, and to lowercase string if odd.
