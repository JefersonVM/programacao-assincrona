const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

//Exemplo programação assíncrona

// console.log("Inicío");

// getCityFromZipcode("01001000").then((city) => {
//   console.log(city);
// });

// console.log("Fim");

// const city = getCityFromZipcode("01001000");

// console.log(city);

// getCityFromZipcode("01001000")
// .then((city) => {
//   console.log(city);
// })
// .catch((error) => {
//   console.log(error);
// });

// getStateFromZipcode("01001000")
// .then((state) => {
//   console.log(state);
// })
// .catch((error) => {
//   console.log(error);
// });

// async / await

(async function () {
  const city = await getCityFromZipcode("01001000");
  console.log(city);

  const state = await getStateFromZipcode("01001000");
  console.log(state);
})();
