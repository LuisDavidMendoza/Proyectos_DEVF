class Lista {
    constructor(arr = []) {
        this.arr = arr
    }
    log() {
        console.log(this.arr)
    }
    push(element) {
        this.arr.push(element)
    }
    positive(n) {
        for (let i = 0; i < n; i++) {
            this.arr.push(Math.floor(Math.random() * 100) + 1)
        }
        return this.arr
    }
    negative(n) {
        for (let i = 0; i < n; i++) {
            this.arr.push(Math.floor(Math.random() * -100) - 1)
        }
        return this.arr
    }
    showHighest(v) {
        this.arr.forEach(e => {
            if (e > v) {
                console.log('Número alto', e)
            }
        })
    }
}