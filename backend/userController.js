const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config(); // Configurar dotenv

const register = async (req, res) => {
  const { email, password, role } = req.body;
  encryptPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, encryptPassword, role });
  console.log("Usuario registrado:", { user });
  res.status(201).send({ message: "Usuario creado correctamente" });
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    bcrypt.compare(password, user.encryptPassword, (err, result) => {
      if (result) {
        // res.send({message: "Login correcto"}); // Mandar el JWT
        // Crear token
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.SECRET);

        res.send({ message: "Login correcto", token });
      } else {
        res.status(401).send({ message: "Password incorrecto" });
      }
    });
  } else {
    console.log("Usuario no encontrado.");
    res.status(404).send({ message: "Usuario no encontrado" }); 
  }
}

module.exports = { register, login }