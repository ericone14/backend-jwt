const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //  JWT
const cors = require("cors");

const db = require("./bd");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

// CHAVE JWT
const SECRET = "segredo_jwt_super_seguro";
//cadastro
app.post("/register", async (req, res) => {
  const { login, senha } = req.body;

  const hash = await bcrypt.hash(senha, 10);

  const sql = "INSERT INTO credencial (login, senha) VALUES (?, ?)";

  db.query(sql, [login, hash], (err, result) => {
    if (err) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    res.json({ message: "Usuário criado com sucesso" });
  });
});
//login
app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  const sql = "SELECT * FROM credencial WHERE login = ?";

  db.query(sql, [login], async (err, results) => {
    if (results.length === 0) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    const user = results[0];

    const valid = await bcrypt.compare(senha, user.senha);

    if (!valid) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    // GERANDO TOKEN JWT
    const token = jwt.sign(
      { id: user.id, login: user.login },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  });
});
//rota protegida
app.get("/admin", authMiddleware, (req, res) => {
  res.json({
    message: "Bem-vindo ADM",
    user: req.user
  });
});

//iniciar o servidor
app.listen(3040, () => {
  console.log("Servidor rodando em http://localhost:3040");
});