---
title: "Let's understand the spread and rest operator in javascript"
date: "March 5, 2021"
excerpt: "The spread operator is denoted by three periods (...). It allows expressions to be expanded in places where multiple argument elements or variables are expected."
---

**Spread Operator**

The spread operator is denoted by three periods (...). It allows expressions to be expanded in places where multiple argument elements or variables are expected.

Here are some common use cases of the spread operator:

<br>**1. Adding elements of an existing array into a new array:**<br>

```js
var arrayToAdd = ["ABC", "PQR"];
var result = ["XYZ", "IJK", ...arrayToAdd, "EFG"];
console.log(result);
```

In this example, the spread operator is used to add the elements of the **arrayToAdd** array into the **result** array. Instead of adding the entire **arrayToAdd** as a nested array, the spread operator expands it and adds the individual elements to the **result** array. The output will show all the elements listed together without any nested arrays.

<br>**2. Passing elements of an array as arguments to a function:**<br>

```js
function addThreeNumbers(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
addThreeNumbers(...args);
```

In this case, the spread operator is used to pass the elements of the **args** array as arguments to the **addThreeNumbers** function. Instead of passing the array as a single argument, the spread operator spreads out the elements of the array, allowing them to be treated as individual arguments. The output will be the sum of the three numbers: 3.

It's important to note that if there are more elements in the array than the number of parameters in the function, the extra elements will be ignored.

<br>**3. Copying arrays:**<br>

```js
var arr = [1, 2, 3];
var arr2 = [...arr];

arr2.push(4);
console.log(arr);
console.log(arr2);
```

Here, the spread operator is used to create a copy of the **arr** array. By spreading out the elements of **arr**, a new array **arr2** is created with the same elements. Modifying **arr2** will not affect **arr**, as they are separate copies. The output will show arr as [1, 2, 3] and **arr2** as [1, 2, 3, 4].
<br>**Concatenating arrays:**<br>

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

console.log(arr1);
```

In this example, the spread operator is used to concatenate two arrays, **arr1** and **arr2**. By spreading out the elements of both arrays and assigning them to **arr1**, the arrays are combined. The output will display the concatenated array **arr1**.

<br><br>**Rest Operator**<br>

Now, let's explore the rest operator. The rest operator uses three dots (...) and appears similar to the spread operator, but it functions as its opposite.

<br>While the spread operator expands an array into its individual elements, the rest operator collects multiple elements and condenses them into a single array element. As the rest operator produces an array, we can utilize array methods on it.

<br>The rest operator allows us to condense multiple elements into an array. Consider the following example:<br>

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}
```

<br>In this function, **multiply**, we pass in two or more arguments. The first argument is the **multiplier**, followed by an argument with the rest operator:

```js
function multiply(multiplier, ...theArgs) {
  // Function body
}
```

<br>The presence of the three dots before **theArgs** indicates the usage of the rest operator within a function.
<br>Now, we can pass in as many arguments as needed. The first number we pass will be the **multiplier**, and the remaining arguments will be condensed into an array called **theArgs**. We then use the **map** method on **theArgs** to multiply each element by the **multiplier**:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}
```

Essentially, we multiply each element in theArgs by the multiplier. For example:

```js
var arr = multiply(2, 1, 2, 3);
console.log(arr);
```

<br>In this case, **2** is the multiplier, and **1**, **2**, and **3** are condensed into an array**(...theArgs)**. The map function multiplies each element in **theArgs** by the multiplier. The output will be **[2, 4, 6]**.