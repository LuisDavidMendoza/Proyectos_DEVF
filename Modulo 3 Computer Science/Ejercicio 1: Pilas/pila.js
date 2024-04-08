class Pila{
    constructor(arr = []){
        this.arr = arr
    }
    log(){
        console.log(this.arr)
    }
    length(){
        return this.arr.length
    }
    push(element){
        this.arr.push(element)
    }
    pop(){
        return this.arr.pop()
    }
}