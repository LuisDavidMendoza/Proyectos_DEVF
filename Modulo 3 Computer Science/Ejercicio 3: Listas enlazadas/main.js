const lista = new Lista()
ejercicio1 = (parameter) => {
    lista.arr.includes(parameter) !== true ? lista.push(parameter) : ''
    lista.log()
}

ejercicio2 = (value) => {
    const lista = new Lista()
    console.log('Positivo',lista.positive(value))
    console.log('Negativo',lista.negative(value))
    lista.showHighest(value)
}