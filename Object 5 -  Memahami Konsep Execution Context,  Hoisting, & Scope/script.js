//EXECUTION CONTEXT, HOISTING & SCOPE

    // console.log(test);
    // var test = 'rahmat';

//creation phase pada Gloabl Context
//nama var = undefined
//nama function = fn()
//hoisting = menaikan seluruh variable dan function
//window = global object
//this = window

//execution phase

// console.log(sayHello()); // or console.log(sayHello);

// var nama = 'rahmat';
// var umur = 21;

// function sayHello(){
//     return `hallo saya ${nama}, umur ${umur}`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

//contoh soal
function satu(){
    var nama = 'rahmat';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama ='Erik';
satu();
dua('Doddy');
console.log(nama);