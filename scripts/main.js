// -------ARRAYS TO USE IN TESTS-------
const fruits = ["apples", "pears", "oranges"];
const moreFruit = ["peaches", "limes"]
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// -------TESTING DIFFERENT METHODS-------

// forEach(): Executes a provided function once for each array element

console.log("Testing forEach() method below");

const testForEach = (array) =>{
    array.forEach(fruit => console.log(`I love to eat ${fruit}`));
}
testForEach(fruits);


// --------------------------------------------------------------------------------------------------------
// map(): Returns a new array containing the results of calling a function on every element in this array

console.log("Testing map() method below");

const testMap = (array) =>{
    array.map(fruit => fruit = `sliced ${fruit}`);
}
// Multiplies each number within the array "numbers" by 2 and returns a new array with the results which is assigned to "mapTestHolder"
const mapTestHolder = numbers.map(number => number * 2);
console.log(mapTestHolder);


// --------------------------------------------------------------------------------------------------------
// includes(): Determines whether the array contains a value, returning true or false as appropriate

console.log("Testing includes() method below");

// Returns True since 1 is inside of the numbers array
console.log(numbers.includes(1));

// Returns False since lemons are NOT inside of the fruits array
console.log(fruits.includes("lemons"));


// --------------------------------------------------------------------------------------------------------
// some(): Returns true if at least one element in this array satisfies the provided testing function

console.log("Testing some() method below");

// Function that returns truthy if the expression is true (if the remainder of the number is not 0 when the number is divided by 2)
const odd = (number) => number % 2 !== 0;

// Returns true because there are odd numbers in the numbers array
console.log(numbers.some(odd));


// --------------------------------------------------------------------------------------------------------
// every(): Returns true if every element in this array satisfies the testing function

console.log("Testing every() method below");

// Returns false because not every number in the array is odd
console.log(numbers.every(odd));


// --------------------------------------------------------------------------------------------------------
// find(): Returns the first element in the array that matches the condition(s), if some element in the array satisfies the testing function, or undefined if not found

console.log("Testing find() method below");

// Returns the first element in the numbers array that is greater than 3 (since 4 is the first number greater than 3, it will be returned)
console.log(numbers.find(number => number > 3));


// --------------------------------------------------------------------------------------------------------
// indexOf(): Returns the first (least) index of an element within the array equal to an element, or -1 if none if found
console.log("Testing indexOf() method below");

// Returns an index of 2 which indicates the 3rd element within the numbers array (First time 3 shows up in the array, left to right)
console.log(numbers.indexOf(3));


// --------------------------------------------------------------------------------------------------------
// lastIndexOf(): Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found

console.log("Testing lastIndexOf() method below");

// Returns an index of 6 which indicates the 7th element within the numbers array (First time 3 shows up in the array, right to left)
console.log(numbers.lastIndexOf(3));


// --------------------------------------------------------------------------------------------------------
// join(): Joins all elements of an array into a string

console.log("Testing join() method below");

// Returns a single string of the fruits array with a space between each fruit
console.log(fruits.join(" "));


// --------------------------------------------------------------------------------------------------------
// concat(): Returns a new array that is this array joined with other array(s) and/or value(s)

console.log("Testing concat() method below");

// Concatenates the moreFruit array to the fruits array and outputs a single array
console.log(fruits.concat(moreFruit));


// --------------------------------------------------------------------------------------------------------
// reduce(): Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value

console.log("Testing reduce() method below");

// Returns the total of all of the numbers in the numbers array
console.log(numbers.reduce(function (total, current){
    return total + current;
}))

// --------------------------------------------------------------------------------------------------------
// reverse(): Reverses the order of the elements of an array in place. (The first becomes the last, the last becomes the first)

console.log("Testing reverse() method below");

// Returns the reverse of the fruits array
console.log(fruits.reverse());