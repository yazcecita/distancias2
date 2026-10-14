
class Punto {
    constructor (x,y) {
        this.x = x;
        this.y = y;

    }
    distancia(punto) {

        const dx = punto.x - this.x;
        const dy = punto.y - this.y;

        return Math.sqrt(dx ** 2 + dy ** 2);
    }
       
}

function calcularDistancia(){

    const x1 = Number(document.getElementById("x1").value);

    const y1 = Number(document.getElementById("y1").value);

    const x2 = Number(document.getElementById("x2").value);

    const y2 = Number(document.getElementById("y2").value);

    const puntoA = new Punto(x1, y1);
    const puntoB = new Punto(x2, y2);

    const resultado = puntoA.distancia(puntoB);

    console.log(resultado);
    document.getElementById("resultado").textContent ="La distancia entre los dos puntos es: " + resultado.toFixed(2);
}




