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
