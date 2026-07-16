import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Instagram } from "lucide-react";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

const socials = [
  { href: "mailto:hola@scalor.academy", label: "Correo", Icon: Mail },
  { href: "https://wa.me/51933569017", label: "WhatsApp", Icon: MessageCircle },
  { href: "https://www.instagram.com/scalorrrr?igsh=MTFxa3Y0MGcwbzh3Nw%3D%3D&utm_source=qr", label: "Instagram", Icon: Instagram },
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

          <div className="flex flex-col items-start gap-4 sm:items-end">
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
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-brass/25 text-paper/70 transition-colors hover:border-brass hover:bg-brass hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-sm text-xs leading-relaxed text-paper/40">
          SCALOR ACADEMY es una escuela y plataforma de formación privada en
          administración aplicada.
        </p>
        <div className="stitch-line-horizontal mt-10 h-px w-full" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-paper/40">
          © {new Date().getFullYear()} SCALOR ACADEMY
        </p>
      </div>
    </footer>
  );
}
