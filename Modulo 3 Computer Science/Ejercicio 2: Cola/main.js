ejercicio1 = (arr) => {
    const cola = new Cola(arr)
    let par = [],
        impar = []
    cola.arr.forEach(e => {
        cola.arr.findIndex((el, i) => {
            if (el === e) {
                if (i % 2) {
                    par.push(el)
                } else {
                    impar.push(el)
                }
            }
        })
    })
    console.log(par)
    console.log(impar)
}

ejercicio2 = (arr) => {
    const cola = new Cola(arr)
    let cita = [],
        sinCita = []
    cola.arr.forEach(e => {
        e.ticket === true ? cita.push(e) : sinCita.push(e)
        // if(e.ticket === true){
        //     cita.push(e)
        // } else{
        //     sinCita.push(e)
        // }
    })
    cola.log()
    console.log(cita)
    console.log(sinCita)
}