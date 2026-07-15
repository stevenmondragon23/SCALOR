import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
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
          <p className="max-w-sm text-xs leading-relaxed text-paper/50">
            SCALOR ACADEMY es una escuela y plataforma de formación privada en
            administración aplicada. No opera como universidad licenciada.
          </p>
        </div>
        <div className="stitch-line-horizontal mt-10 h-px w-full" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-paper/40">
          © {new Date().getFullYear()} SCALOR ACADEMY
        </p>
      </div>
    </footer>
  );
}
