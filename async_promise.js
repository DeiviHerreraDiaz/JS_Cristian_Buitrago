const axios = require('axios')

//const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
const url = 'https://pokeapi.co/api/v2/pokemon'

axios.get(url)
        .then((respuesta) => {
                
                let pokemones = respuesta.data.results
                        
                        pokemones.forEach((pokemon) => {
                            console.log("Nombre Pokemon: "+pokemon.name)
                            console.log('-----------');
                        })
        })
        .catch(function(error){
                console.log(error);
        })
        
        
        