"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brass/20 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Link href="/" className="block h-7 w-[110px] relative shrink-0">
          <Image
            src="/logo.png"
            alt="SCALOR"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden gap-1 sm:flex">
          {links.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive}
                className={`nav-link px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-paper" : "text-paper/60 hover:text-paper"
                }`}
              >
                <span className="mr-1 text-brass-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
