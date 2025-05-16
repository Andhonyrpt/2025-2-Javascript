// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {

    let opcion = '';
    const edades =[];
    let resultado = 0;

    while(opcion !== '3'){
        opcion = await ask(`¿Qué deseas hacer? \n1. Insertar un número \n2. Mostrar total \n3. Salir`);

        if( opcion === '1'){

            let edad = Number(await ask('Ingresa una edad: '));
            edades.push(edad);

        } else if ( opcion === '2'){

            for(let index = 0; index < edades.length; index++ ){
                if(edades[index] >= 18){
                    resultado++
                }
            }
            console.log("El total de mayores de 18 es:",resultado);
            resultado = 0;
        } else if( opcion === '3'){
            //Salir
            console.log('Gracias por usar el programa');
        }
    }
}

main();