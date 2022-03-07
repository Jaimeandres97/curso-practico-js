// Promedio

function promedioLista(lista) {
    //let sumaLista = 0;
    //for(let i = 0; i < lista.length; i++) {
    //    sumaLista = sumaLista + lista[i];
    //}
        //METODO REDUCE DE LOS ARRAYS
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado +  nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length
    return promedioLista;
}

// Mediana

function esPar(numero) {
    if(numero.length % 2 == 0) { 
        return true;
    } else {
        return false;
    }
}

function medianaLista(lista) {
    // Metodo sort para ordenar la lista
    lista.sort(function(a,b) {
        return a-b;
    });
    const mitadLista = parseInt(lista.length / 2);
    let mediana = 0;
    if(esPar(lista) === true) {
        mediana = (lista[mitadLista-1]+lista[mitadLista])/2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

// Moda

function modaLista(lista) {
    const listaCount = {};
    lista.map( 
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    const listaArrayOrdenado = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArrayOrdenado[listaArrayOrdenado.length-1];
    return moda;
}

// HTML

function calcularPromedio() {
    const inputList = document.getElementById("inputPromedio");
    const list = inputList.value;
    const listNum = list.split(',');
    const numbers = listNum.map(Number);
    const promedio = promedioLista(numbers);
    const resultPromedio = document.getElementById("resultPromedio");
    return resultPromedio.innerText = "El promedio es: " + promedio;
}

function calcularMediana() {
    const inputList = document.getElementById("inputMediana");
    const list = inputList.value;
    const listNum = list.split(',');
    const numbers = listNum.map(Number);
    const mediana = medianaLista(numbers);
    const resultMediana = document.getElementById("resultMediana");
    return resultMediana.innerText = "La mediana es: " + mediana;
}

function calcularModa() {
    const inputList = document.getElementById("inputModa");
    const list = inputList.value;
    const listNum = list.split(',');
    const numbers = listNum.map(Number);
    const moda = modaLista(numbers);
    const resultModa = document.getElementById("resultModa");
    return resultModa.innerText = "La moda es: " + moda[0] + " y se repite " + moda[1]+ " veces";
}

