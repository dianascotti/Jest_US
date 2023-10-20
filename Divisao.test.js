function divisao(numero1,numero2){
    console.log(numero1/numero2)
    return numero1 / numero2
}test("divisao",()=>{
    expect(divisao(5,5)).toBe(1)
})