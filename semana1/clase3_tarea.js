
const { ask } = require('../helpers/input');

async function main() {
    const dia = Number(await ask("Ingresa un número entre el 1 y 7"))
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]


    switch (dia){
        case 1:
            console.log(diasSemana[0]);
          break;
        case 2:
            console.log(diasSemana[1]);
          break;
        case 3:
            console.log(diasSemana[2]);
          break;
        case 4:
            console.log(diasSemana[3]);
          break;
        case 5:
            console.log(diasSemana[4]);
          break;
        case 6:
            console.log(diasSemana[5]);
            break;
        case 7:
            console.log(diasSemana[6]);
            break;
        default:
            console.log("No es número válido");
            break;
      }

      if(dia>=1 && dia<=7){
        console.log(diasSemana[dia-1]);
      }else{
        console.log("No es número válido")
      }
}

main();