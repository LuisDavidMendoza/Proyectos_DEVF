//Retorna tantos elementos como diga el identificador (segundo parámetro)
ejercicio1 = (arr, identificador) => {
    const pila = new Pila(arr)
    let temporal = []
    while (pila.length() > identificador) {
        if (pila.length() === identificador) {
            break
        }
        temporal.push(pila.pop())
    }
    pila.log()
}
//Remplazar valores
ejercicio2 = (arr, remplazar, identificador) => {
    const pila = new Pila(arr)
    do {
        if (pila.pop() === identificador) {
            pila.push(remplazar)
            break
        }
    } while (pila.length() > 0)
    pila.log()
}
//Muestra el camino recorrido tanto de ida como de vuelta
ejercicio3 = (arr) => {
    const pila = new Pila(arr)
    let temporal = []
    pila.log()
    while (pila.length() > 0) {
        temporal.push(pila.pop())
    }
    console.log(temporal)
}
//Retirar contenedores para sacar el contenedor específico y volver a colocar los contenedores a su lugar
ejercicio4 = (arr, identificador) => {
    const pila = new Pila(arr)
    let temporal = []
    do {
        if (temporal.push(pila.pop()) === identificador) {
            let search = temporal.pop()
            break
        }
    }
    while (pila.length() > 0)
    while (temporal.length > 0) {
        pila.push(temporal.pop())
    }
    pila.log()
}