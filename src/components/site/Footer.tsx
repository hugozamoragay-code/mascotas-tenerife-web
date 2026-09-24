import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import { NAV, NEGOCIO } from "@/lib/negocio";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-12 md:pb-12">
      <div className="glass rounded-3xl p-7">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-lg font-semibold">Mascotas Tenerife</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Tienda y peluquería para mascotas en Santa Cruz de Tenerife.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={NEGOCIO.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram de Mascotas Tenerife"
                className="grid size-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-brand-soft"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
              <a
                href={NEGOCIO.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook de Mascotas Tenerife"
                className="grid size-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-brand-soft"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
              <a
                href={NEGOCIO.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Ver ubicación en Google Maps"
                className="grid size-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-brand-soft"
              >
                <MapPin className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">Contacto</p>
            <address className="mt-3 not-italic">
              {NEGOCIO.calle}
              <br />
              {NEGOCIO.cp} {NEGOCIO.ciudad}
            </address>
            <p className="mt-2">
              <a href={`tel:${NEGOCIO.telefonoTel}`} className="hover:text-brand-deep">
                {NEGOCIO.telefonoTexto}
              </a>
            </p>
            <p>
              <a href={`mailto:${NEGOCIO.email}`} className="hover:text-brand-deep">
                {NEGOCIO.email}
              </a>
            </p>
            <p className="mt-3">
              {NEGOCIO.horario.dias}
              <br />
              {NEGOCIO.horario.laborables}
              <br />
              Domingo: {NEGOCIO.horario.domingo.toLowerCase()}
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">Páginas</p>
            <ul className="mt-3 grid gap-1.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-brand-deep">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mascotas Tenerife</p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link to="/aviso-legal" className="hover:text-brand-deep">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link to="/politica-privacidad" className="hover:text-brand-deep">
                Privacidad
              </Link>
            </li>
            <li>
              <Link to="/politica-cookies" className="hover:text-brand-deep">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
