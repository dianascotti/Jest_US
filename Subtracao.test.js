function subtracao (numero1,numero2){
    console.log(numero1-numero2)
    return numero1-numero2
}
test("subtracao",()=>{
    expect(subtracao(6,5)).toBe(5)
})
