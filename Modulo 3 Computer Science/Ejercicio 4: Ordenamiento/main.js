function ejericio1(arreglo) {
    return arreglo.sort((a, b) => b - a);
}

function ejercicio2(arreglo) {
    return arreglo.sort();
}

class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        let suma = this.calificaciones.reduce((a, b) => a + b, 0);
        return suma / this.calificaciones.length;
    }
}

class Salon {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    ordenarPorPromedio() {
        return this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
}

function ejericio4(arreglo) {
    return arreglo.sort((a, b) => a.length - b.length);
}

function ejericio5(arreglo) {
    return arreglo.sort((a, b) => Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1]));
}
