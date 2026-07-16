import { levels } from "@/data/curriculum";

export default function LevelsArchitecture() {
  return (
    <section className="bg-ledger text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Arquitectura por niveles
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
          Cuatro etapas empresariales, un mismo criterio
        </h2>

        <div className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
          {levels.map((level, i) => (
            <div
              key={level.id}
              className="grid gap-4 py-8 sm:grid-cols-[80px_1fr_1fr_1fr_1fr] sm:items-start sm:gap-6"
            >
              <p className="font-mono text-3xl font-semibold tabular-code text-brass-light">
                {String(i).padStart(2, "0")}
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                  Nivel
                </p>
                <p className="mt-1 font-display text-xl font-semibold">
                  {level.name}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                  Etapa empresarial
                </p>
                <p className="mt-1 text-sm leading-relaxed text-paper/85">
                  {level.etapa}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                  Propósito central
                </p>
                <p className="mt-1 text-sm leading-relaxed text-paper/85">
                  {level.proposito}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                  Resultado esperado
                </p>
                <p className="mt-1 text-sm leading-relaxed text-paper/85">
                  {level.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
