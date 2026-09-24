import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";

const titulo = "Política de privacidad | Mascotas Tenerife";
const descripcion =
  "Cómo se tratan los datos personales que envías a Mascotas Tenerife a través del formulario de contacto.";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de privacidad"
        intro="Información sobre el tratamiento de los datos que nos facilitas al contactar con la tienda."
      />
      <Section>
        <div className="glass max-w-3xl space-y-5 rounded-3xl p-7 text-sm text-muted-foreground">
          <p className="rounded-xl border border-border bg-card p-3 text-xs">
            Texto base pendiente de completar con los datos fiscales del responsable y de
            revisar por un profesional antes de publicar.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Responsable</h2>
            <p className="mt-2">
              {NEGOCIO.nombre} · {NEGOCIO.calle}, {NEGOCIO.cp} {NEGOCIO.ciudad} ·{" "}
              {NEGOCIO.email}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Datos que tratamos</h2>
            <p className="mt-2">
              Únicamente los datos que nos envías voluntariamente: nombre, email, teléfono y
              el contenido de tu mensaje. El formulario de la web abre tu programa de correo,
              de modo que el mensaje se envía directamente a nuestro email y la web no
              almacena información.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Finalidad y base legal</h2>
            <p className="mt-2">
              Responder a tu consulta y, si procede, gestionar una cita de peluquería. La
              base legal es tu consentimiento al escribirnos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Conservación</h2>
            <p className="mt-2">
              Conservamos los mensajes el tiempo necesario para atender la consulta y cumplir
              las obligaciones legales aplicables.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Tus derechos</h2>
            <p className="mt-2">
              Puedes solicitar acceso, rectificación, supresión, limitación, portabilidad u
              oposición escribiendo a {NEGOCIO.email}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
