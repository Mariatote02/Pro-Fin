const jwt = require("jsonwebtoken");

function validateToken(secret) {
  return (req, res, next) => {
    const { authorization } = req.headers;
    console.log("Solicitud tiene autorización: " + !!authorization);

    if (!authorization || !authorization.startsWith("Bearer ")) {
      res.sendStatus(400); // bad request / petición incorrecta
      return;
    }

    const token = authorization.slice(7);
    try {
      const payload = jwt.verify(token, secret);
      req.user = payload; // le agregamos el payload al request en la propiedad user
      // Validar el rol del usuario (es la parte de la autorización)
      console.log("Payload: ", { payload });
      if (req.user.role !== "admin") { // usuario, operador
        res.sendStatus(403);  // no autorizado
        return;
      }

      next(); // avanzamos al siguirente paso de la petición
    } catch (error) {
      console.log("Error en la validación: " + error.message);
      res.sendStatus(401);
    }
  };
}

module.exports = {
  validateToken,
};