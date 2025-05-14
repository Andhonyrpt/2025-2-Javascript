// Práctica para casa
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    for(let i = 1; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }

    let j = 1;
    while(j <= 100){
        if(j % 2 === 0){
            console.log(j);
        }
        j++;
    }
}

main();