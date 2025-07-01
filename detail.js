//TASK 3
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

if(age<18){
    alert(`Hey ${name}, you are a teen.`);
} else if(age>=18 && age <= 60){
    alert(`Welcome ${name}, you are an adult!`);
}else{
    alert(`Hello ${name}, you are a senior citizen.`);
}

