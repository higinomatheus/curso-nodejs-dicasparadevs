const express = require("express");

const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json()); // Middleware para lidar com dados no formato JSON (usado para processar o body de requisições HTTP do tipo POST)

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello, World</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if (user == null) {
      return res.status(404).send("User not found!");
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    // O objeto { new: true } permite trazer o usuario com os dados atualizados.

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (user == null) {
      return res.status(404).json("User not found!");
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
