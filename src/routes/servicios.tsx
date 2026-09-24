import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CallCta } from "@/components/site/Ui";
import gatoAsset from "@/assets/peluqueria-gato.png.asset.json";
import alimentacionAsset from "@/assets/alimentacion-gosbi.png.asset.json";
import higiene from "@/assets/higiene.jpg";
import accesorios from "@/assets/accesorios.jpg";

const gato = gatoAsset.url;
const tienda = alimentacionAsset.url;

const titulo = "Servicios | Mascotas Tenerife";
const descripcion =
  "Peluquería para perros y gatos, alimentación, productos de higiene y accesorios en Santa Cruz de Tenerife.";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Servicios,
});

const servicios = [
  {
    img: gato,
    titulo: "Peluquería para mascotas",
    texto:
      "Baño, corte, secado y cepillado para perros y gatos. Trabajamos con cita previa por teléfono.",
    cta: "Llamar para pedir cita",
  },
  {
    img: tienda,
    titulo: "Alimentación",
    texto:
      "Pienso y comida húmeda para perros, gatos y otros animales de compañía, con asesoramiento en tienda.",
    cta: "Consultar disponibilidad",
  },
  {
    img: higiene,
    titulo: "Higiene",
    texto:
      "Champús, cepillos y productos para el cuidado del pelaje y la limpieza del día a día.",
    cta: "Consultar",
  },
  {
    img: accesorios,
    titulo: "Accesorios",
    texto: "Correas, collares, comederos, camas, transportines y juguetes.",
    cta: "Consultar",
  },
];

function Servicios() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Lo que puedes resolver en una sola visita"
        intro="Tienda y peluquería en el mismo local, en C. Álvaro Rodríguez López 16. Si buscas algo concreto, llámanos y te confirmamos si lo tenemos."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {servicios.map((s) => (
            <article key={s.titulo} className="glass overflow-hidden rounded-2xl">
              <img
                src={s.img}
                alt={s.titulo}
                loading="lazy"
                width={816}
                height={816}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">{s.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>
                <div className="mt-5">
                  <CallCta text={s.cta} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
