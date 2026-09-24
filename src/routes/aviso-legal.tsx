import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";

const titulo = "Aviso legal | Mascotas Tenerife";
const descripcion =
  "Información general y condiciones de uso del sitio web de Mascotas Tenerife, Santa Cruz de Tenerife.";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Aviso legal"
        intro="Información general sobre el titular del sitio y las condiciones de uso."
      />
      <Section>
        <div className="glass max-w-3xl space-y-5 rounded-3xl p-7 text-sm text-muted-foreground">
          <p className="rounded-xl border border-border bg-card p-3 text-xs">
            Este texto es una base de trabajo. Antes de publicar la web debe completarse con
            la razón social, el CIF/NIF y el domicilio fiscal del titular, y revisarse por un
            profesional. No constituye asesoramiento legal.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Titular del sitio</h2>
            <p className="mt-2">
              Nombre comercial: {NEGOCIO.nombre}
              <br />
              Domicilio: {NEGOCIO.calle}, {NEGOCIO.cp} {NEGOCIO.ciudad}
              <br />
              Teléfono: {NEGOCIO.telefonoTexto}
              <br />
              Email: {NEGOCIO.email}
              <br />
              Razón social y CIF/NIF: información por confirmar.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Objeto</h2>
            <p className="mt-2">
              Este sitio ofrece información sobre la tienda y los servicios de peluquería
              para mascotas. No es una tienda online y no permite realizar compras ni pagos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Uso del sitio</h2>
            <p className="mt-2">
              El usuario se compromete a utilizar el sitio de forma adecuada y a no emplear
              sus contenidos con fines ilícitos. La información puede actualizarse o
              modificarse sin previo aviso.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Propiedad intelectual</h2>
            <p className="mt-2">
              Los textos, imágenes y elementos gráficos del sitio pertenecen a sus
              respectivos titulares y no pueden reproducirse sin autorización.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
