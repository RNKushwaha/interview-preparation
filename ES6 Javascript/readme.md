
# ES6/ Javascript Interview Questions

## Table of Contents

| Sr.No|  Questions       |
|------|------------------|
| 01. |[What is Object Destructuring in JavaScript?](#q-what-is-object-destructuring-in-javascript)|
| 02. | What is the scope in the Javascript? |
| 03. | What is the difference between synchronous and asynchronous functions? Give an example of asynchronous functions? In case of multiple requests to be done you use synchronous or asynchronous? |
| 04.| How will you capture an error in synchronous and asynchronous levels? |
| 05. | Can you define the ARROW function? How it differs from regular functions? |
| 06. | Call Back is Synchronous or Asynchronous? |
| 07. | Difference between ES5 and ES6? What is new in ES6?|
| 08. | [What is Closure and what problem it solves?] (#user-content-q-what-is-closure-and-what-problem-it-solves)|
| 09. | What are Promises? How to run some code after 10 Promises calls?|


<br/>

## Q. ***What is Object Destructuring in JavaScript?***
Object destructuring is a technique to extract properties (single or multiple) from object and bind them to variables in a single line. It can set a default value to variable if the property does not exits in the object.

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

// how to extract name and realName from hero and assign to variables
const { name, realName, enemies = ['Joker'] } = hero;

console.log(name);
console.log(enemies);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


## Q. ***What is Closure and what problem it solves?***
In JavaScript, closures are defined as inner functions that have access to variables and parameters of outer function even after the outer function has returned. The below examples show the practical use of closures:

Example: In this example, a variable mult is defined that is local to the function multFn and is only accessible inside this function. When an inner function is declared, JavaScript creates a closure where the inner function has access to the variable and its parameters.

```js
// Define the closure
function multFn() {
var mult = 9;
return function(val) {
	mult = mult * val;
	return mult;
}
}

// Use the closure
var mult = multFn();
console.log(mult(18));
```
### Practical Use cases:

Using private variables and methods: In JavaScript, we can use private variables and methods using closures. The example below shows the use of private variables with closure.

Example: In this example, the rentPrice() function returns an object with three methods: getRent(), incRent(), and decRent(). These three methods has access to the private variable rent. However, the code outside its scope cannot directly access this variable. Hence, we can mimic object oriented programming in JavaScript.

```js
// Define the closure
var rentPrice = function(initialRent) {
   var rent = initialRent;

	// Defien private variables for
	// the closure
	return {
	getRent: function() {
		return console.log(rent);
	},
	incRent: function(amount) {
		rent += amount;
		console.log(rent);
	},
	decRent: function(amount) {
		rent -= amount;
		console.log(rent);
	}
	}
}

var Rent = rentPrice(8000);

// Access the private methods
Rent.incRent(2000);
Rent.decRent(1500);
Rent.decRent(1000);
Rent.incRent(2000);
Rent.getRent();

```

Maintaining state between each function call: Suppose there is a function and one would like it to multiply multiple values together. This could be done with the help of a global variable as they are accessible throughout the program. However, a drawback is that they are prone to change from anywhere in the code. This can be done alternatively using closures. Closures help in maintaining the state between function calls without using a global variable.

```js

(function() {
  var multFn = function multiply() {
    // This variable is local to
    // the closure and holds
    // its value inbetween
    // multiple calls
  var mult = 9;
  return function(val) {
    mult = mult * val;
    return mult;
  }
};

var mult = multFn();
	
// Call the method
// multiple times
console.log(mult(2));
console.log(mult(3));
console.log(mult(5));
}());

```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
