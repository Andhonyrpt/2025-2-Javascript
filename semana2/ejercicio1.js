const { ask } = require('../helpers/input');

function saludar(nombre){
    console.log(`Hola estimado(a): ${nombre}, espero tengas un buen día...`);
}

async function main() {

    //----- While -------
    const limite = Number(await ask("¿Hasta que número quieres contar?"));
    let i = 0;

    while( i <= limite){
        console.log(i);
        i++
    }

    i = limite;
    while(i >= 0){
        console.log(i);
        i--;
    }

    // -------- For ----------
    const personas = [
        "Pedro",
        "Juan",
        "María",
        "Ana",
        "Karla",
        "Sofía",
        "Carlos",
        "Esteban",
        "Roberto",
        "Andhony",
        "Rodolfo",
        "Hector"
    ]

    console.log("Ascendente");
    for(let i = 0; i < personas.length; i++){
        saludar(personas[i]);
    }

    console.log("Descendente");
    for(let i = personas.length - 1; i >= 0; i--){
        saludar(personas[i]);
    }

    // ---------- For each ---------
    console.log("foreach");
    personas.forEach((persona) => saludar(persona));

    const frutas = [
        "Fresas",
        "Mango", 
        "Kiwi",
        "Manzana",
        "Uvas"
    ]

    const cajon = Number(await ask("¿Que cajón quieres abrir?"));

    for(let j = 1; j <= 5; j++){
        if(j === cajon){
            console.log("En el cajón hay:", frutas[j-1]);
        }
    }
}

main();