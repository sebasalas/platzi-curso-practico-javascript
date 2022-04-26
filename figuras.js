//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
//console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return radio * radio * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

// Interacción Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);    
}

// Interacción Triángulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1")
    const lado2 = document.getElementById("InputTrianguloLado2")
    const base = document.getElementById("InputTrianguloBase")
    const valorlado1 = lado1.valueAsNumber;
    const valorlado2 = lado2.valueAsNumber;
    const valorbase = base.valueAsNumber;

    const perimetro = perimetroTriangulo(valorlado1, valorlado2, valorbase);
    alert(perimetro);    
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase")
    const altura = document.getElementById("InputTrianguloAltura")
    const valorbase = base.value;
    const valoraltura = altura.value;

    const area = areaTriangulo(valorbase, valoraltura);
    alert(area);    
}


// Interacción Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoRadio")
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);    
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculoRadio")
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);    
}