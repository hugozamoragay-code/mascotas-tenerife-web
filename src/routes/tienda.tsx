import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CallCta, SectionTitle } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";
import alimentacionAsset from "@/assets/alimentacion-gosbi.png.asset.json";
import accesorios from "@/assets/accesorios.jpg";

const alimentacion = alimentacionAsset.url;

const titulo = "Tienda de mascotas en Santa Cruz de Tenerife | Mascotas Tenerife";
const descripcion =
  "Alimentación, higiene y accesorios para perros, gatos y otros animales de compañía en Santa Cruz de Tenerife. Ven a visitarnos o llámanos.";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Tienda,
});

const categorias = [
  {
    titulo: "Alimentación",
    texto: "Pienso y comida húmeda para perros, gatos, roedores, aves y tortugas.",
  },
  { titulo: "Higiene", texto: "Champús, cepillos y productos de limpieza y cuidado." },
  { titulo: "Accesorios", texto: "Correas, collares, comederos, camas y transportines." },
  { titulo: "Juguetes", texto: "Juguetes y premios para el día a día." },
];

function Tienda() {
  return (
    <>
      <PageHeader
        eyebrow="Tienda"
        title="Alimentación, higiene y accesorios"
        intro="Somos una tienda física: no vendemos online. Si buscas un producto concreto, llámanos y te decimos si lo tenemos disponible."
      />

      <Section>
        <div className="glass grid gap-6 rounded-3xl p-7 lg:grid-cols-2">
          <img
            src={alimentacion}
            alt="Selección de alimentación Gosbi disponible en Mascotas Tenerife"
            loading="lazy"
            width={816}
            height={816}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold">Categorías</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {categorias.map((c) => (
                <div key={c.titulo} className="rounded-xl border border-border bg-card p-4">
                  <p className="font-semibold">{c.titulo}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.texto}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CallCta text="Consultar por teléfono" secondary={{ to: "/contacto", label: "Cómo llegar" }} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle title="Marcas" aside="Según información pública" />
        <div className="flex flex-wrap gap-2">
          {NEGOCIO.marcas.map((m) => (
            <span
              key={m}
              className="glass rounded-full px-4 py-2 text-sm font-medium"
            >
              {m}
            </span>
          ))}
        </div>
        <p className="mt-3 max-w-2xl text-xs text-muted-foreground">
          Marcas citadas en directorios públicos del negocio. Disponibilidad actual por
          confirmar antes de publicar la web.
        </p>
        <img
          src={accesorios}
          alt="Estante con collares, correas, comederos y juguetes para mascotas"
          loading="lazy"
          width={816}
          height={816}
          className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover"
        />
        <div className="glass mt-8 rounded-3xl p-7">
          <h2 className="font-display text-2xl font-semibold">Ven a visitarnos</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {NEGOCIO.calle}, {NEGOCIO.cp} {NEGOCIO.ciudad}. {NEGOCIO.horario.dias},{" "}
            {NEGOCIO.horario.laborables}. Pago en efectivo o con tarjeta.
          </p>
          <div className="mt-5">
            <CallCta text={`Llamar al ${NEGOCIO.telefonoTexto}`} />
          </div>
        </div>
      </Section>
    </>
  );
}
