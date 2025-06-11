const queryBase = `SELECT
	Participants.NameParticipant, 
	Participants.LastName_1, 
	Participants.LastName_2, 
	Participants.Category, 
	Participants.gender, 
	Participants.IDParticipant, 
	TimeResults.TotalTime
FROM
	TimeResults
	INNER JOIN
	Participants
	ON 
		TimeResults.IDParticipant = Participants.IDParticipant
WHERE
	Participants.Category = 'libre'
 AND
	Participants.gender = ?

ORDER BY
	TimeResults.TotalTime ASC
LIMIT 3`


module.exports.extraerEstudiantesHombres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Estudiante", "Hombre"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};

module.exports.extraerEstudiantesMujeres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Estudiante", "Mujer"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};


module.exports.extraerDocenteHombres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Administrador/Docente", "Hombre"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};

module.exports.extraerDocenteMujeres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Administrador/Docente", "Mujer"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};

module.exports.extraerLibreHombres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Libre", "Hombre"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};

module.exports.extraerLibreMujeres = (conn, callback) => {
    var resultados = {};

    conn.query(queryBase, ["Libre", "Mujer"], (err, rows) => {
        if (err) return callback(err);
        resultados = rows;
        // Devolver todos los resultados
        callback(null, resultados);
    });
};

