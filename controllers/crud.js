const connection = require("../database/db");

/* ================= GUARDAR REGISTRO ================= */
exports.save = (req, res) => {
  const user = req.body.user;
  const rol = req.body.rol;
  connection.query(
    "INSERT INTO users SET ?",
    { usuario: user, rol: rol },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
  // console.log(user + " - " + rol);
};

/* ================= ACTALIZAR REGISTRO ================= */
exports.update = (req, res) => {
  const id_user = req.body.id_user;
  const usuario = req.body.usuario;
  const rol = req.body.rol;
  connection.query(
    "UPDATE users SET ? WHERE id_user = ?",
    [{ usuario: usuario, rol: rol }, id_user],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
};
