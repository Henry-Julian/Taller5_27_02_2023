export default {
    boton: document.querySelector("#suma"),
    click() {
        this.boton.addEventListener("click", (event) =>{
            this.calcular();
        })
    },
    calcular() {
        let resultado = 0;
        for (let i =1; i<11; i++) {
            resultado += i;
        }
        alert(`La sumatoria de los números enteros entre 1 y 10 es: ${resultado}`);
    }
}