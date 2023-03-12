export default {
    num1: document.querySelector("#radio"),
    num2: document.querySelector("#altura"),
    data() {
        return [
            Number(this.num1.value),
            Number(this.num2.value),
        ]
    }
}
