import lados from './lados.js';
export default {
    btn: document.querySelector("#boton"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular(...lados.data());
        })
    },
    calcular(c1,c2) {
        
        alert(`La Hipotenusa del triángulo dados los catetos ${c1} y ${c2} es: ${Math.hypot(c1,c2)}`);
    }
}