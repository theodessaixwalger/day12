const fs = require("fs");
let dataString = "";

fs.createReadStream("GLB.Ts+dSST.csv")
  .on("data", (test) => {
    dataString += test;
  })
  .on("end", () => {
    console.log(dataString);
  })
  .on("error", (err) => {
    console.error("Erreur", err);
  });
