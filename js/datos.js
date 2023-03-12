export default {
    num1: document.querySelector("#numero1"),
    num2: document.querySelector("#numero2"),
    data() {
        return [
            Number(this.num1.value),
            Number(this.num2.value),
        ]
    }
}

