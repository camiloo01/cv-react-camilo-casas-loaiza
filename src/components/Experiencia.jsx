export default function Experiencia() {
    const experiencias = [
        {
        cargo: "Desarrollador Front-End Jr.",
        empresa: "Empresa Ejemplo S.A.",
        año: "2024",
        descripcion: "Desarrollo de interfaces con React, integración con APIs y optimización de performance."
        },
        {
        cargo: "Practicante de Desarrollo Web",
        empresa: "Startup XYZ",
        año: "2023",
        descripcion: "Implementación de landing pages responsive y apoyo en testing de componentes."
        },
        {
        cargo: "Auxiliar TIC",
        empresa: "Institución Educativa ABC",
        año: "2022",
        descripcion: "Soporte técnico y pequeñas aplicaciones internas en JavaScript."
        },
        {
        cargo: "Proyecto Freelance - Portafolio",
        empresa: "Autónomo",
        año: "2021",
        descripcion: "Diseño e implementación de portafolios estáticos y dinámicos con HTML/CSS/JS."
        }
    ];

    return (
        <section>
        <h3>Experiencia Profesional</h3>
        <ul>
            {experiencias.map((e, i) => (
            <li key={i} className="experience-item">
                <strong>{e.cargo}</strong>
                <span>{e.empresa} — {e.año}</span>
                <p style={{marginTop:6}}>{e.descripcion}</p>
            </li>
            ))}
        </ul>
        </section>
    );
    }
