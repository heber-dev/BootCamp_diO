

 function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
 }

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}
 const valorEtiqueta = 149;
 const formaPagamento = 2;
 

    if (formaPagamento === 1){
        console.log(aplicarDesconto(valorEtiqueta, 10));
    }
    else if (formaPagamento === 2){
        console.log(aplicarDesconto(valorEtiqueta,15));
    }
    else if (formaPagamento === 3){
        console.log(valorEtiqueta);
    }
    else if (formaPagamento === 4){
        console.log(aplicarJuros(valorEtiqueta, 10));
    }

    