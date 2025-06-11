import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  // aqui se declara donde se van a guaradar cada categoria 
  const [datosEH, setDatosEH] = useState([]); // es para poder obtener los datos estudientes homnre 
  const [datosEM, setDatosEM] = useState([]); // estudiantes mujeres 
  
  const [datosAH, setDatosAH] = useState([]); // es para poder obtener los datos docentes hombres 
  const [datosAM, setDatosAM] = useState([]); // docentes  mujeres 

  const [datosLH, setDatosLH] = useState([]); // es para poder obtener los datos libre hombres 
  const [datosLM, setDatosLM] = useState([]); // libre  mujeres 


 
  const fetchURL = async (URL, setDatos) => {    // declara la funcion de URL
    try {
      const respuestaInternet = await fetch(URL);
      if (!respuestaInternet.ok) {
        console.log("Error al conectar a la url: ", URL)
        return;
      }
      const datosJSON = await respuestaInternet.json();
      console.log(datosJSON);
      const datosFormateados = datosJSON.map((item, index)=>{
        return {
          name:item.NameParticipant+ " " + item.LastName_1 + " "+ item.LastName_2,
          value:index+1, 
        }
      })
      setDatos(datosFormateados);
    } catch (err) {
      console.error(err.message)
    }

  }
   // aqui cargamos los datos a la base de datos
  useEffect(() => {
    fetchURL("http://192.168.106.186:3000/estudiantes/hombres", setDatosEH);
    fetchURL("http://192.168.106.186:3000/estudiantes/mujeres", setDatosEM);
  }, [])
  // solo se va ejecutra una vez ,[]

  return (
    <div className="w-100 h-fit flex items-center justify-center flex-col grap-3">
      <Card datos={datosEH} categoria="Estudiantes - Hombres" />
      <Card datos={datosEM} categoria="Estudiantes - Mujeres" />

      <Card datos={datosAH} categorai="Docente/Administrativo - Hombres " />
      <Card datos={datosAM} categoria="Docentes/Administrativo -Mujeres"/>

      <Card datos={datosLH} categorai="Libre - Hombres " />
      <Card datos={datosLM} categoria="Libre -Mujeres"/>

    </div>
  )
}

export default App
