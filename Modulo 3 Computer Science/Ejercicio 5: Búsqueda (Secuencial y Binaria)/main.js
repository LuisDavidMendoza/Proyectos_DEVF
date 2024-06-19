function numberMoreRepeat(arr) {
    let frecuencia = {};
    let maxFrec = 0;
    let resultado;
    for(let num of arr) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if(frecuencia[num] > maxFrec) {
            maxFrec = frecuencia[num];
            resultado = num;
        }
    }
    return console.log('Número que más se repite',resultado)
}

function searchLetters(arr) {
    return console.log('Buscando letras', arr.filter(item => typeof item === 'string'))
}

function searchBigNumber(arr) {
    return console.log('Buscando el número más grande',Math.max(...arr))
}

function searchSmallNumber(arr) {
    return console.log('Buscando el número más pequeño',Math.min(...arr))
}

class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    addContactInListContacts(ListaContactos){
        ListaContactos.addContact(this)
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }
    addContact(contacto) {
        this.contactos.push(contacto);
    }

    searchName(nombre) {
        console.log(this.contactos.filter(contacto => contacto.nombre === nombre))
    }
}
