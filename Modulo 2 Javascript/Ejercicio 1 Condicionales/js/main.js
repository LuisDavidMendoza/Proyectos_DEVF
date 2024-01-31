const ventanaEmergente = document.querySelectorAll('.message')
const numberDivisible = document.querySelector('.message')
const excercises = document.querySelectorAll('.content');

loadExcercise = () => {
    excercises.forEach((ex, i) => {
        ex.setAttribute('data-index', i)
    })
}
loadExcercise();

promptAlert = () => {
    let question = prompt('Introuce un número par')
    if (question === null || question === "") {
        alert('Ingresa un número')
    } else {
        switch (question % 2) {
            case 1:
                alert('Es Impar')
                break;
            case 0:
                alert('Es Par')
                break;
            default:
                alert('Ingresa un número')
                break;
        }
    }
}

document.addEventListener('click', (event) => {
    const mostrar = event.target.closest(".mostrar");
    const cerrar = event.target.closest(".cerrar");
    const btnAnswer = event.target.closest('.answer-button')
    const shadow = event.target.closest('.shadow')

    checkAnswer = (selMessage, message) => {
        if (selMessage) {
            selMessage.classList.remove('active')
        }
        message.classList.add('active')
    }

    proveNumberDivision = (answer, content) => {
        const number = content.querySelector('.inputNumber')
        let totalNumberDivisible = ''
        if (Number(number.value) % 2) {
            totalNumberDivisible += `<h2 class="message active">${number.value} número no es divisible entre 2</h2>`;
        } else {
            totalNumberDivisible += `<h2 class="message active">${number.value} número es divisible entre 2</h2>`;
        }
        answer.innerHTML = totalNumberDivisible;
    }

    proveNumberWin = (answer, content) => {
        const number = content.querySelector('.inputNumber')
        let numberWin = ''
        if (Number(number.value) === 1000) {
            numberWin += `<h2 class="message active">Ganaste un premio</h2>`;
        } else {
            numberWin += `<h2 class="message active">Lo sentimos, sigue participando</h2>`;
        }
        answer.innerHTML = numberWin;
    }

    proveNumberMaxMin = (answer, content) => {
        const number = content.querySelectorAll('.inputNumber')
        let numberMaxMin = []
        let repeat = {}
        let numberRepeat
        let answerNumber
        let answerNumberMaxMin = ''
        number.forEach(n => {
            let numb = n.value
            if (repeat[numb]) {
                numberRepeat = numb
            } else {
                repeat[numb] = true
                numberMaxMin.push(numb)
            }
        })
        if (numberRepeat === undefined) {
            if (number.length === 2) {
                answerNumber = Math.min(...numberMaxMin)
                answerNumberMaxMin += `<h2 class="message active">Este es el número menor ${answerNumber}</h2>`;
            }
        } else if (number.length === 3) {
            answerNumber = Math.max(...numberMaxMin)
            answerNumberMaxMin += `<h2 class="message active">Este es el número máximo ${answerNumber} y el número que se repite es ${numberRepeat}</h2>`;
        }
        answer.innerHTML = answerNumberMaxMin;
    }

    if (mostrar) {
        const name = mostrar.getAttribute('data-name')
        const content = document.querySelector(`.content[data-name="${name}"]`)
        const shadow = document.querySelector('.shadow')
        const popUp = document.querySelector('.popup')
        shadow.classList.add('active')
        popUp.classList.add('active')
        content.classList.add('active')
    }
    if (cerrar || shadow) {
        const content = document.querySelector('.content.active')
        const answer = content.querySelector('.answer-popup')
        const shadow = document.querySelector('.shadow')
        const popUp = document.querySelector('.popup')
        const number = document.querySelector('.inputNumber')
        const numbers = document.querySelectorAll('.inputNumber')
        content.classList.remove('active')
        answer.classList.remove('active')
        shadow.classList.remove('active')
        popUp.classList.remove('active')
        number.value = ''
        numbers.forEach(n => {
            n.value = ''
        });
    }
    if (btnAnswer) {
        const content = btnAnswer.closest('.content')
        const answer = content.querySelector('.answer-popup')
        const name = btnAnswer.getAttribute('data-name')
        const selMessage = content.querySelector('.message.active')
        const message = content.querySelector(`.message[data-name="${name}"]`)
        answer.classList.add('active')
        if (name === 'proveNumber') {
            proveNumberDivision(answer, content)
        }
        else if (name === 'proveNumberWin') {
            proveNumberWin(answer, content)
        }
        else if (name === 'proveNumberMaxMin') {
            proveNumberMaxMin(answer, content)
        }
        else {
            checkAnswer(selMessage, message)
        }
    }
})
