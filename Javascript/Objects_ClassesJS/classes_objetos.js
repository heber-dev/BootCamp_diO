

class Carro {
    marca;
    cor;
    gastoMedioPoKm;

    constructor (marca, cor, gastoMedioPoKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPoKm = gastoMedioPoKm
    }

    calcularGastoDeViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPoKm * precoCombustivel
    }
}

const meganeGT = new Carro('Renalt', 'Prata', 1 / 14);
console.log(meganeGT.calcularGastoDeViagem(100, 5.40).toFixed(2));