/*
// Array de competidores
let competidores = [
    { nombre: "Juan Cruz Araldi", categoria: "Senior", club: "San Lorenzo", tiempo: 0 },
    { nombre: "Diego Pillot", categoria: "Senior", club: "Boca Juniors", tiempo: 0 },
    { nombre: "Ivan Vazquez", categoria: "Senior", club: "Boca Juniors", tiempo: 0 },
    { nombre: "Charly Barbieri", categoria: "Senior", club: "River Plate", tiempo: 0 }
];

// Ingresar el tiempo de cada competidor
competidores.forEach(function(competidor, index) {
    let tiempoIngresado = parseFloat(prompt("Ingrese el tiempo de " + competidor.nombre + " en segundos:"));
    competidores[index].tiempo = tiempoIngresado;
});

// Ordenar por tiempo 
competidores.sort(function(a, b) {
    return a.tiempo - b.tiempo;
});

// Resultados
console.log("Resultado final:");
competidores.forEach(function(competidor) {
    console.log("1ro: " + competidor.nombre + ", Categoría: " + competidor.categoria + ", Club: " + competidor.club + ", Tiempo: " + competidor.tiempo + " segundos");
});

--------------------
// Array de competidores
let competidores = [
    { nombre: "Juan Cruz Araldi", categoria: "Senior", club: "San Lorenzo", tiempo: 0 },
    { nombre: "Diego Pillot", categoria: "Senior", club: "Boca Juniors", tiempo: 0 },
    { nombre: "Ivan Vazquez", categoria: "Senior", club: "Boca Juniors", tiempo: 0 },
    { nombre: "Charly Barbieri", categoria: "Senior", club: "River Plate", tiempo: 0 }
];

// Solicitar el tiempo de cada competidor
competidores.forEach(function(competidor, indicador) {
    let tiempoIngresado = parseFloat(prompt("Ingrese el tiempo de " + competidor.nombre + " en segundos:"));
    competidores[indicador].tiempo = tiempoIngresado;
});

// Ordenar los competidores por tiempo (de menor a mayor)
competidores.sort(function(a, b) {
    return a.tiempo - b.tiempo;
});

// Mostrar los resultados en la consola con la posición
console.log("Resultado final:");
competidores.forEach(function(competidor, indicador) {
    let posicion;
    if (indicador == 0) {
        posicion = "1ro";
    } else if (indicador == 1) {
        posicion = "2do";
    } else if (indicador == 2) {
        posicion = "3ro";
    } else {
        posicion = (indicador + 1) + "to";
    }
    console.log(posicion + " " + competidor.nombre + ", Categoría: " + competidor.categoria + ", Club: " + competidor.club + ", Tiempo: " + competidor.tiempo + " segundos");
});
*/

// Array para almacenar los competidores
let competidores = [];

// Solicitar el número de competidores
let numeroCompetidores = parseInt(prompt("Ingrese el número de competidores:"));

// Verificar si hay 4 o más competidores
if (numeroCompetidores >= 2) {
    // Ingresar los datos de los competidores
    for (let i = 0; i < numeroCompetidores; i++) {
        let nombre = prompt("Ingrese el nombre del competidor " + (i + 1) + ":");
        let tiempo = parseFloat(prompt("Ingrese el tiempo del competidor " + (i + 1) + " en segundos:"));

        // Agregar el competidor al array
        competidores.push({ nombre: nombre, tiempo: tiempo });
    }

    // Ordenar los competidores por tiempo (de menor a mayor)
    competidores.sort();

    // Mostrar los resultados en la consola con la posición
    console.log("Competidores ordenados según el tiempo:");
    competidores.forEach(function(competidor, indicador) {
        let posicion;
        if (indicador == 0) {
            posicion = "1ro";
        } else if (indicador == 1) {
            posicion = "2do";
        } else if (indicador == 2) {
            posicion = "3ro";
        } else {
            posicion = (indicador + 1) + "to";
        }
        console.log(posicion + " " + competidor.nombre + ", Tiempo: " + competidor.tiempo + " segundos");
    });
} else {
    alert("Lo siento, no hemos llegado al número mínimo de competidores para realizar la prueba.");
}