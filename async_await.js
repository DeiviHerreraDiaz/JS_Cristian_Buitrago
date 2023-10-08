const axios = require('axios')

// API A UTILIZAR: DRAGON BALL

const url = "https://dragonballapi-backend.vercel.app/character/information/goku"

async function obtenerPersonajes(){
    try {
        const respuesta = await axios.get(url);
        
        let personajes = respuesta.data.data

        let sagas = respuesta.data.debut.sagas

        console.log("----------");
        console.log("Personaje: Goku");
        console.log("----------");
        console.log("Afiliados: " + personajes.affiliates);
        console.log("----------");
        console.log("Edad: " + personajes.age);
        console.log("----------");
        console.log("Sagas:");
        console.log("----------");

        let contador = 0 

        sagas.forEach((saga) => {

            contador += 1

            console.log(contador+": "+saga.title);

        });
        

    } catch(error) {
        console.log("Error");
    }
}

obtenerPersonajes()