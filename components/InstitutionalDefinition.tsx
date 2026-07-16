const references = [
  {
    school: "Harvard Business School",
    note: "Fundamentos amplios y aprendizaje inductivo.",
  },
  {
    school: "Wharton",
    note: "Núcleo riguroso de habilidades esenciales en administración.",
  },
  {
    school: "MIT Sloan",
    note: "Base común en liderazgo, economía y decisiones basadas en datos.",
  },
  {
    school: "AACSB",
    note: "Estándares orientados a resultados, misión, calidad e impacto.",
  },
];

export default function InstitutionalDefinition() {
  return (
    <section className="border-b border-brass/15 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              Quiénes somos
            </p>
            <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
              Criterio administrativo,
              <br />
              no motivación pasajera
            </h1>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-paper/75">
              SCALOR ACADEMY es la línea formativa de SCALOR: una escuela
              pensada para quien construye un negocio y necesita algo más
              sólido que inspiración — necesita criterio. Enseñamos
              administración, contabilidad, economía, finanzas, estrategia,
              operaciones, liderazgo, datos y ética como un solo cuerpo de
              conocimiento, aplicado a decisiones reales.
            </p>

            <div className="border border-brass/20 bg-ink-soft p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass-light">
                Cómo nos presentamos
              </p>
              <p className="mt-3 leading-relaxed text-paper/70">
                Nos llamamos{" "}
                <span className="font-display italic text-paper">
                  “Escuela de Administración Aplicada.”
                </span>{" "}
                Internamente aspiramos a funcionar como una universidad
                moderna de administración, contabilidad y economía aplicada;
                públicamente evitamos presentarnos como universidad formal
                sin las autorizaciones correspondientes. En Perú, SUNEDU
                exige licenciamiento institucional para universidades, lo que
                implica demostrar condiciones básicas de calidad. Por eso hoy
                nos posicionamos como escuela, academia y plataforma de
                formación privada — con la misma exigencia de fondo.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brass-light">
                En qué nos inspiramos
              </p>
              <p className="mt-3 leading-relaxed text-paper/70">
                Nuestra estructura curricular toma prestada la lógica de
                escuelas de negocios reconocidas internacionalmente, sin
                pretender copiarlas:
              </p>
              <dl className="mt-4 grid gap-px overflow-hidden border border-brass/15 bg-brass/10 sm:grid-cols-2">
                {references.map((r) => (
                  <div key={r.school} className="bg-ink-soft p-5">
                    <dt className="font-display text-base font-semibold text-paper">
                      {r.school}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-paper/60">
                      {r.note}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 border-l-2 border-brass pl-4 font-display italic text-paper/80">
                Nuestra convicción es simple: la educación empresarial seria
                no se basa en motivación, sino en fundamentos, aplicación,
                liderazgo, datos, estrategia y evaluación de resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
