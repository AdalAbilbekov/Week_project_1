let age = prompt('What is your monthly salary?')

if (age < 200000){
    alert('Middle class')
}
else {
    alert('Rich class')
}

let a = +prompt('a?', '');
console.log(a) // string
a = ++a
console.log(a)

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    default:
        alert('2, 3')
}


let sum = 0
for (let i = 1; i < 101; i++){
    sum += i
}
console.log(sum)

sum = 0
let j = 1;
while (j < 101){
    sum += j;
    j++
}

console.log(sum)