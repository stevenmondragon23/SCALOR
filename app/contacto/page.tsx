import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — SCALOR ACADEMY",
};

export default function ContactoPage() {
  return (
    <main className="bg-ink">
      <section className="mx-auto max-w-2xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Contacto
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
          Hablemos de tu negocio
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-paper/60">
          Cuéntanos en qué etapa está tu negocio y qué te gustaría aprender
          — te contactamos para ver qué nivel de SCALOR ACADEMY encaja
          contigo.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
