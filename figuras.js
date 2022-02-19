// Codigo del Cuadrado
console.group("Cuadrados");
    // Perimetro
function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
   
    // Area cuadrado
function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");
    // Perimetro del Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    const perimetro= lado1 + lado2 + base;
    return perimetro;
}
    // Area del Triangulo 
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

    // TRIANGULO ISOCELES
function isoceles(lado1, lado2, lado3) {
    if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ) {
        if (lado1 != lado2 && lado1 != lado3) {
            const base = lado1;
            const hipo = lado2;
            const altura = Math.sqrt((hipo*hipo)-((base*base)/4));
            return altura;
        }
        else if(lado2 != lado1 && lado2 != lado3) {
            const base = lado2;
            const hipo = lado1;
            const altura = Math.sqrt((hipo*hipo)-((base*base)/4));
            return altura;
        }
        else if(lado3 != lado1 && lado3 != lado2) {
            const base = lado3;
            const hipo = lado1;
            const altura = Math.sqrt((hipo*hipo)-((base*base)/4));
            return altura;
        }
        else {
            const base = lado1;
            const hipo = lado2;
            const altura = Math.sqrt((hipo*hipo)-((base*base)/4));
            return altura;
        }
    }
    else {
        alert("No es un triangulo Isoceles, dos de sus lados deben ser iguales");
    }
}

console.groupEnd();

// Codigo del Circulo
console.group("Circulo"); 
    // Calculo de PI
const PI = Math.PI;
    // Calculo de diametro
function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}
    // Circunferencia
function perimetroCirculo(radioCirculo) {
    return diametroCirculo(radioCirculo) * PI;
}
// Area
function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es " + areaCirculo + " cm^2.");
console.groupEnd();


// Aqui interactuamos con el HTML
    // Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
    // Triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLadoTriangulo1");
    const inputLado2 = document.getElementById("inputLadoTriangulo2");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueLado1 = parseInt(inputLado1.value); 
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("inputLadoTriangulo1");
    const inputLado2 = document.getElementById("inputLadoTriangulo2");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueLado1 = parseInt(inputLado1.value); 
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const altura = isoceles(valueLado1, valueLado2, valueBase);
    const area = areaTriangulo(valueBase, altura);
    alert(area);
}
function calcularAlturaIsoceles() {
    const inputLado1 = document.getElementById("inputLadoTriangulo1");
    const inputLado2 = document.getElementById("inputLadoTriangulo2");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueLado1 = parseInt(inputLado1.value); 
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const altura = isoceles(valueLado1, valueLado2, valueBase);
    alert(altura);
}
    // Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
    }
function calcularAreaCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
    }