import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — SCALOR ACADEMY",
};

const channels = [
  {
    label: "Correo",
    value: "hola@scalor.academy",
    href: "mailto:hola@scalor.academy",
  },
  {
    label: "WhatsApp",
    value: "+51 900 000 000",
    href: "https://wa.me/51900000000",
  },
  {
    label: "Instagram",
    value: "@scalor.academy",
    href: "https://instagram.com",
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-ink">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Contacto
        </p>
        <h1 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
          Hablemos de tu negocio
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/60">
          Datos de contacto provisionales — reemplázalos por los reales de
          SCALOR cuando los tengas listos, en{" "}
          <code className="text-brass-light">app/contacto/page.tsx</code>.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden border border-brass/20 bg-brass/10 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-ink-soft p-6 transition-colors hover:bg-ledger"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-brass-light">
                {c.label}
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-paper">
                {c.value}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-brass-light opacity-0 transition-opacity group-hover:opacity-100">
                Escribir →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
