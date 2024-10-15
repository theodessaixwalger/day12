const fs = require("fs");
let lastresult = "";

fs.createReadStream("GLB.Ts+dSST.csv")
  .on("data", (chunk) => {
    lastresult += chunk;
  })
  .on("end", () => {
    let line = lastresult.split("\n");
    let header = line[1].split(",");
    let columnname = "Year";
    let columnname2 = "Jan";
    let columnindex = header.indexOf(columnname);
    let columnindex2 = header.indexOf(columnname2);

    if (columnindex === -1 || columnindex2 === -1) {
      console.error(`Colonne "${columnname}" ou "${columnname2}" not found`);
    } else {
      let columnData = line.slice(1).map((line) => {
        let values = line.split(",");
        return {
          [columnname]: values[columnindex],
          [columnname2]: values[columnindex2],
        };
      });
      console.log(`Colonne "${columnname}": et "${columnname2}":`, columnData);
    }
  })
  .on("error", (err) => {
    console.error("Erreur", err);
  });
