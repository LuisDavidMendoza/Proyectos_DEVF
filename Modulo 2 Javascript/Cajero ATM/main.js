let cuentas = [
  { name: 'Mali', saldo: 200 },
  { name: 'Gera', saldo: 290 },
  { name: 'Maui', saldo: 67 }
]
let userSelect = ''

const showUsers = () => {
  let nameUsers = ''
  cuentas.forEach(user => {
    nameUsers += `<div class="btn user" data-name="boxOptions" data-user="${user.name}">${user.name}</div>`
  })
  document.querySelector('.namesUsers').innerHTML = nameUsers
}
showUsers()

document.addEventListener('click', (e) => {
  const selectUsers = e.target.closest('.btn.user')
  const shadow = e.target.closest('.shadow')
  const cancel = e.target.closest('.cancel')
  const selectAction = e.target.closest('.btn.bank')
  const btnsAnswers = e.target.closest('.btn.answer')


  querySaldo = (saldoActual, answer) => {
    let query = ''
    query = `<h1>${saldoActual}</h1>`
    answer.classList.add('active')
    answer.innerHTML = query
  }
  sumSaldo = (saldoActual, answer, content) => {
    const action = content.querySelector('.action.active')
    const saldoNuevo = Number(content.querySelector('.inputNumber').value)
    let saldoTotal = ''
    const total = saldoActual.saldo
    if (saldoNuevo === 0) {
      saldoTotal = `<h2>Ingresa un monto<h2>`
    } else {
      saldoActual.saldo += saldoNuevo
      saldoTotal = `<h2>Saldo Anterior<h2>
                      <h3>${total}</h3>
                      <h2>Saldo Actual<h2>
                      <h3>${saldoActual.saldo}</h3>`
    }
    action.classList.remove('active')
    content.classList.add('active')
    answer.classList.add('active')
    answer.innerHTML = saldoTotal
  }
  restSaldo = (saldoActual, answer, content) => {
    const action = content.querySelector('.action.active')
    const saldoNuevo = Number(content.querySelector('.inputNumber').value)
    let saldoTotal = ''
    const total = saldoActual.saldo
    if (saldoActual.saldo === 0) {
      saldoTotal = `<h3>Saldo insuficiente</h3>`
    } else {
      saldoActual.saldo -= saldoNuevo
      saldoTotal = `<h1>Saldo Anterior<h1>
                    <h3>${total}</h3>
                    <h1>Saldo Actual<h1>
                    <h3>${saldoActual.saldo}</h3>`
    }
    action.classList.remove('active')
    content.classList.add('active')
    answer.classList.add('active')
    answer.innerHTML = saldoTotal
  }
  if (selectUsers) {
    const popUp = document.querySelector('.popup')
    const shadow = document.querySelector('.shadow')
    const name = selectUsers.getAttribute('data-name')
    const content = document.querySelector(`.content[data-name="${name}"]`)
    const nameUser = selectUsers.getAttribute('data-user')

    userSelect = cuentas.find(({ name }) => name === nameUser)

    shadow.classList.add('active')
    popUp.classList.add('active')
    content.classList.add('active')
  }
  if (cancel || shadow) {
    const shadow = document.querySelector('.shadow')
    const popUp = document.querySelector('.popup')
    const content = document.querySelector('.content.active')
    const number = document.querySelector('.inputNumber')
    const answer = content.querySelector('.pop-answer.active')

    content.classList.remove('active')
    answer ? answer.classList.remove('active') : ''
    shadow.classList.remove('active')
    popUp.classList.remove('active')
    number ? number.value = '' : ''
  }
  if (selectAction) {
    const name = selectAction.getAttribute('data-name')
    const contentOld = document.querySelector('.content.active')
    const content = document.querySelector(`.content[data-name="${name}"]`)
    const action = content.querySelector('.action')
    const answer = content.querySelector('.pop-answer')

    contentOld.classList.remove('active')
    content.classList.add('active')
    action ? action.classList.add('active') : ''

    if(name === 'query'){
      querySaldo(userSelect.saldo, answer)
    }
  }
  if (btnsAnswers) {
    const contentOld = document.querySelector('.content.active')
    const name = btnsAnswers.getAttribute('data-name')
    const answer = contentOld.querySelector('.pop-answer')
    if (name === 'addMoney') {
      contentOld ? contentOld.classList.remove('active') : ''
      sumSaldo(userSelect, answer, contentOld)
    } else if (name === 'restMoney') {
      contentOld ? contentOld.classList.remove('active') : ''
      restSaldo(userSelect, answer, contentOld)
    }
  }
})