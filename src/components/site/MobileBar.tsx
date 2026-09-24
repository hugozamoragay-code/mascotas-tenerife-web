import { NEGOCIO } from "@/lib/negocio";

export function MobileBar() {
  return (
    <div className="glass fixed inset-x-0 bottom-0 z-40 rounded-none md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${NEGOCIO.telefonoTel}`}
          className="rounded-xl bg-brand py-3 text-center font-semibold text-primary-foreground"
        >
          Llamar
        </a>
        <a
          href={NEGOCIO.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-xl bg-ink py-3 text-center font-semibold text-primary-foreground"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
