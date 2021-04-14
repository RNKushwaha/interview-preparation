
# ES6/ Javascript Interview Questions

## Table of Contents

| Sr.No|  Questions       |
|------|------------------|
| 01. |[What is Object Destructuring in JavaScript?](#q-what-is-object-destructuring-in-javascript)|


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