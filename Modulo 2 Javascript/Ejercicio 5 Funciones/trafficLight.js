let luces = document.querySelectorAll('.luz');
let indiceActual = 2;

function cambiarLuz() {
    luces.forEach((luz, indice) => {
        luz.classList.remove('encendido', 'parpadeo');
        if (indice === indiceActual) {
            luz.classList.add('encendido');
            if (luz.classList.contains('verde')) {
                setTimeout(() => {luz.classList.add('parpadeo')}, 1000);
            }
        } else if (indiceActual === -indiceActual) {
            indiceActual = 3
        }
    });
    indiceActual = (indiceActual - 1);
}
setInterval(cambiarLuz, 2000); // Cambia la luz cada 1 segundo