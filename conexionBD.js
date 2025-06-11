const mysql = require('mysql2');

module.exports.conexion = mysql.createConnection({
    host:"localhost", // esto depdende de donde lo vallamos a montar 
    user:"root",
    password:"bichole26",
    database:"registrocarrera",
    port:3306
});

module.exports.conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

