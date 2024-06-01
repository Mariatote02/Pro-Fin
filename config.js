const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config(); // Configurar dotenv

const connect = () => {
  // conexión a la BD sucede en esta función...
  mongoose.connect(process.env.DB_URL);

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log('Base de datos conectada');
  });

  connection.on('error', (error) => {
    console.error(`Hubo un error al conectar la base de datos: ${error}`);
  });

}

module.exports = { connect };