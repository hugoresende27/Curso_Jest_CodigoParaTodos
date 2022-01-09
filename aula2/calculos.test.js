
const calculo = require('./calculos')

test('Função Números Aleatórios', () => {
    expect(calculo.NumerosAleatorios(1,100)).toBeGreaterThan(0)//se maior do que 0
    expect(calculo.NumerosAleatorios(1,100)).toBeGreaterThanOrEqual(1)//igual ou maior do que 1
    expect(calculo.NumerosAleatorios(1,100)).toBeLessThan(101)//menos do que 101
    expect(calculo.NumerosAleatorios(1,100)).toBeLessThanOrEqual(100);//igual ou menor a 101
});

test('test n_par', ()=>{
    expect (calculo).toBeDefined()//garantir q importação foi feita e está válida
    expect (calculo.n_par(-3)).toBeNull()
    expect (calculo.n_par(0)).toBeNull() //se (1)     expect(received).toBeNull()Received: false
    //expect (calculo.n_par(10)).toBeTruthy()
    //expect (calculo.n_par(11)).toBeFalsy()
    expect (calculo.n_par(10)).toBe(true)
    expect (calculo.n_par(11)).toBe(false)
    //em JS valores false/Falsy :: false,0,'',null,undefined,NaN
   
})