const { ask } = require('../helpers/input');

async function main() {

    const number = Number(await ask("¿Cuántos años tienes? "));

    if(number % 3 === 0 && number % 5 === 0){
        console.log("Es múltiplo de 3 y 5");
    } else if(number % 3 === 0){
        console.log("Es múltiplo de 3");
    } else if(number % 5 === 0){
        console.log("Es múltiplo de 5");
    } else{
        console.log("No es múltiplo de 3 y 5");
    }


    switch (true){
        case number % 3 === 0 && number % 5 === 0:
            console.log("Es múltiplo de 3 y 5");
          break;
        case number % 3 === 0:
            console.log("Es múltiplo de 3");
          break;
        case number % 5 === 0:
            console.log("Es múltiplo de 5");
          break;
        default:
            console.log("No es múltiplo de 3 y 5");
            break;
      }
  }
  
  main();