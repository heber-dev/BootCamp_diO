
const precoEtanol = 3.70;
const precoGasoline = 5.40;
const kmPorLitro = 14;
const kmViagem = 600;
const tipoCombustivel = 'Gasoline'

const litrosConsumidos = kmViagem / kmPorLitro;
const precoDaViagem = litrosConsumidos * precoEtanol;


    if (tipoCombustivel === 'etanol') {
        const valorGasto = kmViagem * precoEtanol;
        console.log(valorGasto.toFixed(2));
        }
    else {
        const valorGasto = kmViagem * precoGasoline;
        console.log(valorGasto.toFixed(2));
    }


