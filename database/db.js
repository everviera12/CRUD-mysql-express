/* ========= CONEXION A BASE DE DATOS ========= */
const mysql = require("mysql"); // Importamos modulo mysql
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root123",
  database: "crud_mysql",
});

/* ========= VALIDAMOS CONEXION ========= */
connection.connect((err) => {
  if (err) {
    console.log("\x1b[33m%s\x1b[0m", "EL ERROR ES " + err);
    return;
  } else {
    console.log("\x1b[33m%s\x1b[0m", "Database Connected with success");
  }
});

module.exports = connection; //Exportamos el objeto *connection*