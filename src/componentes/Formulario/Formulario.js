import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [servicioInteres, setServicioInteres] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", {
      nombre,
      telefono,
      correo,
      servicioInteres,
    });
    const URL = `https://api.whatsapp.com/send?phone=3115946466&text=Hola mi nombre es, ${nombre}%20quiero%20conocer%20mas%20acerca%20de%20${servicioInteres}%20este%20es%20mi%20telefono%20${telefono}&source=&data=`;
    window.open(URL,"_blank")
  };

  return (
    <>
      <div className="imagen-izquierda">
        <img
          alt="Imagen de ejemplo"
          src={process.env.PUBLIC_URL + "/Assets/form_image.png"}
        />
      </div>
      <div className="texto-derecha">
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap"
          rel="stylesheet"
        ></link>
        <h2>EL LUGAR PERFECTO PARA TODO LO QUE NECESITAS.</h2>
        <h1>CONTACTANOS</h1>
        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo-formulario">
            <label htmlFor="nombre">Tu Nombre: </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="telefono">Tu Teléfono: </label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="correo">Tu Correo: </label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="campo-formulario">
            <label htmlFor="servicioInteres">¿Qué servicio te interesa? </label>
            <input
              id="servicioInteres"
              value={servicioInteres}
              onChange={(e) => setServicioInteres(e.target.value)}
              required
            />
          </div>
          <div className="btn-enviar">
            <link
              href="https://fonts.googleapis.com/css2?family=Montagu+Slab&display=swap"
              rel="stylesheet"
            ></link>
            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
