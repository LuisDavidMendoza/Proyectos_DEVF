let cuentas = [
  { name: 'Mali', saldo: 200 },
  { name: 'Gera', saldo: 290 },
  { name: 'Maui', saldo: 67 }
]
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


  querySaldo = (saldoActual, answer) => {
    let query = ''
    query = `<div>${saldoActual}</div>`
    answer.classList.add('active')
    answer.innerHTML = query
  }
  sumSaldo = (saldoActual, answer, content) => {
    const saldoNuevo = content.querySelector('.inputNumber')
    let saldoTotal = ''
    const total = saldoActual
    if(Number(saldoNuevo.value) === 0){
      saldoTotal = `<h2>Ingresa un monto<h2>`
    } else{
      saldoActual.push(saldoActual += Number(saldoNuevo.value))
      saldoTotal = `<h2>Saldo Anterior<h2>
                      <h3>${total}</h3>
                      <h2>Saldo Actual<h2>
                      <h3>${saldoActual}</h3>`
    }
    answer.classList.add('active')
    answer.innerHTML = saldoTotal
  }
  restSaldo = (saldoActual, answer, content) => {
    const saldoNuevo = content.querySelector('.inputNumber')
    let saldoTotal = ''
    const total = saldoActual
    if (saldoActual === 0) {
      saldoTotal = `<h3>Saldo insuficiente</h3>`
    } else {
      saldoActual -= Number(saldoNuevo.value)
      saldoTotal = `<h1>Saldo Anterior<h1>
                    <h3>${total}</h3>
                    <h1>Saldo Actual<h1>
                    <h3>${saldoActual}</h3>`
    }
    answer.classList.add('active')
    answer.innerHTML = saldoTotal
  }

  if (selectUsers) {
    const popUp = document.querySelector('.popup')
    const shadow = document.querySelector('.shadow')
    const name = selectUsers.getAttribute('data-name')
    const content = document.querySelector(`.content[data-name="${name}"]`)
    const nameUser = selectUsers.getAttribute('data-user')
    const selectAction = document.querySelectorAll('.btn.bank')
    const btnsAnswers = document.querySelectorAll('.btn.answer')

    const userSelect = cuentas.find(({ name }) => name === nameUser)

    shadow.classList.add('active')
    popUp.classList.add('active')
    content.classList.add('active')

    selectAction.forEach(btnPopup => {
      btnPopup.addEventListener('click', (e) => {
        const select = e.target.closest('.btn.bank')
        const name = select.getAttribute('data-name')
        const contentPop = document.querySelector(`.content[data-name="${name}"]`)
        const action = contentPop.querySelector('.action')
        const answer = contentPop.querySelector('.pop-answer')

        btnsAnswers.forEach(btnAnswer => {
          btnAnswer.addEventListener('click', e => {
            const btn = e.target.closest('.btn.answer')
            const name = btn.getAttribute('data-name')
            if (btn) {
              if (name === 'addMoney') {
                action ? action.classList.remove('active') : ''
                sumSaldo(userSelect.saldo, answer, contentPop)
              } else if (name === 'restMoney') {
                action ? action.classList.remove('active') : ''
                restSaldo(userSelect.saldo, answer, contentPop)
              }
            }
          })
        })
        if (name === 'query') {
          content.classList.remove('active')
          contentPop.classList.add('active')
          querySaldo(userSelect.saldo, answer)
        } else if (name === 'add') {
          content.classList.remove('active')
          contentPop.classList.add('active')
          action.classList.add('active')
        } else if (name === 'rest') {
          content.classList.remove('active')
          contentPop.classList.add('active')
          action.classList.add('active')
        }
      })
    })
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
})