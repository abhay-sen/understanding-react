// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//     return 2*x;
// }
// const output = numbers.map(double);
// console.log(output);
//Filter - Create a new array by keeping the items that return true.
// const newoutput=numbers.filter(function (numbers){
//     return numbers<10;
// })
// console.log(newoutput);
//Reduce - Accumulate a value by doing something to each item in an array.
// const newoutput=numbers.reduce(function(accumulator,currentNumber){
//     console.log("accumulator= "+accumulator);
//     console.log("current= "+currentNumber);
//     return accumulator+currentNumber;
// })
// console.log(newoutput);
//Find - find the first item that matches from an array.
// const val=numbers.findIndex(function(num){
//     return num>10;
// })
// console.log(val);
//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
// task is to import emojipedia constant and then all you need to do is console log the meanings of each and then truncate it to a 100 texts
import emojipedia from "./emojipedia";
function truncate(emoji){
    return emoji.meaning.substring(0,100);
}
const output = emojipedia.map(truncate);
console.log(output);