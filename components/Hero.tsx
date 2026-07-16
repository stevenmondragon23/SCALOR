import Link from "next/link";
import { totalCourses } from "@/data/curriculum";

const nextSteps = [
  {
    href: "/nosotros",
    label: "Nosotros",
    text: "Qué es SCALOR ACADEMY y en qué se inspira.",
  },
  {
    href: "/programas",
    label: "Programas",
    text: "La malla completa: 51 cursos en 4 niveles.",
  },
  {
    href: "/metodologia",
    label: "Metodología",
    text: "Cómo se enseña, se evalúa y se certifica.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="grid-paper-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Columna de texto */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              SCALOR ACADEMY
            </p>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-5xl">
              La Ciencia y el Arte
              <br />
              de Administrar
            </h1>
            <p className="mt-4 max-w-lg font-display text-lg italic text-brass-light">
              Comprender con ciencia. Decidir con arte. Administrar con
              criterio.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70">
              Una ruta progresiva de aprendizaje en administración,
              contabilidad, economía, finanzas, estrategia, operaciones,
              liderazgo, datos y ética — para quien tiene una idea, un
              negocio, una pequeña empresa o una organización que dirigir.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/programas"
                className="border border-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-brass hover:text-ink"
              >
                Ver la malla · {totalCourses} cursos
              </Link>
              <Link
                href="/nosotros"
                className="nav-link px-2 py-3 font-mono text-xs uppercase tracking-widest text-paper/70 hover:text-paper"
              >
                Conoce SCALOR →
              </Link>
            </div>
          </div>

          {/* Columna del video, con niebla verde detrás */}
          <div className="relative">
            {/* Niebla: un blob verde muy difuminado, detrás del video */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 -z-10 bg-ledger opacity-60 blur-3xl"
            />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
              Video introductorio
            </p>
            <video
              controls
              preload="metadata"
              poster="/intro-poster.jpg"
              className="video-shadow relative mt-5 aspect-video w-full rounded-sm bg-black"
            >
              <source src="/intro.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>

        {/* Próximos pasos */}
        <div className="mt-20 grid gap-px overflow-hidden border border-brass/20 bg-brass/10 sm:grid-cols-3">
          {nextSteps.map((step, i) => (
            <Link
              key={step.href}
              href={step.href}
              className="group bg-ink-soft p-6 transition-colors hover:bg-ledger"
            >
              <p className="font-mono text-xs text-brass-light">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-paper">
                {step.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                {step.text}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-brass-light opacity-0 transition-opacity group-hover:opacity-100">
                Ver más →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
