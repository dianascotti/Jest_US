function soma (numero1, numero2){
    console.log(numero1+numero2)
    return numero1+numero2
}
test("soma",()=>{
    expect(soma(5,5)).toBe(10)
})
test("soma2",()=>{
    expect(soma(7,7)).not.toBe(16)
})

// Criar funções de subtração / Divisão / Multiplicação
