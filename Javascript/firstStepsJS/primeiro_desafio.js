
const precoCombustivel = 3.70;
const kmPorLitro = 14;
const kmViagem = 600;

const litrosConsumidos = kmViagem / kmPorLitro;
const precoDaViagem = litrosConsumidos * precoCombustivel;

console.log(precoDaViagem.toFixed(2));


