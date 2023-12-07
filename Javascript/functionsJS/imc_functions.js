
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classficarImc(imc){
    if (imc < 18.5){
        return ('Você está abaixo do peso... seu frango!')
    }
    else if (imc > 18.5 && imc < 25){
        return ('Você esta no peso Normal !')
    }
    else if (imc > 25 && imc < 30){
        return ('Você esta acima do peso mané!')
    }
    else if (imc > 30 && imc < 40){
        return ('Você ta OBESO, vai correr...')
    }
    else if (imc > 40){
        return ('CUIDADO, Vai fazer uma BARIÁTRICA')
    }
}

function main(){
    const peso = 94;
    const altura = 1.72;

    const imc = calcularImc(peso, altura);
    console.log(classficarImc(imc));
}

main();
