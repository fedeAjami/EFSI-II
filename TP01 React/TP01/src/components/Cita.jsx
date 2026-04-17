import "./Cita.css";

function Cita({ cita, index, eliminarCita }) {
  const handleEliminar = () => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta cita?");
    if (confirmar) {
      eliminarCita(index);
    }
  };

  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {cita.mascota}</p>
      <p><strong>Dueño:</strong> {cita.duenio}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>

      <button onClick={handleEliminar}>
        ELIMINAR ×
      </button>
    </div>
  );
}

export default Cita;