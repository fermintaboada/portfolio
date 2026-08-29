import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <div className="shell py-32">
        <p className="label">404</p>
        <h1 className="font-display-tight mt-4 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-tight text-ink">
          Esta página no existe.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.12em] text-correction hover:underline"
        >
          ← Volver al índice
        </Link>
      </div>
    </main>
  );
}
