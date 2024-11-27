// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];


// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newArray = nums.map(arrayMultiplier)

const newArray2 = nums.map((element) => {
    return element * 2
})

console.log(newArray);
console.log(newArray2);


function arrayMultiplier(element) {
    return element * 2
}
// // this made more sense to me. being able to create the function seperately then call it back into the new array, but I did it both ways to validate the lesson



// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];


// Your code here
const [firstTopping, seccondTopping] = pizzaToppings

console.log(firstTopping);
console.log(seccondTopping);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const { make, model } = car

console.log(make);
console.log(model);


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
