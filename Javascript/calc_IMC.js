
const peso = 94;
const altura = 1.72;

const imc = peso / Math.pow(altura,2);

    if (imc < 18.5){
        console.log('Você está abaixo do peso... seu frango!')
    }
    else if (imc > 18.5 && imc < 25){
        console.log('Você esta no peso Normal !')
    }
    else if (imc > 25 && imc < 30){
        console.log('Você esta acima do peso mané!')
    }
    else if (imc > 30 && imc < 40){
        console.log('Você ta OBESO, vai correr...')
    }
    else if (imc > 40){
        console.log('CUIDADO, Vai fazer uma BARIÁTRICA')
    }


