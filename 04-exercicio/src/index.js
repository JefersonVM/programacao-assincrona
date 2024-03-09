const express = require("express");
const { getCityFromZipcode, getPackageDescriptionNpm } = require("utils-playground");

const app = express();

app.get("/", async (req, res) => {
  const city1 = await getCityFromZipcode("01001000");
  const city2 = await getCityFromZipcode("41256250");

  Promise.all([city1, city2]).then((values) => {
    const [city1, city2] = values;
    res.send(`Cidade 1: ${city1}, Cidade 2: ${city2}`);
  });
});

app.get("/pacote/:nomePacote", async (req, res) => {
  const { nomePacote } = req.params;
  const pacote = await getPackageDescriptionNpm(nomePacote);
  res.send(pacote);
});
  
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
