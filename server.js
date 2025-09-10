const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("? Servidor funcionando en Render");
});

app.post("/actividad", (req, res) => {
  console.log("Actividad recibida:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`?? Servidor corriendo en puerto ${PORT}`));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`?? Servidor corriendo en puerto ${PORT}`));
