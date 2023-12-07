 

 const valorEtiqueta = 149;

 const formaPagamento = 2;
 

    if (formaPagamento === 1){
        console.log(valorEtiqueta - (valorEtiqueta * 0.1));
    }
    else if (formaPagamento === 2){
        console.log(valorEtiqueta - (valorEtiqueta * 0.15));
    }
    else if (formaPagamento === 3){
        console.log(valorEtiqueta);
    }
    else if (formaPagamento === 4){
        console.log(valorEtiqueta + (valorEtiqueta * 0.1));
    }