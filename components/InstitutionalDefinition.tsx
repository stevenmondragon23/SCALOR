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
    <section id="que-es" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
              01 — Definición institucional
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Criterio administrativo,
              <br />
              no motivación pasajera
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-ink-soft">
              SCALOR ACADEMY es la línea formativa de SCALOR. Su función es
              desarrollar criterio administrativo mediante una ruta progresiva
              de aprendizaje en administración, contabilidad, economía,
              finanzas, estrategia, operaciones, liderazgo, datos y ética.
            </p>

            <div className="border border-ink/15 bg-paper-dim p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ledger">
                Denominación recomendada
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                <span className="font-display italic text-ink">
                  “Escuela de Administración Aplicada.”
                </span>{" "}
                Internamente puede aspirar a funcionar como una universidad
                moderna de administración, contabilidad y economía aplicada;
                públicamente debe evitar presentarse como universidad formal
                sin las autorizaciones correspondientes. En el caso peruano,
                SUNEDU exige licenciamiento institucional para universidades,
                lo que requiere demostrar condiciones básicas de calidad. Por
                ello, SCALOR ACADEMY se posiciona inicialmente como escuela,
                academia o plataforma de formación privada.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ledger">
                Inspiración internacional
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                La estructura curricular se inspira en la lógica de escuelas
                de negocios reconocidas internacionalmente, sin pretender
                copiarlas:
              </p>
              <dl className="mt-4 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2">
                {references.map((r) => (
                  <div key={r.school} className="bg-paper p-5">
                    <dt className="font-display text-base font-semibold text-ink">
                      {r.school}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {r.note}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 border-l-2 border-brass pl-4 font-display italic text-ink-soft">
                La lección central es clara: la educación empresarial seria no
                se basa en motivación, sino en fundamentos, aplicación,
                liderazgo, datos, estrategia y evaluación de resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
