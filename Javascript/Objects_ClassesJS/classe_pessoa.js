
class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura,2);
    }
    classficarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return('Você está abaixo do peso... seu frango!')
        }
        else if (imc > 18.5 && imc < 25){
            return('Você esta no peso Normal !')
        }
        else if (imc > 25 && imc < 30){
            return('Você esta acima do peso mané!')
        }
        else if (imc > 30 && imc < 40){
            return('Você ta OBESO, vai correr...')
        }
        else if (imc > 40){
            return('CUIDADO, Vai fazer uma BARIÁTRICA')
        }
    }
}

const jose = new Pessoa ('José', 80, 1.72);
console.log(jose.classficarImc());

const benaiah = new Pessoa('Benaiah', 70, 1.60);
console.log(benaiah.classficarImc());

