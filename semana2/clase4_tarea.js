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

    function obtenerAprobados(numeros){

        let aprobados = 0;
        for(let i=0; i<numeros.length; i++){
            if(numeros[i] >= 70){
                aprobados++
            }
        }
        return aprobados;
    }
    
    function obtenerReprobados(numeros){
        let reprobados = 0;
        for(let i=0; i<numeros.length; i++){
            if(numeros[i]<70){
                reprobados++
            }
        }
        return reprobados;    
    }

    function obtenerPromedio(numeros){

        let total3 = 0;
        for (let i = 0; i < numeros.length; i++) {
            total3 = total3 + numeros[i];
        }
        const promedio = total3 / numeros.length;
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
        
        const aprobados = obtenerAprobados(numeros);
        const reprobados = obtenerReprobados(numeros);
        const promedio = obtenerPromedio(numeros);
        const mayor = obtenerMayor(numeros);
        const menor = obtenerMenor(numeros);

        return{ aprobados, reprobados, promedio, mayor, menor };
    }

async function main() {

    let calificaciones = Array.from({ length: 101 }, (_, i) => i);


    const resultado = analizarCalificaciones(calificaciones);
    console.log(`El total de aprobados es: ${resultado.aprobados}`);
    console.log(`El total de reprobados es: ${resultado.reprobados}`);
    console.log(`El promedio es: ${resultado.promedio}`);
    console.log(`La calificación mas alta es: ${resultado.mayor}`);
    console.log(`La calificación mas baja es: ${resultado.menor}`);

}

main();