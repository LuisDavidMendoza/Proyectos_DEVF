fibonacci = () => {
    let prev = 0, next = 1, result, i = 0;
    let fibonacciResult = []

    for(i; i < 50; i++){
        fibonacciResult.push(result = prev + next)
        prev = next
        next = result
    }

    console.log(fibonacciResult)
}

// fibonacci()

factorialRecursivo = (n) => {
    resultado = 1

    for(let i = 1; i <= n; i++){
        resultado *= i
    }
    return console.log(resultado)
}

// factorialRecursivo(0)

isArmstrong = (n) => {
    let numberDivide = [...`${n}`].map( nD => parseInt(nD)),
    resultado = [],
    total = 0

    numberDivide.forEach( multiplyPow => {
        resultado.push(Math.pow(multiplyPow,numberDivide.length))
    })

    resultado.forEach( sum => {
        total += sum
    })
    
    if(total === n){
        console.log('Es armstrong')
    }else{
        console.log('No es armstrong')
    }
}

isArmstrong(1634)