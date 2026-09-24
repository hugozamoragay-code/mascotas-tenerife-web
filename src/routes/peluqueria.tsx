import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CallCta, SectionTitle } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";
import gatoAsset from "@/assets/peluqueria-gato.png.asset.json";
import perroAsset from "@/assets/peluqueria-perro-shiba.png.asset.json";

const gato = gatoAsset.url;
const perro = perroAsset.url;

const titulo = "Peluquería canina y felina en Santa Cruz de Tenerife | Mascotas Tenerife";
const descripcion =
  "Peluquería para perros y gatos en Santa Cruz de Tenerife: baño, corte, secado y cepillado. Pide cita en el 922 59 59 92.";

export const Route = createFileRoute("/peluqueria")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Peluqueria,
});

function Peluqueria() {
  return (
    <>
      <PageHeader
        eyebrow="Peluquería"
        title="Cuidados y peluquería para tu mascota"
        intro="Atendemos a perros y gatos con calma y sin prisas. El servicio se realiza en nuestro local de Santa Cruz de Tenerife, con cita previa por teléfono."
      />

      <Section>
        <div className="glass grid gap-6 rounded-3xl p-7 lg:grid-cols-2">
          <img
            src={gato}
            alt="Gato recién arreglado en la peluquería de Mascotas Tenerife"
            loading="lazy"
            width={816}
            height={816}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold">Qué incluye el servicio</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>· Baño y secado</li>
              <li>· Corte y arreglo del pelaje</li>
              <li>· Cepillado y desenredado</li>
              <li>· Higiene general</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              El detalle del trabajo depende de cada animal, su pelaje y su carácter. Lo
              valoramos contigo antes de empezar.
            </p>
            <p className="mt-4 rounded-xl border border-border bg-card p-3 text-xs text-muted-foreground">
              Tratamientos específicos y precios: información por confirmar con el negocio
              antes de publicarlos.
            </p>
            <div className="mt-6">
              <CallCta text="Llamar para pedir cita" secondary={{ to: "/contacto", label: "Solicitar información" }} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle title="Cómo pedir cita" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <p className="font-display text-lg font-semibold">1. Llámanos</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Marca el {NEGOCIO.telefonoTexto} en horario de tienda y nos cuentas qué necesita
              tu mascota.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="font-display text-lg font-semibold">2. Reservamos hueco</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Acordamos día y hora según la disponibilidad de la peluquería.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="font-display text-lg font-semibold">3. Nos vemos en la tienda</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {NEGOCIO.calle}, {NEGOCIO.cp} {NEGOCIO.ciudad}.
            </p>
          </div>
        </div>
        <img
          src={perro}
          alt="Perro después de retirar el pelo suelto en la peluquería de Mascotas Tenerife"
          loading="lazy"
          width={816}
          height={816}
          className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover"
        />
      </Section>
    </>
  );
}
