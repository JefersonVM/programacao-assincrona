const { getCityFromZipcode } = require("utils-playground");

//Exemplo programação assíncrona

// console.log("Inicío");

// getCityFromZipcode("01001000").then((city) => {
//   console.log(city);
// });

// console.log("Fim");

const city = getCityFromZipcode("01001000");

console.log(city);
