document.addEventListener('click', event => {
    const multiplo5 = event.target.closest('.btn.multiplo5')
    const loteria = event.target.closest('.btn.loteria')
    const number = event.target.closest('.btn.numbers')
    const letterWord = event.target.closest('.btn.lettersWord')
    const dayWeek = event.target.closest('.btn.dayOfWeek')

    const multiplo = () => {
        let numero = prompt("Introduce un número")
        let i = 1
        while (i <= numero) {
            if (i % 5 === 0) {
                console.log(i)
            }
            i++
        }
    }

    const lotery = () => {
        let numero1 = Number(prompt("Introduce un número"))
        let numero2 = Number(prompt("Introduce un número"))
        let verifyNumber = false
        let i = 1
        while (i <= 50) {
            if ((numero1 && numero2) > 50 || (numero1 && numero2) <= 0) {
                return console.log('Pon un número que esté en el rango del 1 al 50')
            } else if (i === numero1 || i === numero2 && !verifyNumber) {
                console.log(i, 'lotería')
                verifyNumber = true
            } else {
                console.log(i)
                verifyNumber = false
            }
            i++
        }
    }
    let arrayEmpty = []
    const numbers = () => {
        let numberInput = Number(prompt('Introduce cualquier número, si quieres terminar el proceso, ingresa 0'))
        if (numberInput === 0) {
            console.log(arrayEmpty)
            arrayEmpty = ''
        } else if (!Number.isNaN(numberInput)) {
            arrayEmpty.push(numberInput)
            numbers()
        } else {
            return console.log('Ingresa un número')
        }
    }
    const lettersWords = () => {
        let letternWords = prompt('Introduce cualquier letra o palabra, para detener el proceso, deja vacio el recuadro')
        if (letternWords === '' || letternWords === null) {
            console.log(arrayEmpty.join(''))
        } else {
            arrayEmpty.push(letternWords)
            lettersWords()
        }
    }
    const dayMessage = () => {
        let message = prompt('Introduce cualquier día de la semana')

        message = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        switch (message) {
            case 'lunes':
                alert('Lunes! Principio de semana? No voy a trabajar!')
                dayMessage()
                break;
            case 'martes':
                alert('Martes! Ni te cases ni te embarques Pa que voy a arriesgarme')
                dayMessage()
                break;
            case 'miercoles':
                alert('Miercoles! Se casa la patrona Hay que pachangona')
                dayMessage()
                break;
            case 'jueves':
                alert('Jueves! Estoy muy desvelado Me siento hasta mareado')
                dayMessage()
                break;
            case 'viernes':
                alert('Viernes! Que muere jesucristo! Donde se ha visto?')
                dayMessage()
                break;
            case 'sabado':
                alert('Sábado! Trabajo medio día Por medio día No voy a trabajar!')
                dayMessage()
                break;
            case 'domingo':
                alert('Ve a descansar')
                break;
            default:
                alert('Escribe un dia de la semana')
                dayMessage()
        }
    }
    if (multiplo5) {
        multiplo()
    } else if (loteria) {
        lotery()
    } else if (number) {
        numbers()
    } else if (letterWord) {
        lettersWords()
    } else if (dayWeek) {
        dayMessage()
    }
})
