import datos from './datos.js';
export default {
    btn: document.querySelector("#boton"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular(...datos.data());
        })
    },
    calcular(r,h) {
        
        alert(`El área lateral del cilindro con Radio ${r} y con altura ${h} es:  ${2 * Math.PI * r * h} y su volumen es:  ${Math.PI * Math.pow(r,2) * h}`);
    }
}
