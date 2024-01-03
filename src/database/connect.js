const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const connectionString =
    "mongodb+srv://admin:<password>@cursonodejsdicasparadev.qprga4f.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(connectionString, (error) => {
    if (error) {
      return console.log(
        "Ocorreu um erro ao se conectar com o banco de dados: ",
        error
      );
    }
    return console.log("Conexão com o bano de dados realizada com sucesso");
  });
};

module.exports = connectToDatabase;
