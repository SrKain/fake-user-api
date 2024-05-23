// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 1000;
app.use(bodyParser.json());

// Simulando um banco de dados
let user = [
  {
    id: 1,
    nome: "Kauan Iasin",
    idade: 21,
    email: "kauan.iasin02@gmail.com",
    img: "https://github.com/srkain.png",
    color: "#fff",
  },
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // ou '*' para permitir todas as origens
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rota para obter todos os usuários
app.get("/user", (req, res) => {
  console.log("get", req.query);
  res.json(user);
});

// Rota para adicionar um novo usuário
app.post("/users", (req, res) => {
  const newUser = {
    id: user.length + 1,
    ...req.query,
  };
  user.push(newUser);
  res.status(201).json(newUser);
  console.log("POST", req.query.name);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
