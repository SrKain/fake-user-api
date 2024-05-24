  const express = require("express");
  const bodyParser = require("body-parser");
  const app = express();
  const PORT = process.env.PORT || 1000;
  app.use(bodyParser.json());

  // Simulando um banco de dados
  let user = {
    id: 1,
    github: 'SrKain',
    nome: "Kauan Iasin",
    idade: 21,
    email: "kauan.iasin02@gmail.com",
    color: "#fff",
    cpf: "51822551870",
    cep: "83430000",
    telefone: "11948675920",
  };

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // ou '*' para permitir todas as origens
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
  // Rota para obter todos os usuários
  app.get("/user", (req, res) => {
    console.log("GET");
    res.json(user);
  });
  // Rota para adicionar um novo usuário
  app.post("/user", (req, res) => {
    const newData = { ...user, ...req.body };
    user = { ...newData };
    res.status(201).json({...user, resStatus: 'Sucess!'});
    console.log("POST", req.body);
  });
  // Iniciar o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
