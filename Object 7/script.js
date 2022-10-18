function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatMalam('Rahmat');
selamatSiang('Doddy');

//contoh 2 closure function factory
let add = function() {
    let counter = 0;
    return function(){
        return ++counter;
    }
}

let a = add();

console.log(a());
console.log(a());
console.log(a());

//or

let att = (function() {
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

counter = 100; // ini tidak akan mengganggu closure nya

console.log(att());
console.log(att());
console.log(att());
console.log(att());