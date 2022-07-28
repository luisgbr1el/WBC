const mongoose = require("mongoose"); // Package Mongoose

// Crie a constante do seu Schema e instancie um Schema do Mongoose
const UserSchema = new mongoose.Schema({
    // Liste aqui os parâmetros e o tipo de cada um
    Nome: String,
    Idade: Number,
});

// Exporte o seu Schema, declarando o nome da Table
const MessageModel = module.exports = mongoose.model('users', UserSchema)
