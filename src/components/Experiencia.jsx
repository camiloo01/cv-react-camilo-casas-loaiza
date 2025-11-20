export default function Experiencia({ listaExperiencia }) {
  
  if (listaExperiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {listaExperiencia.map(({ id, puesto, empresa, periodo }) => (
          <li key={id}>
            <strong>{puesto}</strong> - {empresa} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
