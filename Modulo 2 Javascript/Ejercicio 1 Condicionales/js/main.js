const ventanaEmergente = document.querySelectorAll('.message')
const numberDivisible = document.querySelector('.message')
const excercises = document.querySelectorAll('.content');
const btnCalculate = document.querySelector('.answer-button.career')
const discount = document.querySelector('.discount.career')

let info = []

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
    const career = event.target.closest('table')


    checkAnswer = (selMessage, message) => {
        if (selMessage) {
            selMessage.classList.remove('active')
        }
        message.classList.add('active')
    }
    selectOption = (rows, selectRow) => {
        if (rows) {
            info = []
            rows.classList.remove('select')
        }
        selectRow.classList.add('select')
        saveInfoTable(selectRow);
    }
    saveInfoTable = (selectRow) => {
        const infoSelect = selectRow.querySelectorAll('td')
        const removeCharacters = /<\/?[^>]+(>|$)|(:|[$]|(MXN)|(,))/g
        infoSelect.forEach(e => info.push(e.innerHTML.replace(removeCharacters, "")))
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
        if (number.length === 2) {
            if (numberRepeat !== undefined) {
            } else {
                answerNumber = Math.min(...numberMaxMin)
                answerNumberMaxMin += `<h2 class="message active">Número menor ${answerNumber}</h2>`;
            }
        }
        else if (number.length === 3) {
            answerNumber = Math.max(...numberMaxMin)
            answerNumberMaxMin += `<h2 class="message active">Número máximo ${answerNumber}</h2>`;
            if (numberRepeat !== undefined) {
                answerNumberMaxMin += `<h2 class="message active">Número repetitivo ${numberRepeat}</h2>`;
            }
        }
        answer.innerHTML = answerNumberMaxMin;
    }

    messageDay = (answer, content) => {
        let day = content.querySelector('.inputDay')
        let messageDay = ''
        day = day.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        switch (day) {
            case 'lunes':
                messageDay += `<h2 class="message active">Lunes! <br> Principio de semana? <br> No voy a trabajar!</h2>`;
                break;
            case 'viernes':
                messageDay += `<h2 class="message active">Viernes! <br> Que muere jesucristo! <br> Donde se ha visto? <br> No voy a trabajar!</h2>`;
                break;
            case 'sabado':
                messageDay += `<h2 class="message active">Sábado! <br> Trabajo medio día <br> Por medio día <br> No voy a trabajar!</h2>`;
                break;
            case 'domingo':
                messageDay += `<h2 class="message active">Domingo! <br> Día de descanso <br> Bien merecido <br> No voy a trabajar!</h2>`;
                break;
            default:
                messageDay += `<h2 class="message active">No voy a trabajar!</h2>`;
        }
        answer.innerHTML = messageDay;

    }

    proveQualification = (answer, content) => {
        const number = content.querySelector('.inputNumber')
        let numberConvert = Number(number.value)
        let messageQualification = ''

        if (numberConvert < 1 || numberConvert > 10) {
            messageQualification += `<h2 class="message active">Error, no va con el rango de calificación</h2>`;
        } else if (numberConvert < 6) {
            messageQualification += `<h2 class="message active">Reprobado</h2>`;
        } else if (numberConvert >= 6 && numberConvert <= 8) {
            messageQualification += `<h2 class="message active">Regular</h2>`;
        } else if (numberConvert === 9) {
            messageQualification += `<h2 class="message active">Bien</h2>`;
        } else if (numberConvert === 10) {
            messageQualification += `<h2 class="message active">Excelente</h2>`;
        }
        answer.innerHTML = messageQualification
    }

    selectTopping = (answer, content) => {
        let topping = content.querySelector('.inputTopping')
        let messageTopping = ''
        topping = topping.value.toLowerCase()
        switch (topping) {
            case 'oreo':
                messageTopping += `<h2 class="message active">Total a pagar: $60</h2>`
                break;
            case 'kitkat':
                messageTopping += `<h2 class="message active">Total a pagar: $65</h2>`
                break;
            case 'brownie':
                messageTopping += `<h2 class="message active">Total a pagar: $70</h2>`
                break;
            default:
                messageTopping += `<h2 class="message active">No tenemos este topping, lo sentimos.</h2>`
                messageTopping += `<h2 class="message active">Total a pagar: $50</h2>`
        }

        answer.innerHTML = messageTopping
    }
    calculateCareer = (answer, content, name) => {
        let calculateCareer = '',
            total,
            totalDiscount
        let formatPrice = /(\d)(?=(\d{3})+(?!\d))/g
        total = Number(info[1]) * Number(info[2])
        if (btnCalculate || discount) {
            discount.classList.remove('active')
            btnCalculate.classList.remove('active')
        }
        if (info.length === 0) {
            calculateCareer += '<h2 class="message active">Selecciona un curso </h2>'
        } else if (name === 'career-no') {
                calculateCareer += `<div class="message active">
                                        <h4>${info[0]}</h4>
                                        <h4>$${Number(info[1]).toFixed(0).replace(formatPrice,'$1,')}</h4>
                                        <h4>${info[2]} meses</h4>
                                        <h4>Total $${total.toFixed(2).replace(formatPrice,'$1,')}</h4>
                                        </div>\n`
        } else if (name === 'career-yes') {
            if (btnCalculate || discount) {
                discount.classList.add('active')
                btnCalculate.classList.add('active')
                let discountMonth = Number(info[1]) * Number(discount.value)
                totalDiscount = total * (1 - Number(discount.value))
                if (event.target === btnCalculate) {
                    calculateCareer += `<div class="message active">
                                    <h4>${info[0]}</h4>
                                    <h4>$${Number(info[1]).toFixed(0).replace(formatPrice,'$1,')}</h4>
                                    <h4>${info[2]} meses</h4>
                                    <h4>$${parseFloat(discountMonth.toFixed(2).replace(formatPrice,'$1,'))} de descuento al mes</h4>
                                    <h4>Total $${totalDiscount.toFixed(2).replace(formatPrice,'$1,')}</h4>
                                    </div>\n`
                }
            }
        }
        answer.innerHTML = calculateCareer
    }
    calculateGas = (answer, content) => {
        let number = content.querySelector('.inputNumber'),
        transport = content.querySelector('.transport'),
        calculateGas = '',
        extra,
        formatPrice = /(\d)(?=(\d{3})+(?!\d))/g

        number = Number(number.value)
        transport = Number(transport.value)

        total = (transport, number, extra) =>{
            total = (transport *  number) + extra
            return total
        }
        if(number > 0 || number <= 100){
            extra = 5
            total(transport, number, extra)
            calculateGas += `<h2 class="message active">Total a pagar: $${total.toFixed(2).replace(formatPrice,'$1,')}</h2>`
        } else if(number > 100){
            extra = 10
            total(transport, number, extra)
            calculateGas += `<h2 class="message active">Total a pagar: $${total.toFixed(2).replace(formatPrice,'$1,')}</h2>`
        }
        answer.innerHTML = calculateGas
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
        const day = content.querySelector('.inputDay')
        const rows = content.querySelector('.table-content.select')
        const selectOption = content.querySelector('select')
        content.classList.remove('active')
        answer.classList.remove('active')
        shadow.classList.remove('active')
        popUp.classList.remove('active')
        number.value = ''
        numbers.forEach(n => {
            n.value = ''
        });
        day ? day.value = '' : null
        if (rows) {
            info = []
            rows.classList.remove('select')
            discount.classList.remove('active')
            btnCalculate.classList.remove('active')
        }
        selectOption ? selectOption.selectedIndex = 0 : null
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
        else if (name === 'messageDay') {
            messageDay(answer, content)
        }
        else if (name === 'qualification') {
            proveQualification(answer, content)
        }
        else if (name === 'topping') {
            selectTopping(answer, content)
        }
        else if (name === 'career-yes' || name === 'career-no') {
            calculateCareer(answer, content, name)
        }
        else if (name === 'calculateGas') {
            calculateGas(answer, content)
        }
        else {
            checkAnswer(selMessage, message)
        }
    }


    if (career) {
        const name = career.getAttribute('data-name')
        const selectRow = event.target.closest(`[data-name="${name}"].table-content`)
        const rows = career.querySelector(`[data-name="${name}"].table-content.select`)
        selectOption(rows, selectRow)
    }
})
