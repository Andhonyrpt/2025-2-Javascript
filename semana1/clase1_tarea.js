const { ask } = require('../helpers/input.js');

async function main() {
  const num1 = Number(await ask('Inserta un primer número'));
  const num2 = Number(await ask('Inserta un segundo número'));
  const operacion = await ask('¿Cuál operación quieres realizar?');

  // const suma = num1 + num2;
  // const resta = num1 - num2;
  // const multiplicacion = num1 * num2;
  // const division = num1 / num2;

  // console.log(`El resultado de ${num1} + ${num2} es: ${suma}`);
  // console.log(`El resultado de ${num1} - ${num2} es: ${resta}`);
  // console.log(`El resultado de ${num1} * ${num2} es: ${multiplicacion}`);
  // console.log(`El resultado de ${num1} / ${num2} es: ${division}`);

  let resultado;

  switch (operacion.toLowerCase()){
    case "suma":
      resultado = num1 + num2;
      console.log(`El resultado de ${num1} + ${num|} es: ${resultado}`);
      break;
    case "resta":
      resultado = num1 - num2;
      console.log(`El resultado de ${num1} - ${num2} es: ${resultado}`);
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      console.log(`El resultado de ${num1} * ${num2} es: ${resultado}`);
      break;
    case "division":
      if(num1 !== 0 && num2 !== 0){
        resultado = num1 / num2;
        console.log(`El resultado de ${num1} / ${num2} es: ${resultado}`);
      } else{
        resultado = "Operación no valida, no se puede dividir entre 0";
        console.log(resultado);
      }
      break;
  }
}

main();