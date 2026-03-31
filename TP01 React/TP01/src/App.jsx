import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <Header />
      <div className="contenido">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}

export default App;