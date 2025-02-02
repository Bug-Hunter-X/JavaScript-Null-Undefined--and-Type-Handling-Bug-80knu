function foo(x){
  if (x == null) {
    return 0; // Handle null or undefined
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input: x must be a number'); //Explicit type check for unexpected types
  } else {
    return x * 2; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: 0
console.log(foo(5)); // Output: 10
console.log(foo('hello')); // Throws an error