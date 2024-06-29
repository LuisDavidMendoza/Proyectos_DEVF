//Ordenar por número descendente
function ejercicio1(arreglo) {
    return console.log(arreglo.sort((a, b) => b - a))
}
//Ordenar lista de caracteres según su valor decima ASCII
function ejercicio2(arreglo) {
    return console.log(arreglo.sort())
}

class Alumno {
    constructor(name, calification = []) {
        this.name = name;
        this.califications = calification;
        this.alumnos = []
    }
    addAlumno(name, calification){
        this.alumnos.push({names: name, califications: calification})
        console.log('Alumnos', this.alumnos)
    }

    getPromedio() {
        alumno.alumnos.forEach(a => {
            let sum = a.califications.reduce((a, b) => a + b, 0)
            let prom = sum / a.califications.length
            a.promedio = prom
            console.log('Name', a.names, 'Promedio', prom)
        })
    }
}

class Salon {
    alumno = new Alumno()

    orderPromedio() {
        console.log(alumno.alumnos.sort((a,b) => b.promedio - a.promedio))
    }
}
//Ordenar palabras de menor número a mayor
function ejercicio4(arreglo) {
    return console.log(arreglo.sort((a, b) => a.length - b.length))
}
//Ordenar coordenadas a partir del punto más cercano a 0,0
function ejercicio5(arreglo) {
    return console.log(arreglo.sort((a, b) => Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1])))
}
