
function escreveMeuNome(nome){
    return ('Meu nome é ' + nome);
}

escreveMeuNome('Heber');
escreveMeuNome('Tubarão');


function verificarIdade(idade){
    if (idade >= 18)
        console.log(escreveMeuNome('Tubarão') + ' é maior de Idade!')
    else {
        console.log(escreveMeuNome('Heber') + ' Tu é pivete !')
    }
}

verificarIdade(38);
