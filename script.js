//TASK 1
let str = "Hello World";
console.log("Type: ", typeof str);
const num = 10;
console.log("Type: ", typeof num);
var bool = true;
console.log("Type: ", typeof bool);
let undef;
console.log("Type: ", typeof undef);
const nul = null;
console.log("Type: ", typeof nul);

//TASK 2
console.log(m);
console.log(n);
var m = "Hey!";
let n = "Hi!"; //When let is used after console.log, it returns "ReferenceError"

//TASK 4
for(let i = 1; i<=10; i++){
    console.log(i);
} 

let j = 2;
while(j <= 20){
    console.log(j);
    j+=2;
}
let k = 10;
do{
    console.log(k);
    k--;
} while(k>=1);



//TAsk 5
function add(a,b){
    return a+b;
}
const square = function (a){
    return a*a;
};
const greet = (naam) => {
    return `Hello ${naam}!`
};
console.log("Sum:", add(2,4));
console.log("Square:", square(5));
console.log(greet("Manjot"));

//TASK 6
function processNumber(num, callback) {
  callback(num); 
}

processNumber(5, function(n) {
  console.log("Double is", n * 2);
});
