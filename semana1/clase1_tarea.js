const { ask } = require('../helpers/input.js');

async function main() {
  const numero1 = Number(await ask('Inserta un primer número'));
  const numero2 = Number(await ask('Inserta un segundo número'));
  const operacion = await ask('¿Cuál operación quieres realizar?');

  // const suma = numero1 + numero2;
  // const resta = numero1 - numero2;
  // const multiplicacion = numero1 * numero2;
  // const division = numero1 / numero2;

  // console.log(`El resultado de ${numero1} + ${numero2} es: ${suma}`);
  // console.log(`El resultado de ${numero1} - ${numero2} es: ${resta}`);
  // console.log(`El resultado de ${numero1} * ${numero2} es: ${multiplicacion}`);
  // console.log(`El resultado de ${numero1} / ${numero2} es: ${division}`);

  let resultado;

  switch (operacion.toLowerCase()){
    case "suma":
      resultado = numero1 + numero2;
      console.log(`El resultado de ${numero1} + ${numero2} es: ${resultado}`);
      break;
    case "resta":
      resultado = numero1 - numero2;
      console.log(`El resultado de ${numero1} - ${numero2} es: ${resultado}`);
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      console.log(`El resultado de ${numero1} * ${numero2} es: ${resultado}`);
      break;
    case "division":
      if(numero1 !== 0 && numero2 !== 0){
        resultado = numero1 / numero2;
        console.log(`El resultado de ${numero1} / ${numero2} es: ${resultado}`);
      } else{
        resultado = "Operación no valida, no se puede dividir entre 0";
        console.log(resultado);
      }
      break;
  }
}

main();