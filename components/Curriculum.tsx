"use client";

import { useState } from "react";
import { levels } from "@/data/curriculum";

export default function Curriculum() {
  const [activeId, setActiveId] = useState(levels[0].id);
  const active = levels.find((l) => l.id === activeId) ?? levels[0];
  const activeIndex = levels.findIndex((l) => l.id === activeId);

  return (
    <section id="malla" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          04 — Malla curricular
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          51 cursos, un mapa estratégico de largo plazo
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          La malla completa no debe producirse toda de inmediato, pero sí
          existir como ruta integral que orienta la construcción gradual.
        </p>

        {/* Pestañas tipo separador de libro contable */}
        <div className="mt-10 flex flex-wrap border-b border-ink/20">
          {levels.map((level, i) => {
            const isActive = level.id === activeId;
            return (
              <button
                key={level.id}
                onClick={() => setActiveId(level.id)}
                className={`relative -mb-px flex items-center gap-3 border border-b-0 px-5 py-4 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "border-ink/20 bg-ink text-paper"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                <span
                  className={isActive ? "text-brass-light" : "text-brass"}
                >
                  {String(i).padStart(2, "0")}
                </span>
                {level.name}
                <span className="tabular-code text-[10px] opacity-60">
                  {level.cantidad}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border border-ink/20 border-t-0 bg-paper-dim/40 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 border-b border-ink/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft/70">
                Enfoque del nivel {String(activeIndex).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                {active.enfoque}
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ledger">
              Certificado: {active.certificado}
            </p>
          </div>

          <ol className="mt-6 divide-y divide-ink/10">
            {active.courses.map((course) => (
              <li
                key={course.code}
                className="grid gap-2 py-5 sm:grid-cols-[64px_1.2fr_1.6fr_1.2fr] sm:items-start sm:gap-6"
              >
                <p className="font-mono text-sm font-semibold tabular-code text-brass">
                  {course.code}
                </p>
                <p className="font-display text-base font-semibold leading-snug text-ink">
                  {course.name}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {course.content}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-ledger">
                  → {course.product}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
