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


