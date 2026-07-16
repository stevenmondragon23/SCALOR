export default function CourseStructure() {
  return (
    <section className="border-b border-brass/15 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Estructura de cada curso
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
          Todo curso se divide en dos tramos
        </h1>

        <div className="relative mt-12 grid overflow-hidden border border-brass/20 md:grid-cols-2">
          <div className="bg-ledger px-8 py-12 text-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-brass-light">
              Tramo 1 · La Ciencia
            </p>
            <p className="mt-4 font-display text-2xl font-medium">
              Comprender antes de decidir
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/75">
              Se entregan conceptos, datos, teoría, modelos y herramientas.
            </p>
          </div>
          <div className="bg-ink-soft px-8 py-12">
            <p className="font-mono text-xs uppercase tracking-widest text-brass-light">
              Tramo 2 · El Arte
            </p>
            <p className="mt-4 font-display text-2xl font-medium text-paper">
              Aplicar, liderar y operar
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              Se trabaja la aplicación, la decisión, la implementación y la
              mejora: casos, criterios, decisiones, procesos y mejora.
            </p>
          </div>
          <div className="stitch-line pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block" />
        </div>

        <div className="mt-8 border-l-2 border-brass bg-ink-soft/60 p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-paper/50">
            Producto educativo mínimo
          </p>
          <p className="mt-2 leading-relaxed text-paper/70">
            No entregamos solo videos. Cada curso incluye clases, plantillas,
            ejercicios, casos, evaluación breve y un entregable aplicado — la
            educación debe poder demostrarse en una decisión o herramienta
            concreta.
          </p>
        </div>
      </div>
    </section>
  );
}
