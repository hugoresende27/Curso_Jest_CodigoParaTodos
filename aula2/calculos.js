function NumerosAleatorios(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function n_par(n1){
    if (n1<=0)
        return null
    return n1 % 2 == 0
}

//exportar a função
exports.n_par = n_par
exports.NumerosAleatorios=NumerosAleatorios