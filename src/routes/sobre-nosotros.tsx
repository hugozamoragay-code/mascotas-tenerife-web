import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CallCta, Stars } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";
import alimentacionAsset from "@/assets/alimentacion-gosbi.png.asset.json";

const alimentacion = alimentacionAsset.url;

const titulo = "Sobre nosotros | Mascotas Tenerife";
const descripcion =
  "Mascotas Tenerife es una tienda de mascotas con peluquería en Santa Cruz de Tenerife, en el barrio de Cabo Llanos - Tres de Mayo.";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: SobreNosotros,
});

function SobreNosotros() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nosotros"
        title="Una tienda de barrio para el cuidado de tu mascota"
        intro="Estamos en C. Álvaro Rodríguez López 16, en la zona de Cabo Llanos - Tres de Mayo, Santa Cruz de Tenerife. Vendemos alimentación, higiene y accesorios, y ofrecemos servicio de peluquería para perros y gatos."
      />

      <Section>
        <div className="glass grid gap-6 rounded-3xl p-7 lg:grid-cols-2">
          <img
            src={alimentacion}
            alt="Selección de alimentación para mascotas disponible en la tienda"
            loading="lazy"
            width={816}
            height={816}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="text-muted-foreground">
            <p>
              Atendemos a quien entra por la puerta con una idea sencilla: resolver lo que
              necesita su animal sin complicaciones. Alimentación para perros, gatos,
              roedores, aves y tortugas, productos de higiene, accesorios y peluquería en el
              mismo local.
            </p>
            <p className="mt-4">
              Trabajamos de lunes a sábado, con pausa al mediodía, y se puede pagar en
              efectivo o con tarjeta. Para pedidos por teléfono y recogida en tienda,
              consúltanos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Stars />
              <span className="text-sm">
                {NEGOCIO.valoracion} / 5 · {NEGOCIO.numResenas} reseñas en Google
              </span>
            </div>
            <p className="mt-6 rounded-xl border border-border bg-card p-3 text-xs">
              Historia, años de actividad y equipo: información por confirmar con el negocio.
            </p>
            <div className="mt-6">
              <CallCta text="Hablar con nosotros" secondary={{ to: "/contacto", label: "Contacto" }} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
