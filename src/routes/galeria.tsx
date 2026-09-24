import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Ui";
import perroShibaAsset from "@/assets/peluqueria-perro-shiba.png.asset.json";
import gatoAsset from "@/assets/peluqueria-gato.png.asset.json";
import canicheAsset from "@/assets/peluqueria-caniche.png.asset.json";
import alimentacionAsset from "@/assets/alimentacion-gosbi.png.asset.json";
import higiene from "@/assets/higiene.jpg";
import accesorios from "@/assets/accesorios.jpg";

const perroShiba = perroShibaAsset.url;
const gato = gatoAsset.url;
const caniche = canicheAsset.url;
const alimentacion = alimentacionAsset.url;

const titulo = "Galería | Mascotas Tenerife";
const descripcion =
  "Imágenes de peluquería, tienda y productos para mascotas de Mascotas Tenerife, en Santa Cruz de Tenerife.";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Galeria,
});

const imagenes = [
  { src: perroShiba, alt: "Perro después de retirar el pelo suelto en la peluquería" },
  { src: caniche, alt: "Caniche recién arreglado en Mascotas Tenerife" },
  { src: gato, alt: "Gato recién arreglado en Mascotas Tenerife" },
  { src: alimentacion, alt: "Selección de alimentación Gosbi disponible en la tienda" },
  { src: accesorios, alt: "Collares, correas, comederos y juguetes" },
  { src: higiene, alt: "Productos y utensilios de higiene para mascotas" },
];

function Galeria() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="Un vistazo al cuidado y a la tienda"
        intro="Trabajos realizados en nuestra peluquería y una muestra de los productos que encontrarás en la tienda."
      />
      <Section>
        <div className="columns-2 gap-4 md:columns-3 [&>img]:mb-4">
          {imagenes.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={816}
              height={816}
              className="w-full break-inside-avoid rounded-2xl object-cover"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
