const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#niveles", label: "Niveles" },
  { href: "#metodo", label: "Método" },
  { href: "#malla", label: "Malla" },
  { href: "#modelo", label: "Modelo" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-[0.2em] text-ink"
        >
          SCALOR<span className="text-brass">/</span>ACADEMY
        </a>
        <nav className="hidden gap-1 sm:flex">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
            >
              <span className="mr-1 text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
