import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, NEGOCIO } from "@/lib/negocio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-6xl px-4 pt-4">
      <nav
        aria-label="Navegación principal"
        className="glass rounded-2xl px-4 py-3 sm:px-5"
      >
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Mascotas Tenerife, inicio">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-lg font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
              Mascotas Tenerife
            </span>
          </Link>

          <ul className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="transition-colors hover:text-brand-deep"
                  activeProps={{ className: "text-brand-deep font-semibold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${NEGOCIO.telefonoTel}`}
              className="hidden items-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {NEGOCIO.telefonoTexto}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-10 place-items-center rounded-xl border border-border bg-card text-ink transition-colors hover:bg-brand-soft lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="mt-3 grid gap-1 border-t border-border pt-3 text-sm font-medium lg:hidden">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-ink transition-colors hover:bg-brand-soft"
                  activeProps={{ className: "bg-brand-soft text-brand-deep" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
