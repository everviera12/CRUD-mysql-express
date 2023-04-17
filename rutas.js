const express = require("express");
const router = express.Router();
const crud = require("./controllers/crud"); //metodos que vamos a llamar desde crud.js
const conexion = require("./database/db"); //muestra la base de datos

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: results });
    }
  });
});

/* ============= RUTA PARA INGRESAR DATOS ============= */
router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/save", crud.save); /*  INGRESAR DATOS  */

/* ============= RUTA PARA EDITAR DATOS ============= */
router.get("/edit/:id_user", (req, res) => {
  const id_user = req.params.id_user;
  conexion.query(
    "SELECT * FROM users WHERE id_user = ?",
    [id_user],
    (err, results) => {
      if (err) {
        throw error;
      } else {
        res.render("edit", { user: results[0] });
      }
    }
  );
});
router.post("/update", crud.update); /* ACTUALIZA LOS DATOS */

/* ==================== ELIMINAR ==================== */
router.get("/delete/:id_user", (req, res) => {
  const id_user = req.params.id_user;
  conexion.query(
    "DELETE FROM users WHERE id_user = ?",
    [id_user],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
});

/* ========== EXPORTAMOS EL OBJETO *router* ========== */
module.exports = router;
