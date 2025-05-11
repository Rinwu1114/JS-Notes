console.log("Hello World"[10]);
console.log("Hello World".length);

let str = "Hello World";
console.log(str[str.length - 1]);

// console.log('hold ctrl + / to comment')

let fullName = "Rin Wu";

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

let cash = 50;
let price = 40;
let remainder = cash - price;
let isStoreOpen = true;
let affordable = cash >= price;
let shopping =
  affordable && isStoreOpen ? `Give receipt` : `Don't give receipt`;
console.log(shopping);

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
let count = 1;

// while loop example

/**while (count <= 100){
    console.log(count)
    count = count +1
}
    */

//for loop
//for the while loop above

for (let i = 0; i <= 3; i++) {
  console.log(i);
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

for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
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

const w = "Frontend Simplified";
//console.log(w.length)
for (let y = 1; y < w.length; ++y) {
  console.log(w[y]);
}

/**
 * Functions
 */

//Function definition
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}`);
}

//Call the function
welcomePersonToFES(`Rin`, `wu`);
welcomePersonToFES(`j`, `o`);
welcomePersonToFES(`wah`, `ter`);

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(10, 20));

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(convertCelsiusToFahrenheit(20));

//Second way of making a function

const convertFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

console.log(convertFahrenheitToCelsius(68));

//Arrays

/**Instead of
 * let item1 = 20
 * let item2 = 30
 * let item3 = 40
 * let item4 = 50
 * let item5 = 100
 */

let arr = [20, 30, 40, 50, 100];

//First element of array
console.log(arr[0]);
//Last elemetn of array
console.log(arr[arr.length - 1]);

//add elemets to end of arrays
arr.push(200);

let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    return true;
  }
});

//^ long way
// let newArr = arr.filter(element => element < 50)
//^ short way

console.log(newArr);

/**
 * Filter out the FAIL elements in array
 *
 * [A+, A, FAIL] => [A, A+]
 */

let grades = ["A+", "A", "FAIL"];

//let pass = grades.filter(element => element !== 'FAIL')
//console.log(pass)
//short way

//let pass = grades.filter((pass) => {
//    if (pass !== 'FAIL'){
//        return true;
//    }
//})
//console.log(pass)
// long way

//done without using array.filter method

let pass = [];
for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== "FAIL") {
    pass.push(grades[i]);
  }
  console.log(pass);
}

/**array.map method
 * Turn each element in an array of dollars into cents
 *
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 */

let dollars = [1, 5, 10, 3];

//let cents = dollars.map ((element) => {
//    return (element*100)
//})

//console.log(cents)

//without .map method

let cents = [];
for (let i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 100);
}
console.log(cents);

//Objects

let users = [
  {
    username: "Rin",
    email: "rinwu@gmail.com",
    password: "test123",
    subStatus: `VIP`,
    discordID: `Rin#0001`,
    lessonsCompleted: [0, 1, 2, 3],
    //etc
  },
  {
    username: "Pat",
    email: "patlund@gmail.com",
    password: `test321`,
    subStatus: `Standard`,
    discordID: `pat#0001`,
    lessonsCompleted: [0, 1],
  },
  {
    username: "zed",
    email: `zed@gmail.com`,
    password: `zedtest123`,
    subStatus: `VIP`,
    discordID: `zed#0001`,
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
];

//console.log(users[0].lessonsCompleted.map(elem => elem *2))
// users[0] = accesses first element of array
//lessonsCompleted = accesses the "lessonsCompleted" object
//.map is attached by default, mapping through it and multiply each
//element by 2

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log(`logged in`);
      } else {
        console.log(`wrong email / password`);
      }
      return;
    }
  }
  console.log(`wrong email`);
}

login(`wrong@gmail.com`, `test321`);

/**
 * Create a register function that accepts:
 * - username
 * - password
 * - email
 * - subStatus
 * - discordID
 * - lessonsCompleted
 *
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the users array
 */

function register(user) {
  users.push(user);
}

register({
  username: `ericusername`,
  email: `eric@gmail.com`,
  password: `password`,
  subStatus: `VIP`,
  discordID: `eric#0001`,
  lessonsCompleted: [0, 1],
});

console.log(users);

//DOM

//Change HTML
//first way of accessing an element
console.log(document.querySelector(`#DOMexample`));
//^^^^ most used!! class use a . ID use a #
//secodn way of accessing an element
console.log(document.getElementById(`DOMexample`));
// better practice if you have an ID

document.querySelector("#DOMexample").innerHTML = `This is changed in JS`;
// .innerHTML = 'content' replaces the inner content you are accessing
// .innerHTML += 'content' ADDS typed content onto existing HTML

//change CSS
document.querySelector(`#DOMexample`).style.fontSize = `16px`;

function ChangeDOMExampleToRed() {
  document.querySelector("#DOMexample").style.color = `red`;
}

function toggleDarkMode() {
  document.querySelector(`body`).classList.toggle("dark-theme");
}

//Promises
//Useing backend data
//fetch(`https://jsonplaceholder.typicode.com/users/1`)

//To unlock the promise data
//1. Then
// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     emailRef.innerHTML = data.email;
//   });

// //.json is a promise in of itself
const emailRef = document.querySelector(`.email`);
// console.log(emailRef);

//2. Async/Await
async function main(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email
}
main() 

//making it dynamic
const statusRef = document.querySelector(`.status`)
const videoRef = document.querySelector(`.video`)

//creating promises (mock backend)

function getSubscriptionStatus (){
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve(`None`)
        }, 2000)
    })
}

function getVideo(subscriptionStatus){
    return new Promise ((resolve, reject) =>{
        if (subscriptionStatus === `VIP`){
            resolve(`Show Video`)
        }
        else if (subscriptionStatus === `FREE`){
            resolve(`Show Trailer`)
        }
        else{
            reject(` No Video`)
        }
    })
}

//taking data out of the backend
//and using it on the frontend

async function sub () {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
    try{
    console.log(await getVideo(status))
    }
    catch(e){
        console.log(e)
        videoRef.innerHTML = e
    }
}

sub()