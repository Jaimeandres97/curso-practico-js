const lista1 = [
    100,
    200,
    300,
    500,
];

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
const lista2 = [100,200,250,300,4000];

function esPar(numero) {
    if(numero.length % 2 == 0) { 
        return true;
    } else {
        return false;
    }
}

function mediana(lista) {
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

    // rear un objeto cuya llave sean los valores el array y los valores el numero de veces que se repiten
    // const listaCount = {};
    // lista3.map( 
    //     function(elemento) {
    //         if(listaCount[elemento]) {
    //             listaCount[elemento] += 1;
    //         } else {
    //             listaCount[elemento] = 1;
    //         }
    //     }
    // )

    //Convertir elementos de un array en una lista para encontrar el elemento que mas se repite
    //Organizar elementos del nuevo array de menor a mayor cantidad de apariciones
    // const lista3ArrayOrdenado = Object.entries(listaCount).sort(
    //     function (elementoA, elementoB) {
    //         return elementoA[1] - elementoB[1];
    //     }
    // );

    // const moda = lista3ArrayOrdenado[lista3ArrayOrdenado.length-1];    
const lista3 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
function moda(lista) {
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