import mysql from 'mysql'

// Configuración de la conexión a la base de datos CON SSH
// const dbConfig = {
//   host: "127.0.0.1" || "localhost", // Host local debido al túnel SSH
//   user: "crysiupm_dlc-back" || "crystal", // Tu usuario de la base de datos
//   password: "S4nrZ2vDZhw8U@N" || "crystal", // Tu contraseña de la base de datos
//   database: "crysiupm_dlc-back" || "crystal", // El nombre de tu base de datos
//   port: 5522 || 3306, // El puerto local del túnel SSH
// };

const dbConfig = {
  host:  "dlc-data.cf6ggu0as2zc.us-east-2.rds.amazonaws.com", // Host local debido al túnel SSHs
  user:  "admin", // Tu usuario de la base de datos
  password:"crystal123", // Tu contraseña de la base de datos
  database:"crystal", // El nombre de tu base de datos
  port:3306, // El puerto local del túnel SSH
};

const db = mysql.createConnection(dbConfig);

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

export default db;
