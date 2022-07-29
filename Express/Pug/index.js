const express = require("express");
const app = express();
const port = 3000;

var nome = "Luis Gabriel";
var sobrenome = "Araújo";
var telefone = "(88) 98888-8888";

app.get("/", function(req, res) {
  res.render('index.pug',
    {
       name: nome,
       lastName: sobrenome,
       phone: telefone
    }
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
