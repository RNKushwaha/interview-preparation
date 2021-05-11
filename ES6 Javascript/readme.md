
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
| 07. | Difference between ES5 and ES6? What is new in ES6 ?|
| 08. | What is Closure? |
| 09. | What are Promises? How to run some code after 10 Promises calls ?|


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
