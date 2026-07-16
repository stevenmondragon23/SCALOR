const benefits = [
  {
    title: "Fundamentos, no motivación",
    text: "Conceptos, datos y modelos reales de administración, contabilidad, economía y finanzas — no charlas motivacionales.",
  },
  {
    title: "Aplicación, no solo teoría",
    text: "Cada curso termina en una decisión, una plantilla o una herramienta que puedes usar en tu negocio esa misma semana.",
  },
  {
    title: "Una ruta, no cursos sueltos",
    text: "Avanzas por niveles según la etapa real de tu negocio: desde la idea hasta la dirección de una organización compleja.",
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
            <p className="mt-6 font-display text-lg italic leading-snug text-brass-light">
              “Comprender con ciencia.
              <br />
              Decidir con arte.
              <br />
              Administrar con criterio.”
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-paper/75">
              Muchas personas quieren emprender, pero pocas aprenden a
              administrar. Se habla de éxito antes que de procesos, de
              ingresos antes que de rentabilidad, de motivación antes que de
              estrategia. SCALOR ACADEMY existe para cambiar eso: formamos
              el criterio administrativo que sostiene un negocio cuando la
              pasión inicial ya no alcanza.
            </p>

            <p className="text-base leading-relaxed text-paper/60">
              No prometemos resultados automáticos ni fórmulas de éxito.
              Nuestra promesa es más seria: entregarte pensamiento, método,
              herramientas y criterio para que tomes mejores decisiones en
              tu negocio real.
            </p>

            <div className="grid gap-px overflow-hidden border border-brass/15 bg-brass/10 sm:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="bg-ink-soft p-6">
                  <p className="font-display text-base font-semibold text-paper">
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
