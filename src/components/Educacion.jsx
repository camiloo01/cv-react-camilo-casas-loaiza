export default function Educacion({ estudios }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {estudios.map(({ id, titulo, universidad, periodo }) => (
          <li key={id}>
            <strong>{titulo}</strong> - {universidad} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
