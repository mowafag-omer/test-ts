
// ****** Optimisation problem 1 ******** //
// Try to solve this problem with the best level of complexity (ie. with a mimimum of computation) while still passing the tests

// Assignment:
// Complete the function in order to return the count of square numbers between a and b,
// knowing that a and b are including in the range. All tests should be fulfilled.

// Constraints:
// a ∈ [-10000, 10000]
// b ∈ [-10000, 10000]

// Example: a = 9, b = 15 : countSquareNumbersBetween(a,b) = 1
// Example: a = 3, b = 14 : countSquareNumbersBetween(a,b) = 2

export const countSquareNumbersBetween = function(a : number, b : number) : number{
	console.log({a, b})
    return (Math.floor(Math.sqrt(b)) -  Math.ceil(Math.sqrt(a)) + 1) 
}

// Hint for optimization: find a quicker way to compute this using math 