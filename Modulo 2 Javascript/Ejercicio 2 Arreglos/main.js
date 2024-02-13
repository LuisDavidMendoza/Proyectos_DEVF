document.addEventListener('click', (event) => {
    const mostrar = event.target.closest(".mostrar");
    const cerrar = event.target.closest(".btn.close");
    const shadow = event.target.closest('.shadow')
    const btnAnswer = event.target.closest('.btn')

    createArray = () => {
        let emptyArray = []
        let min = 1;
        let max = 100;
        for (let i = 0; i <= 9; i++) {
            let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
            emptyArray.push(numberRandom)
        }
        console.log('Array Random', emptyArray)
    }
    saveArray = () => {
        let inputText = document.querySelector('.inputText').value
        let wordsArray = inputText.split(',');
        console.log(wordsArray)
    }
    orderArray = () => {
        let numbersArray = [10, 40, 30, 20, 15, 5]
        numbersArray.sort((a, b) => {
            return a - b
        })
        console.log(numbersArray)
    }

    if (mostrar) {
        const name = mostrar.getAttribute('data-name')
        const shadow = document.querySelector('.shadow')
        const popUp = document.querySelector(`.popup[data-name="${name}"]`)
        popUp.classList.add('active')
        shadow.classList.add('active')
    }
    if (cerrar || shadow) {
        const content = document.querySelector('.content.active')
        const shadow = document.querySelector('.shadow')
        const popUp = document.querySelector('.popup')
        document.querySelector('.inputText').value = ''

        shadow.classList.remove('active')
        popUp.classList.remove('active')
    }
    if (btnAnswer) {
        const name = btnAnswer.getAttribute('data-name')
        if (name === 'createArray') {
            createArray()
        } else if (name === 'saveArray') {
            saveArray()
        } else if (name === 'orderArray') {
            orderArray()
        }
    }
})
