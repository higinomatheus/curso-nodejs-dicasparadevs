const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.qprga4f.mongodb.net/database?retryWrites=true&w=majority`;
  //   await mongoose.connect(connectionString, (error) => {
  //     if (error) {
  //       return console.log(
  //         "Ocorreu um erro ao se conectar com o banco de dados: ",
  //         error
  //       );
  //     }
  //     return console.log("Conexão com o bano de dados realizada com sucesso");
  //   });
  await mongoose
    .connect(connectionString)
    .then(() => console.log("Conexão bem-sucedida"))
    .catch((error) => console.error("Erro na conexão:", error));
};

module.exports = connectToDatabase;
