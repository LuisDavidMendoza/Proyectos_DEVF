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

ejercicio3 = (arr) => {
    const pila = new Pila(arr)
    let temporal = []
    pila.log()
    while (pila.length() > 0) {
        temporal.push(pila.pop())
    }
    console.log(temporal)
}
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