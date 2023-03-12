export default {
    num1: document.querySelector("#cat1"),
    num2: document.querySelector("#cat2"),
    data() {
        return [
            Number(this.num1.value),
            Number(this.num2.value),
        ]
    }
}