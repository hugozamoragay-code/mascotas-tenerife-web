import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal-layout";
import { BUSINESS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Aviso legal",
  description: "Información identificativa y condiciones de uso del sitio web de Mascotas Tenerife.",
  path: "/aviso-legal/",
});

export default function LegalNoticePage() {
  return (
    <LegalPage path="/aviso-legal/" breadcrumb="Aviso legal" title="Aviso legal" lead="Información de identificación y uso del sitio web de Mascotas Tenerife.">
      <p className="legal-updated">Los datos marcados para confirmación deben ser revisados y completados por el titular antes de la publicación definitiva.</p>
      <h2>1. Identificación del titular</h2>
      <dl className="legal-details">
        <div><dt>Nombre comercial</dt><dd>{BUSINESS.name}</dd></div>
        <div><dt>Razón social / titular legal</dt><dd>[Información por confirmar]</dd></div>
        <div><dt>NIF / CIF</dt><dd>[Información por confirmar]</dd></div>
        <div><dt>Domicilio de actividad publicado</dt><dd>{BUSINESS.addressFull}</dd></div>
        <div><dt>Teléfono</dt><dd><a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phoneDisplay}</a></dd></div>
        <div><dt>Email de contacto público</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
        <div><dt>Sitio web</dt><dd><a href={`${SITE_URL}/`}>{BUSINESS.websiteDisplay}</a></dd></div>
        <div><dt>Datos registrales</dt><dd>[Información por confirmar, si procede]</dd></div>
      </dl>

      <h2>2. Finalidad del sitio</h2>
      <p>Este sitio presenta información de contacto, ubicación, tienda de productos para animales de compañía y peluquería para mascotas. No ofrece compra online ni una reserva digital confirmada. La disponibilidad de artículos, los servicios concretos y el horario deben consultarse directamente con el negocio.</p>

      <h2>3. Uso de los contenidos y enlaces</h2>
      <p>El visitante se compromete a utilizar la información del sitio de forma adecuada. Los enlaces a Google Maps, Instagram, Facebook y otros sitios llevan a servicios de terceros con sus propias condiciones. Las fotografías de recurso se identifican y enlazan a sus páginas de origen; no representan el local ni al equipo de Mascotas Tenerife.</p>

      <h2>4. Exactitud y actualización</h2>
      <p>Los datos de actividad, contacto y dirección se han preparado a partir de información pública disponible. Horarios, disponibilidad de productos y otros datos sujetos a cambios deben confirmarse antes de acudir. El titular debe revisar este contenido y completar la identificación jurídica que falta.</p>

      <h2>5. Contacto sobre este aviso</h2>
      <p>Para consultas sobre la web: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> o <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phoneDisplay}</a>. La revisión final de los datos legales corresponde al titular del negocio.</p>
    </LegalPage>
  );
}
