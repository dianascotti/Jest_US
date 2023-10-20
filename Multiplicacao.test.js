function multiplicacao (numero1,numero2){
    console.log(numero1*numero2)
    return numero1*numero2
}test("multiplicacao",()=>{
    expect(multiplicacao(5,5)).toBe(25)
})