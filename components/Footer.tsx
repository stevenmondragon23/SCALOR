import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="h-8 w-[140px] relative">
              <Image
                src="/logo.png"
                alt="SCALOR"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-md font-display text-xl italic text-paper/85">
              La ciencia da fundamento. El arte da criterio.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-xs uppercase tracking-widest text-paper/60 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 max-w-sm text-xs leading-relaxed text-paper/50">
          SCALOR ACADEMY es una escuela y plataforma de formación privada en
          administración aplicada. No opera como universidad licenciada.
        </p>
        <div className="stitch-line-horizontal mt-10 h-px w-full" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-paper/40">
          © {new Date().getFullYear()} SCALOR ACADEMY
        </p>
      </div>
    </footer>
  );
}
