const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  //verificar si el token es valido y si la palabra secreta que tiene es la correcta
  let auth = req.headers.authorization;
  console.log(auth);

  if (auth) {
    try {
      let tokenLimpio = auth.split(' ')[1];
      // console.log('TOKEN LIMPIO', tokenLimpio);
      const payload = jwt.verify(tokenLimpio, 'patata');
      // console.log('PAYLOAAAAAAAAAAAAAAAD', payload);
      req.userId = payload.id;
      next();
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ message: 'Eres un hijo de puta, estás intentando engañar' });
    }
  } else {
    res.status(401).json({ message: 'No hay token' });
  }
};
module.exports = verifyToken;
