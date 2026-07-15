import { totalCourses } from "@/data/curriculum";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="grid-paper-bg absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-0 px-6 pb-0 pt-16 sm:px-10 sm:pt-24 md:grid-cols-2">
        {/* Columna Ciencia */}
        <div className="relative flex flex-col justify-between border border-ink/15 bg-ink px-8 py-10 text-paper sm:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
            La Ciencia
          </p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
            Escuela de
            <br />
            Administración
            <br />
            Aplicada
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/75">
            Una ruta progresiva de aprendizaje en administración, contabilidad,
            economía, finanzas, estrategia, operaciones, liderazgo, datos y
            ética.
          </p>
        </div>

        {/* Columna Arte */}
        <div className="relative flex flex-col justify-between border border-l-0 border-ink/15 bg-paper-dim px-8 py-10 sm:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ledger">
            El Arte
          </p>
          <div className="mt-6 space-y-4 font-display text-2xl italic leading-snug text-ink-soft sm:text-3xl">
            <p>Impulsar ideas.</p>
            <p>Ordenar negocios.</p>
            <p>Dirigir con criterio.</p>
          </div>
          <div className="mt-8 flex items-end justify-between gap-4 border-t border-ink/15 pt-6">
            <div>
              <p className="font-mono text-4xl font-semibold tabular-code text-ink">
                {totalCourses}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft/70">
                Cursos en 4 niveles
              </p>
            </div>
            <a
              href="#malla"
              className="rounded-none border border-ink px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Ver la malla ↓
            </a>
          </div>
        </div>

        {/* Costura central */}
        <div className="stitch-line pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block" />
      </div>

      <div className="mx-auto max-w-6xl border-x border-b border-ink/15 px-6 py-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft/70">
          SCALOR ACADEMY — línea formativa de SCALOR · Perú
        </p>
      </div>
    </section>
  );
}
