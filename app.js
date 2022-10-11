const express = require("express");

const app = express();

//Hay que indicarle a node que view engine se va a usar
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Hay que indicarle a node donde estarán los acrhivos públicos
app.use(express.static("public"));

app.use('/', require('./router'));

app.set("port", process.env.PORT || 3000);

app.listen(3000, () => {
  console.log(
    "Servidor iniciado en http://localhost:" +
    app.get("port") +
    "; presiona Ctrl-C para terminar."
  );
});