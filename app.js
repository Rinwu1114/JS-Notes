console.log('Hello World'[10])
console.log('Hello World'.length)

let str = 'Hello World'
console.log(str[str.length - 1])


// console.log('hold ctrl + / to comment')

let fullName = 'Rin Wu';

/**
 * PRACTICE
 * 
 * Convert Celsius to Fahrenheit
 * 
 *  F = C x 1.8 +32 
 */

let celsius = "10";
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

/**
 * Conditionals practice
 */

let cash = 50
let price = 40
let remainder = cash-price
let isStoreOpen = true
let affordable = cash >= price
let shopping = affordable && isStoreOpen ? `Give receipt` : `Don't give receipt`
console.log(shopping)


/**
if (cash > price) {
    console.log(`you paid extra - here's ${remainder} dollars change` )
}
else if (cash === price) {
    console.log(`You paid the exact amount, have a dice day!`)
}
else{
    console.log(`Not enough money - you still owe ${remainder*-1} dollars`)
}
 */


/**
 * Loops
 */

//DRY = DONT REPEAT YOURSELF
let count = 1

// while loop example

/**while (count <= 100){
    console.log(count)
    count = count +1
}
    */

//for loop 
//for the while loop above

for (let i = 0; i <= 3; i++ ){
console.log(i)
}

/** Write a for-loop through 1 to 20
 * If the number is divisible by 3, print Frontend
 * If the number is divisible by 5, print simplified
 * if the number is NOT divisible by either 3 or 5, print the number
 * 
 * example
 * 1 -> 1
 * 2 -> 2
 * 3 -> Frontend
 * 4 -> 4
 * 5 -> Simplified
 * ...
 * 15 -> Frontend Simplified
 * ...
 * 20 -> Simplified
 */


for (let i = 1; i <= 20; i++ ){
    if ((i % 5 === 0)&&(i % 3 === 0)){
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (
        (i % 3) === 0){
        console.log(`${i} -> Frontend`)
    }
    else if ((i % 5) === 0 ){
        console.log(`${i} -> Simplified`)
    } 
    else {
        console.log(`${i} -> ${i}`)
    }
    }

    /**Print out every character from the string
     * "Frontend Simplified"
     * 
     * example
     * 'F'
     * 'r'
     * 'o'
     * ...
     * 'e'
     * 'd'
     */

    const w = 'Frontend Simplified'
    //console.log(w.length)
     for (let y = 1; y < w.length ; ++y){
       console.log(w[y])
    }

/**
 * Functions
 */

//Function definition
function welcomePersonToFES(firstName, lastName){
    console.log(`Welcome to FES, ${firstName} ${lastName}`)

}

//Call the function
welcomePersonToFES(`Rin`, `wu`)
welcomePersonToFES(`j`, `o`)
welcomePersonToFES(`wah`, `ter`)

function sumOfTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(sumOfTwoNumbers(10,20))

function convertCelsiusToFahrenheit (celsius){
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(20))

//Second way of making a function

const convertFahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}

console.log (convertFahrenheitToCelsius(68))

//Arrays 

/**Instead of 
 * let item1 = 20
 * let item2 = 30
 * let item3 = 40
 * let item4 = 50
 * let item5 = 100
 */

let arr = [20, 30, 40, 50, 100]

//First element of array
console.log(arr[0])
//Last elemetn of array
console.log(arr[arr.length - 1])

//add elemets to end of arrays
arr.push(200)

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50){
        return true;
    }
})

//^ long way
// let newArr = arr.filter(element => {
// return element < 50})
//^ short way

console.log(newArr)

