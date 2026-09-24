import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, PawPrint, ShoppingBag, Phone, MapPin } from "lucide-react";
import { NEGOCIO } from "@/lib/negocio";
import { Section, SectionTitle, Stars } from "@/components/site/Ui";
import fachadaAsset from "@/assets/fachada-mascotas-tenerife.png.asset.json";
import perroShibaAsset from "@/assets/peluqueria-perro-shiba.png.asset.json";
import gatoAsset from "@/assets/peluqueria-gato.png.asset.json";
import canicheAsset from "@/assets/peluqueria-caniche.png.asset.json";
import alimentacionAsset from "@/assets/alimentacion-gosbi.png.asset.json";

const fachada = fachadaAsset.url;
const perroShiba = perroShibaAsset.url;
const gato = gatoAsset.url;
const caniche = canicheAsset.url;
const alimentacion = alimentacionAsset.url;

const titulo = "Mascotas Tenerife | Tienda y peluquería en Santa Cruz de Tenerife";
const descripcion =
  "Tienda de mascotas y peluquería canina y felina en C. Álvaro Rodríguez López 16, Santa Cruz de Tenerife. Alimentación, higiene y accesorios. Llama al 922 59 59 92.";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PetStore"],
  name: NEGOCIO.nombre,
  description: NEGOCIO.descripcion,
  telephone: NEGOCIO.telefonoTexto,
  email: NEGOCIO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NEGOCIO.calle,
    postalCode: NEGOCIO.cp,
    addressLocality: NEGOCIO.ciudad,
    addressRegion: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: NEGOCIO.numResenas,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "20:30",
    },
  ],
  sameAs: [NEGOCIO.instagram, NEGOCIO.facebook, NEGOCIO.webActual],
  paymentAccepted: "Efectivo, tarjeta",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      {/* HERO */}
      <Section className="pb-8 pt-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rise-in">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-brand-deep">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Santa Cruz de Tenerife
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Todo para el cuidado de tu mascota, <span className="text-brand">a mano</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Tienda de alimentación, higiene y accesorios, con servicio de peluquería para
              perros y gatos en el centro de Santa Cruz de Tenerife.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${NEGOCIO.telefonoTel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glass)] transition-colors hover:bg-brand-deep"
              >
                <Phone className="size-4" aria-hidden="true" />
                Llamar ahora
              </a>
              <Link
                to="/servicios"
                className="glass rounded-xl px-6 py-3 font-semibold text-ink transition-colors hover:bg-brand-soft"
              >
                Ver servicios
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <Stars />
                <div className="text-sm font-semibold">{NEGOCIO.valoracion} / 5</div>
                <div className="text-sm text-muted-foreground">
                  {NEGOCIO.numResenas} reseñas en Google
                </div>
              </div>
              <div className="hidden h-10 w-px bg-border sm:block" />
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-ink">{NEGOCIO.horario.dias}</div>
                <div>{NEGOCIO.horario.laborables}</div>
                <div>Domingo cerrado</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-3 shadow-[var(--shadow-card)]">
              <img
                src={fachada}
                alt="Fachada de la tienda y peluquería Mascotas Tenerife en Santa Cruz de Tenerife"
                width={456}
                height={527}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 sm:-left-5">
              <div className="text-xs font-semibold text-muted-foreground">Peluquería</div>
              <div className="font-display text-lg font-semibold text-brand-deep">
                Para animales
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section id="servicios">
        <SectionTitle title="Servicios" aside="Todo en un mismo sitio" />
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/peluqueria"
            className="glass rounded-2xl p-6 transition-colors hover:bg-brand-soft"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand-deep">
              <Scissors className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">Peluquería</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Baño, corte y cepillado para perros y gatos. Pide cita por teléfono.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-deep">
              Ver peluquería →
            </span>
          </Link>
          <Link
            to="/tienda"
            className="glass rounded-2xl p-6 transition-colors hover:bg-brand-soft"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
              <ShoppingBag className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">Alimentación</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piensos y comida húmeda de marcas conocidas, con asesoramiento en tienda.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-deep">
              Ver tienda →
            </span>
          </Link>
          <Link
            to="/servicios"
            className="glass rounded-2xl p-6 transition-colors hover:bg-brand-soft"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand-deep">
              <PawPrint className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">Higiene y accesorios</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Productos de higiene, correas, comederos, camas y juguetes.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-deep">
              Ver servicios →
            </span>
          </Link>
        </div>
      </Section>

      {/* TIENDA */}
      <Section id="tienda">
        <div className="glass rounded-3xl p-7">
          <SectionTitle title="Tienda" aside="Marcas y categorías" />
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Marcas
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {NEGOCIO.marcas.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Marcas recogidas en directorios públicos. Conviene confirmar la
                disponibilidad actual antes de publicar la web.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Categorías
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {["Alimentación", "Higiene", "Accesorios", "Peluquería"].map((c) => (
                  <span
                    key={c}
                    className="rounded-xl border border-border bg-card px-3 py-2 text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GALERÍA */}
      <Section id="galeria">
        <SectionTitle title="Galería" aside="Fotos reales" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: caniche, alt: "Caniche recién cortado y cepillado en Mascotas Tenerife" },
            { src: gato, alt: "Gato recién arreglado en la peluquería de Mascotas Tenerife" },
            { src: alimentacion, alt: "Variedad de alimentación Gosbi disponible en la tienda" },
            { src: perroShiba, alt: "Perro tras retirar el pelo suelto en la peluquería" },
          ].map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={816}
              height={816}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          ))}
        </div>
        <div className="mt-5">
          <Link
            to="/galeria"
            className="glass inline-block rounded-xl px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft"
          >
            Ver galería completa
          </Link>
        </div>
      </Section>

      {/* CONFIANZA */}
      <Section>
        <div className="glass rounded-3xl px-7 py-10 text-center">
          <Stars className="text-2xl" />
          <p className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            {NEGOCIO.valoracion} de 5 en Google
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Valoración pública basada en {NEGOCIO.numResenas} reseñas de clientes.
          </p>
          <a
            href={NEGOCIO.resenasUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-block rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep"
          >
            Ver todas las reseñas
          </a>
        </div>
      </Section>

      {/* UBICACIÓN */}
      <Section id="visitanos">
        <div className="glass rounded-3xl p-7">
          <SectionTitle title="Ven a visitarnos" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <address className="not-italic text-muted-foreground">
                {NEGOCIO.calle}
                <br />
                {NEGOCIO.cp} {NEGOCIO.ciudad}
              </address>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="font-semibold">Lunes a sábado</div>
                  <div className="text-muted-foreground">{NEGOCIO.horario.laborables}</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="font-semibold">Domingo</div>
                  <div className="text-muted-foreground">Cerrado</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${NEGOCIO.telefonoTel}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep"
                >
                  <Phone className="size-4" aria-hidden="true" /> {NEGOCIO.telefonoTexto}
                </a>
                <a
                  href={NEGOCIO.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  <MapPin className="size-4" aria-hidden="true" /> Cómo llegar
                </a>
              </div>
            </div>
            <iframe
              title="Mapa de Mascotas Tenerife en Santa Cruz de Tenerife"
              src={NEGOCIO.mapaEmbed}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-2xl border border-border"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
