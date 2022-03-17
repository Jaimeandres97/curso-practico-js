const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
)
// Helpers - Utils
function esPar(numero) {
    if(numero.length % 2 == 0) { 
        return true;
    } else {
        return false;
    }
}
// Calculadora de mediana
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

// Mediana top 10%
const spliceStart = (salariosColSorted.length * (100-10))/100;
const spliceCount = salariosColSorted.length;
const salariosColTop10 = salariosColSorted.slice(spliceStart, spliceCount);


const medianaGeneralCol = medianaLista(salariosCol);
const medianaTop10Col = medianaLista(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);

