import { useState } from "react";
import "./Formulario.css";

function Formulario({ agregarCita }) {
  const [form, setForm] = useState({
    mascota: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita(form);

    setForm({
      mascota: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>CREAR MI CITA</h2>

      <input name="mascota" value={form.mascota} onChange={handleChange} placeholder="Nombre Mascota" />
      <input name="duenio" value={form.duenio} onChange={handleChange} placeholder="Nombre dueño" />
      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
      <input type="time" name="hora" value={form.hora} onChange={handleChange} />
      <textarea name="sintomas" value={form.sintomas} onChange={handleChange} placeholder="Síntomas"></textarea>

      <button type="submit">AGREGAR CITA</button>
    </form>
  );
}

export default Formulario;