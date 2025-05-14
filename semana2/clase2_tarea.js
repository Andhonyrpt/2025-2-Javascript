// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

async function main() {
    let opcion = '';
    let frutas=[];

    while (opcion !== '4') {
    opcion = await ask(`¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Ver lista de frutas \n4. Salir`) // "\n" , es para un salto de línea

    if (opcion === '1') {
      let frutaNueva = await ask('Ingresa el nombre de la fruta que quieres agregar: ');
      frutas.push(frutaNueva); // .push agrega hasta el final del arreglo y .pop eliminar del final del arreglo
      console.log(`Fruta Agregada: ${frutaNueva}`);
      console.log(`Frutas actuales ${frutas}`);

    } else if (opcion === '2') {
      //Eliminar
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        let index = frutas.indexOf(frutaEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaEliminar} ha sido eliminado`);
        }else{
          console.log("Fruta no encontrada");
        }
        console.log('Frutas disponibles: ', frutas);
      }
    } else if(opcion === '3'){
        console.log(`Tu lista de frutas es: ${frutas}`);
    } else if (opcion === '4') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
}

main();