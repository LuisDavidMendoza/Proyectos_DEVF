const allNames = document.querySelectorAll('h5[data-name]')
const allInputs = document.querySelectorAll('input')
const allInputsProducts = document.querySelectorAll('.table-content[data-product]')
document.addEventListener('click', event => {
    const calculate = event.target.closest('.btn.calcular')

    bestWorker = () => {
        let totalJuana = []
        let totalPedro = []
        let total = ''
        allInputsProducts.forEach(namesProducts => {
            let nameProduct = namesProducts.getAttribute('data-product')
            let valueProduct = namesProducts.getAttribute('data-value')
            allNames.forEach(name => {
                name = name.getAttribute('data-name')
                const selectInputs = document.querySelectorAll(`input[data-name=${name}]`)
                selectInputs.forEach(totalSale => {
                    if ((totalSale.getAttribute('data-name') && totalSale.getAttribute('data-product') === (name && nameProduct))) {
                        let totalSales = totalSale.value * valueProduct
                        if (name === 'juana') {
                            totalJuana.push(totalSales)
                        } else {
                            totalPedro.push(totalSales)
                        }
                    }
                })
            })
        })
        let sumaJuana = totalJuana.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        let sumaPedro = totalPedro.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
        total += ` <h5>Total</h5> 
                    <label>${sumaJuana}</label> 
                    <label>${sumaPedro}</label>`
        document.querySelector('.table-content[data-name="total"]').innerHTML = total

        if (sumaJuana > sumaPedro) {
            alert('Empleado del mes: Juana')
        } else if (sumaPedro > sumaJuana) {
            alert('Empleado del mes: Pedro')
        } else if (sumaJuana === sumaPedro) {
            alert('Es un empate')
        }
    }
    if (calculate) {
        bestWorker()
    }

})