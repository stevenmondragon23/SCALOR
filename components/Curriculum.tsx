"use client";

import { useState } from "react";
import { levels } from "@/data/curriculum";

export default function Curriculum() {
  const [activeId, setActiveId] = useState(levels[0].id);
  const active = levels.find((l) => l.id === activeId) ?? levels[0];
  const activeIndex = levels.findIndex((l) => l.id === activeId);

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Malla curricular
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
          51 cursos, un mapa estratégico de largo plazo
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/60">
          Contenido provisional, sujeto a edición: la malla completa no debe
          producirse toda de inmediato, pero sí existir como ruta integral
          que orienta la construcción gradual.
        </p>

        {/* Pestañas tipo separador de libro contable */}
        <div className="mt-10 flex flex-wrap border-b border-brass/20">
          {levels.map((level, i) => {
            const isActive = level.id === activeId;
            return (
              <button
                key={level.id}
                onClick={() => setActiveId(level.id)}
                className={`relative -mb-px flex items-center gap-3 border border-b-0 px-5 py-4 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "border-brass/20 bg-ledger text-paper"
                    : "border-transparent text-paper/50 hover:text-paper"
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

        <div className="border border-brass/20 border-t-0 bg-ink-soft/40 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 border-b border-brass/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                Enfoque del nivel {String(activeIndex).padStart(2, "0")}
              </p>
              <p className="mt-1 font-display text-xl text-paper">
                {active.enfoque}
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-brass-light">
              Certificado: {active.certificado}
            </p>
          </div>

          <ol className="mt-6 divide-y divide-brass/10">
            {active.courses.map((course) => (
              <li
                key={course.code}
                className="grid gap-2 py-5 sm:grid-cols-[64px_1.2fr_1.6fr_1.2fr] sm:items-start sm:gap-6"
              >
                <p className="font-mono text-sm font-semibold tabular-code text-brass-light">
                  {course.code}
                </p>
                <p className="font-display text-base font-semibold leading-snug text-paper">
                  {course.name}
                </p>
                <p className="text-sm leading-relaxed text-paper/60">
                  {course.content}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-brass-light">
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
