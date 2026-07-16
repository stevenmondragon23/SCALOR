const steps = [
  {
    letter: "S",
    word: "Situar",
    text: "Entendemos tu punto de partida antes de proponer nada.",
    question: "¿Qué está pasando realmente?",
  },
  {
    letter: "C",
    word: "Comprender",
    text: "Analizamos con datos, cifras y modelos — no con opiniones.",
    question: "¿Por qué está pasando?",
  },
  {
    letter: "A",
    word: "Aplicar",
    text: "Convertimos el conocimiento en algo que puedas usar en tu negocio.",
    question: "¿Cómo se aplica a tu caso?",
  },
  {
    letter: "L",
    word: "Liderar",
    text: "Te ayudamos a tomar la decisión, no solo a analizarla.",
    question: "¿Qué decisión conviene tomar?",
  },
  {
    letter: "O",
    word: "Operar",
    text: "La decisión se vuelve proceso, tarea y sistema.",
    question: "¿Cómo lo hacemos funcionar?",
  },
  {
    letter: "R",
    word: "Refinar",
    text: "Medimos, aprendemos y mejoramos con evidencia.",
    question: "¿Qué aprendimos?",
  },
];

export default function ScalorMethod() {
  return (
    <section className="border-b border-brass/15 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
          Cómo trabajamos
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
          El método SCALOR
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/60">
          Seis pasos, una sola palabra: cada letra de SCALOR es también un
          verbo de nuestro método.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden border border-brass/15 bg-brass/10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step) => (
            <div key={step.letter} className="bg-ledger p-5">
              <p className="font-display text-4xl font-bold text-brass-light">
                {step.letter}
              </p>
              <p className="mt-3 font-display text-base font-semibold text-paper">
                {step.word}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-paper/60">
                {step.text}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-brass-light">
                {step.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
