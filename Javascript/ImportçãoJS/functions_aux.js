
const entradas = [10, 5, 50, 10 , 98, 23, 7, 23, 10 , 100, 21];
let i = 0;

function gets() {
    const valor = entradas[i];
    i ++;
    return valor;    
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print }; 