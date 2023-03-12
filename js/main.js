import datos from './datos.js';
export default {
    btn: document.querySelector("#boton"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular(...datos.data());
        })
    },
    calcular(n1,n2) {
        if (n1==n2) {
            alert(`El número ${n1} es igual al número ${n2}`);
        } else if (n1>n2) {
            alert(`Los números ordenados de menor a mayor son: ${n2}, ${n1}`)
        } else {
            alert(`Los números ordenados de menor a mayor son: ${n1}, ${n2}`);
        }
    }
}

