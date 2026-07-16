"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="block h-7 w-[110px] relative shrink-0"
        >
          <Image
            src="/logo.png"
            alt="SCALOR"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden gap-1 sm:flex">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              className={`nav-link px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                isActive(link.href)
                  ? "text-paper"
                  : "text-paper/60 hover:text-paper"
              }`}
            >
              <span className="mr-1 text-brass-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón hamburguesa: solo visible en móvil (se oculta en sm y más grande) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-brass/30 text-paper sm:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Panel del menú móvil: solo se renderiza en pantallas chicas, y solo si open=true */}
      {open && (
        <nav className="flex flex-col border-t border-brass/20 bg-ink sm:hidden">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 border-b border-brass/10 px-6 py-4 font-mono text-xs uppercase tracking-widest ${
                isActive(link.href) ? "bg-ledger text-paper" : "text-paper/70"
              }`}
            >
              <span className="text-brass-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
