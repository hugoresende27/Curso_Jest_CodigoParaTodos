
const calculo = require('./soma')//dir do ficheiro que vai ser testado

//test('Nome do teste'), arrow function
test('Soma dois numeros', ()=>{

    //expect (var.funcao(parametros).toBe(return))
    expect(calculo.soma(10,20)).toBe(30)
    expect(calculo.soma(20,20)).toBe(40)
})