import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { MapPanel } from "@/components/map-panel";
import { PageIntro } from "@/components/site-shell";
import { BUSINESS, MAPS_URL, SITE_URL, SOCIALS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contacto y ubicación en Santa Cruz de Tenerife",
  description: "Contacta con Mascotas Tenerife: teléfono 922 59 59 92, email y dirección en C. Álvaro Rodríguez López, 16, Santa Cruz de Tenerife.",
  path: "/contacto/",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro path="/contacto/" breadcrumb="Contacto" eyebrow="Estamos en Santa Cruz de Tenerife" title={<>Hablemos de lo que<br /><em>necesita tu mascota.</em></>} lead="Llámanos, escríbenos o ven a la tienda. Para consultar una cita de peluquería o un producto, el contacto directo es lo más rápido.">
        <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar ahora</a>
      </PageIntro>

      <section className="contact-main-section section-pad">
        <div className="container contact-layout">
          <div className="contact-details-column">
            <p className="eyebrow">Datos de contacto</p>
            <h2>Ven a visitarnos.</h2>
            <div className="contact-detail-list">
              <a className="contact-detail" href={MAPS_URL} target="_blank" rel="noreferrer">
                <span className="contact-detail-icon"><Icon name="pin" size={20} /></span>
                <span><small>Dirección</small><strong>{BUSINESS.streetAddress}</strong><span>{BUSINESS.postalCode} {BUSINESS.addressLocality}</span></span>
                <Icon name="arrow" size={17} />
              </a>
              <a className="contact-detail" href={`tel:${BUSINESS.phoneHref}`}>
                <span className="contact-detail-icon"><Icon name="phone" size={19} /></span>
                <span><small>Teléfono</small><strong>{BUSINESS.phoneDisplay}</strong><span>Llamar para consultas y citas</span></span>
                <Icon name="arrow" size={17} />
              </a>
              <a className="contact-detail" href={`mailto:${BUSINESS.email}`}>
                <span className="contact-detail-icon"><Icon name="mail" size={19} /></span>
                <span><small>Email</small><strong>{BUSINESS.email}</strong><span>Escríbenos directamente</span></span>
                <Icon name="arrow" size={17} />
              </a>
              <div className="contact-detail contact-detail--static">
                <span className="contact-detail-icon"><Icon name="clock" size={19} /></span>
                <span><small>Horario</small><strong>Por confirmar</strong><span>El horario vigente no ha podido verificarse. Llama antes de acudir.</span></span>
              </div>
              <div className="contact-detail contact-detail--static">
                <span className="contact-detail-icon"><Icon name="external" size={19} /></span>
                <span><small>Web</small><strong>{BUSINESS.websiteDisplay}</strong><span>{SITE_URL}</span></span>
              </div>
            </div>
            <div className="contact-socials"><span>Perfiles oficiales</span>{SOCIALS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><Icon name={social.label === "Instagram" ? "instagram" : "facebook"} size={17} />{social.label}</a>)}</div>
            <div className="contact-map-link"><a className="btn btn-secondary" href={MAPS_URL} target="_blank" rel="noreferrer"><Icon name="pin" size={17} /> Cómo llegar con Google Maps</a></div>
          </div>
          <MapPanel />
        </div>
      </section>

      <section className="contact-form-section section-pad">
        <div className="container contact-form-layout">
          <div className="contact-form-intro">
            <p className="eyebrow">Escríbenos</p>
            <h2>Cuéntanos<br /><em>qué necesitas.</em></h2>
            <p>Puedes rellenar los datos, pero el envío por email sigue pendiente de configuración. Mientras tanto, contacta por teléfono o correo directo.</p>
            <div className="form-setup-note"><Icon name="clock" size={18} /><p><strong>Formulario pendiente de activación.</strong><br />Hasta configurar el correo, la consulta no se remite al negocio ni se guarda en la web.</p></div>
          </div>
          <div className="contact-form-card"><ContactForm /></div>
        </div>
      </section>

      <section className="contact-last-call">
        <div className="container"><p>¿Prefieres hablar ahora?</p><a href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={19} /> {BUSINESS.phoneDisplay}</a></div>
      </section>
    </>
  );
}
