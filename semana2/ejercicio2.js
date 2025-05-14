const { ask } = require('../helpers/input');

async function main() {
  let opcion = '';
  let frutas = [];

  while (opcion !== '3') {
    opcion = await ask(`¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Salir`) // "\n" , es para un salto de línea

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
          console.log(`${frutaAEliminar} ha sido eliminado`);
        }else{
          console.log("Fruta no encontrada");
        }
        console.log('Frutas disponibles: ', frutas);
      }
    } else if (opcion === '3') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
}

main();