//commonjs
//module
// dependencia commonjs
const request = require('request')

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
//const url = 'https://pokeapi.co/api/v2/pokemon'

let r = request(url, 
                {json: true} ,
                (error, respuesta, body) => {
                        let dinosaurios = body
                        
                        dinosaurios.forEach((dinosaurio) => {
                            console.log("Nombre Dinosaurio: "+dinosaurio.Name)
                            console.log('-----------');
                        });
                })