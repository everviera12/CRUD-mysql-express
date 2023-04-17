const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./rutas"));

app.listen(5000, () => {
  console.log("\x1b[34;1m%s\x1b[0m", "SERVIDOR CORRIENDO");
});
