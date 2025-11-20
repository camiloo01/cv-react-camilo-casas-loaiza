export default function CabeceraCV({ nombre, cargo, telefono, correo, ciudad }) {
  return (
    <header className="cv-header">
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>

      <div className="contact-list">
        <span>{telefono}</span>
        <span>{correo}</span>
        <span>{ciudad}</span>
      </div>
    </header>
  );
}
