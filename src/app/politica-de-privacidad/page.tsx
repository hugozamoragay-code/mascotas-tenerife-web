import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal-layout";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad",
  description: "Información sobre los datos de contacto enviados a Mascotas Tenerife desde esta web.",
  path: "/politica-de-privacidad/",
});

export default function PrivacyPage() {
  return (
    <LegalPage path="/politica-de-privacidad/" breadcrumb="Política de privacidad" title="Política de privacidad" lead="Información sobre los datos que se facilitan al contactar con Mascotas Tenerife.">
      <p className="legal-updated">El responsable legal, la base jurídica, los plazos y los datos del proveedor de correo deben confirmarse antes de activar el envío online.</p>

      <h2>1. Responsable de los datos</h2>
      <p><strong>Nombre comercial:</strong> {BUSINESS.name}.<br /><strong>Titular legal y NIF/CIF:</strong> [Información por confirmar].<br /><strong>Dirección de contacto publicada:</strong> {BUSINESS.addressFull}.<br /><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>

      <h2>2. Datos y finalidad</h2>
      <p>Si se utiliza el formulario, los campos solicitados son nombre, email, teléfono opcional, motivo y mensaje. Se recogen para gestionar y responder la consulta. No incluyas datos sensibles ni información que no sea necesaria para contestarte.</p>

      <h2>3. Envío del formulario</h2>
      <p>El endpoint valida la consulta en el servidor y no la guarda en una base de datos. El envío por email permanece desactivado mientras el negocio no configure el proveedor y el destinatario. En ese estado, el formulario informa de que no se ha enviado y ofrece el teléfono y el email directo como alternativas.</p>
      <p>Si el negocio activa el envío mediante el servicio de correo configurado, los datos del formulario se transmitirán al proveedor para entregar el mensaje en la dirección elegida por el titular. El proveedor concreto, su ubicación, las condiciones aplicables y el periodo de conservación deben identificarse y revisarse antes de esa activación.</p>

      <h2>4. Conservación y destinatarios</h2>
      <p>El sitio no mantiene un archivo de consultas. Cuando el envío de correo esté activo, la conservación del mensaje en los sistemas de correo y la gestión de la respuesta dependerán del titular y de los proveedores utilizados. El plazo concreto debe confirmarse con el titular.</p>

      <h2>5. Derechos y contacto</h2>
      <p>Para solicitar información o plantear una consulta sobre los datos, contacta con Mascotas Tenerife en <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> o en el teléfono <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phoneDisplay}</a>. Antes del lanzamiento, el titular debe completar la identidad del responsable y revisar el procedimiento de atención de solicitudes.</p>

      <h2>6. Revisión del contenido</h2>
      <p>Este texto describe la implementación prevista del sitio en el momento de su preparación. Debe revisarse si se activa el correo, se incorporan analítica, cuentas, reservas, pagos u otros servicios que traten datos.</p>
    </LegalPage>
  );
}
