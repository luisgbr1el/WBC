const mongoose = require("mongoose"); // Package Mongoose
const userSchema = require("./schemas/user"); // Seu Schema
const mongoServer = "url" // Url de conexão do seu DB

mongoose.connect(
  mongoServer,
  {
    // Não sei muito bem como esses negócio aqui funciona, eu sempre deixo assim:
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

// Constantes que serão salvas
const nome = "lobisomem pidão";
const idade = 24;

// Declare um 'let' com seus novos dados e instancie o seu Schema
let newData = new userSchema({
  // Liste aqui os parâmetros do seu Schema e quais dados cada um receberá
  Nome: nome,
  Idade: idade,
});

// Use a função save() para salvar seus dados no DB
newData.save();
