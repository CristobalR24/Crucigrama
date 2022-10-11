const express = require('express');
const { Router } = express;
const router = Router();
const conexion = require('./database/db');

module.exports = router;

// RUTA INICIAL

router.get('/', (req, res) => {
  res.type("text/html");
  res.render('index');
});


// RENDERIZADOS DE MENU

/*
router.get('/FAQ', (req, res) => {
  res.type("text/html");
  res.render('index', { pagina: 90, titulo: "FAQ" });
});*/


