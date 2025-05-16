//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

    function obtenerPromedio(numeros){

        let total = 0;
        for (let i = 0; i < numeros.length; i++) {
            total = total + numeros[i];
        }
        const promedio = total / numeros.length;
        return promedio;
    }

    function obtenerMayor(numeros){
        let mayor = numeros[0];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] > mayor){
                mayor = numeros[i];
            }
        }
        return mayor;
    }

    function obtenerMenor(numeros){
        let menor = numeros[0];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] < menor){
                menor = numeros[i];
            }
        }
        return menor;
    }

    function analizarCalificaciones(numeros){
        
        const promedio = obtenerPromedio(numeros);
        const mayor = obtenerMayor(numeros);
        const menor = obtenerMenor(numeros);

        return{ promedio, mayor, menor };
    }

async function main() {

    let calificaciones = Array.from({ length: 101 }, (_, i) => i);

    const resultado = analizarCalificaciones(calificaciones);
    console.log(`El promedio es: ${resultado.promedio}`);
    console.log(`El número mayor es: ${resultado.mayor}`);
    console.log(`El número menor es: ${resultado.menor}`);

}

main();