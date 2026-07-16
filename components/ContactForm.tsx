"use client";

import { useState } from "react";
import { levels } from "@/data/curriculum";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Formulario de muestra: todavía no está conectado a ningún backend.
    // Cuando quieras que envíe datos de verdad, aquí se agregaría la
    // llamada a una API o a un servicio como Formspree/Resend.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-brass/25 bg-ink-soft p-8 text-center">
        <p className="font-display text-xl text-paper">
          ¡Gracias! Te contactaremos pronto.
        </p>
        <p className="mt-2 text-sm text-paper/60">
          (Este es un formulario de muestra — todavía no envía datos a
          ningún lado.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
            Nombre
          </span>
          <input
            type="text"
            required
            placeholder="Tu nombre"
            className="mt-2 w-full border border-brass/25 bg-ink-soft px-4 py-3 text-paper placeholder:text-paper/30 focus:border-brass"
          />
        </label>
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
            Correo
          </span>
          <input
            type="email"
            required
            placeholder="tucorreo@ejemplo.com"
            className="mt-2 w-full border border-brass/25 bg-ink-soft px-4 py-3 text-paper placeholder:text-paper/30 focus:border-brass"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
          Nivel de interés
        </span>
        <select className="mt-2 w-full border border-brass/25 bg-ink-soft px-4 py-3 text-paper focus:border-brass">
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name} — {level.etapa}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-paper/60">
          Mensaje
        </span>
        <textarea
          rows={4}
          placeholder="Cuéntanos sobre tu negocio o lo que buscas aprender"
          className="mt-2 w-full border border-brass/25 bg-ink-soft px-4 py-3 text-paper placeholder:text-paper/30 focus:border-brass"
        />
      </label>

      <button
        type="submit"
        className="mt-2 border border-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-brass hover:text-ink"
      >
        Quiero inscribirme →
      </button>
    </form>
  );
}
