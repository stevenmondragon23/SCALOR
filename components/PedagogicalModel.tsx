import {
  classStructure,
  evaluationComponents,
  levels,
  qualityStandards,
} from "@/data/curriculum";

export default function PedagogicalModel() {
  return (
    <section id="modelo" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          05 — Modelo pedagógico, evaluación y calidad
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Se enseña para decidir, no solo para memorizar
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          La educación empresarial de SCALOR une teoría fundamental,
          aplicación práctica y reflexión de criterio.
        </p>

        {/* 10.2 Estructura de la clase */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-widest text-ledger">
            Estructura estándar de cada clase
          </p>
          <ol className="mt-5 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-5">
            {classStructure.map((step, i) => (
              <li key={step.title} className="bg-paper p-5">
                <p className="font-mono text-2xl font-semibold tabular-code text-brass">
                  {i + 1}
                </p>
                <p className="mt-3 font-display text-base font-semibold text-ink">
                  {step.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* 10.3 Evaluación */}
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ledger">
            Evaluación
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            No se evalúa únicamente con exámenes: cada curso combina prueba
            breve, caso práctico, herramienta aplicada, decisión justificada
            y entregable final.
          </p>
          <div className="mt-6 overflow-x-auto border border-ink/15">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/15 bg-ink text-paper">
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-widest">
                    Componente
                  </th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-widest">
                    Qué evalúa
                  </th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-widest">
                    Ejemplo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {evaluationComponents.map((row) => (
                  <tr key={row.component} className="even:bg-paper-dim/50">
                    <td className="px-5 py-4 font-semibold text-ink">
                      {row.component}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">
                      {row.evaluates}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 10.4 Certificaciones internas */}
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ledger">
            Certificaciones internas
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Mientras SCALOR ACADEMY no sea una institución universitaria
            licenciada, emite certificados privados de participación,
            finalización o competencia interna, enfocados en formación
            aplicada y no en grados oficiales.
          </p>
          <div className="mt-6 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-4">
            {levels.map((level) => (
              <div key={level.id} className="bg-paper p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-brass">
                  {level.name}
                </p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-ink">
                  {level.certificado}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 10.5 y 10.6 */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ledger">
              Estándares de calidad internos
            </p>
            <dl className="mt-5 space-y-4">
              {qualityStandards.map((q) => (
                <div key={q.label} className="flex gap-4">
                  <dt className="w-28 shrink-0 font-mono text-xs uppercase tracking-widest text-brass">
                    {q.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">
                    {q.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="border-l-2 border-brass bg-paper-dim/60 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-soft/70">
              Referencia de calidad internacional
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              SCALOR ACADEMY no busca imitar formalmente una acreditación
              internacional en esta etapa, pero sí adopta principios de
              calidad de la educación empresarial global: misión clara,
              resultados de aprendizaje, mejora continua, impacto, pensamiento
              aplicado, rigor académico y vínculo con la realidad — coherente
              con la orientación de AACSB hacia estándares basados en
              resultados, misión, calidad e impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
