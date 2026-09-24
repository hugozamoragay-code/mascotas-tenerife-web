import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Ui";

const titulo = "Política de cookies | Mascotas Tenerife";
const descripcion =
  "Uso de cookies en el sitio web de Mascotas Tenerife, tienda y peluquería en Santa Cruz de Tenerife.";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de cookies"
        intro="Qué cookies utiliza esta web y qué servicios externos se cargan."
      />
      <Section>
        <div className="glass max-w-3xl space-y-5 rounded-3xl p-7 text-sm text-muted-foreground">
          <p className="rounded-xl border border-border bg-card p-3 text-xs">
            Texto base pendiente de revisión profesional antes de publicar.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Cookies propias</h2>
            <p className="mt-2">
              Esta web no utiliza cookies propias de análisis, publicidad ni seguimiento.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Servicios externos</h2>
            <p className="mt-2">
              Se cargan dos servicios de terceros que pueden instalar cookies o tecnologías
              similares en tu navegador:
            </p>
            <ul className="mt-2 grid gap-1">
              <li>· Google Maps, para mostrar el mapa de la tienda.</li>
              <li>· Google Fonts, para las tipografías del sitio.</li>
            </ul>
            <p className="mt-2">
              Si se añaden herramientas de analítica o publicidad, habrá que implementar un
              sistema de consentimiento previo antes de cargarlas.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Cómo gestionarlas</h2>
            <p className="mt-2">
              Puedes bloquear o eliminar las cookies desde la configuración de tu navegador.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
