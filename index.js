//express para la api 
//mysql para la base de datos
//cors para conectar desde cualquier URL 
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const { conexion } = require("./conexionBD");
const baseDeDatos = require("./extraccionDeDatos")
const app = express();
const port = 3001;
conexion.connect();
app.use(cors());
app.use(express.json());

app.get("/estudiantes/hombres", (req, res) => {
    baseDeDatos.extraerEstudiantesHombres(conexion, (err, resultados) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.get("/estudiantes/mujeres", (req, res) => {
    baseDeDatos.extraerEstudiantesMujeres(conexion, (err, resultados) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.get("/docentes/hombres", (req, res) => {
    baseDeDatos.extraerDocenteHombres(conexion, (err, resultados) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.get("/docentes/mujeres", (req, res) => {
    baseDeDatos.extraerDocenteMujeres(conexion, (err, resultados) => {
        console.log (err)
        console.log(resultados)
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.get("/libre/hombres", (req, res) => {
    baseDeDatos.extraerLibreHombres(conexion, (err, resultados) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.get("/libre/hombres", (req, res) => {
    baseDeDatos.extraerLibreMujerese(conexion, (err, resultados) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: "Error al obtener los estudiantes" });
        } else {
            res.json(resultados);
        }
    });
});

app.listen(port, () =>
    console.log("servidor corriendo en localhost")) 
