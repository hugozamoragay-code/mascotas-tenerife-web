import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal-layout";

export const metadata: Metadata = pageMetadata({
  title: "Política de cookies",
  description: "Información sobre cookies, servicios de terceros y el mapa de Google en la web de Mascotas Tenerife.",
  path: "/politica-de-cookies/",
});

export default function CookiesPage() {
  return (
    <LegalPage path="/politica-de-cookies/" breadcrumb="Política de cookies" title="Política de cookies" lead="Qué tecnologías utiliza esta web y cuándo se conectan servicios externos.">
      <p className="legal-updated">Contenido correspondiente a la versión actual del sitio; debe revisarse si se incorporan nuevas herramientas.</p>

      <h2>1. Cookies propias</h2>
      <p>La versión actual del sitio no instala cookies propias de analítica o publicidad y no requiere una cuenta de usuario. La navegación, el menú y el formulario no utilizan cookies para seguimiento.</p>

      <h2>2. Mapa de Google</h2>
      <p>El mapa no se carga automáticamente. Antes de mostrarlo se presenta una vista local y un botón para cargar Google Maps. Solo cuando la persona pulsa ese botón se solicita el contenido externo; Google puede recibir información técnica del navegador y aplicar sus propias tecnologías, cookies y condiciones.</p>
      <p>También es posible abrir la ubicación directamente en Google Maps mediante un enlace. Esa acción lleva a un servicio externo y se rige por la información de privacidad y cookies de Google.</p>

      <h2>3. Perfiles sociales y enlaces externos</h2>
      <p>Instagram y Facebook se ofrecen como enlaces, no como widgets incrustados. La visita a esos perfiles se realiza en los sitios de sus respectivos proveedores.</p>

      <h2>4. Cómo gestionar tecnologías del navegador</h2>
      <p>El navegador permite bloquear o eliminar cookies desde su configuración. Si se bloquea el contenido externo, la dirección y el teléfono siguen disponibles y se puede abrir Google Maps en una pestaña aparte.</p>

      <h2>5. Cambios</h2>
      <p>Si en el futuro se incorporan herramientas de analítica, publicidad o contenido de terceros que se cargue automáticamente, esta política deberá actualizarse y revisarse antes de activar esas herramientas.</p>
    </LegalPage>
  );
}
