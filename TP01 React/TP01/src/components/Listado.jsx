import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas, eliminarCita }) {
  return (
    <div className="listado">
      <h2>ADMINISTRA TUS CITAS</h2>

      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita
            key={index}
            cita={cita}
            index={index}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
}

export default Listado;