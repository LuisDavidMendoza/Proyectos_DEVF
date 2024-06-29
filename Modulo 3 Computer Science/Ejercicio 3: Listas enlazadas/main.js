const lista = new Lista()
//Evitar datos repetidos
ejercicio1 = (parameter) => {
    lista.arr.includes(parameter) !== true ? lista.push(parameter) : ''
    lista.log()
}
//Crear una lista enlazada de números enteros positivos y negativos, se inserción se realiza por el último nodo.
//Mostrar los nodos que superen un valor determinado
ejercicio2 = (value) => {
    const lista = new Lista()
    console.log('Positivo',lista.positive(value))
    console.log('Negativo',lista.negative(value))
    lista.showHighest(value)
}