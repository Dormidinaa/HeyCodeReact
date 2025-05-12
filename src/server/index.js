const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middlewares/verifyToken');
const app = express();

const users = [
  { id: 1, email: 'pepe@pepe.com', name: 'pepe', type: 0 },
  { id: 23, email: 'admin@admin.com', name: 'admin', type: 1 },
];

app.use(express.json());

app.use(cors({}));

app.post('/login', (req, res) => {
  //Captar los datos del usuario que quiere loguearse
  const { email, password } = req.body;
  //Verificar que el usuario existe en la db
  const userLogged = users.find((e) => e.email === email);

  if (userLogged) {
    let token = jwt.sign({ id: userLogged.id }, 'patata', { expiresIn: '1d' });
    res.status(200).json({ token: token });
  } else {
    res.status(401).json({ message: 'El usuario no existe' });
  }
  console.log(password);

  //Verificar que la contraseña es correcta
  //Genero un token que dentro lleva el id del user y una palabra secreta
  //Mando el token con la respuesta
});

app.get('/getUser', verifyToken, (req, res) => {
  console.log(req.userId);
  let user = users.find((e) => e.id === req.userId);
  res.status(200).json(user);
});
app.listen(4000, () => console.log('corriendo'));
