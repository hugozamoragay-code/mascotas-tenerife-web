import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageIntro, PhotoCredit, TextLink } from "@/components/site-shell";
import { BUSINESS, PHOTO_ASSETS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Peluquería para mascotas en Santa Cruz de Tenerife",
  description: "Peluquería para mascotas en Mascotas Tenerife: información sobre cepillado, baño y corte. Llama para consultar disponibilidad y pedir cita en Santa Cruz.",
  path: "/peluqueria-para-mascotas/",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Peluquería para mascotas",
  serviceType: "Peluquería para mascotas",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Santa Cruz de Tenerife" },
  url: `${SITE_URL}/peluqueria-para-mascotas/`,
};

export default function GroomingPage() {
  return (
    <>
      <PageIntro path="/peluqueria-para-mascotas/" breadcrumb="Peluquería" eyebrow="Peluquería para mascotas · Santa Cruz" title={<>Peluquería para mascotas<br /><em>en Santa Cruz.</em></>} lead="Cepillado, baño y corte aparecen entre los servicios publicados por Mascotas Tenerife. Llama para hablar de las necesidades de tu mascota y pedir cita.">
        <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar para pedir cita</a>
        <span className="booking-note">No hay una reserva online confirmada.</span>
      </PageIntro>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      <section className="section-pad">
        <div className="container grooming-page-layout">
          <figure className="grooming-main-photo">
            <Image src={PHOTO_ASSETS.brush.src} alt={PHOTO_ASSETS.brush.alt} fill sizes="(max-width: 850px) 100vw, 54vw" />
            <div className="image-caption-pill"><Icon name="scissors" size={17} /> Cuidados de peluquería</div>
            <PhotoCredit photo={PHOTO_ASSETS.brush} />
          </figure>
          <div className="grooming-info-copy">
            <p className="eyebrow">Servicios anunciados</p>
            <h2>Un cuidado ajustado<br /><em>a cada pelaje.</em></h2>
            <p>La web oficial de Mascotas Tenerife describe los siguientes cuidados. Para confirmar que el servicio sigue disponible y es adecuado para tu animal, consulta antes por teléfono.</p>
            <div className="grooming-service-list">
              <article><span className="grooming-service-icon"><Icon name="sparkle" size={19} /></span><div><h3>Cepillado y cuidado del pelo</h3><p>Una puesta a punto del manto según las necesidades de cada mascota.</p></div></article>
              <article><span className="grooming-service-icon"><Icon name="bowl" size={19} /></span><div><h3>Baño y limpieza</h3><p>La información publicada incluye baño y cuidado higiénico.</p></div></article>
              <article><span className="grooming-service-icon"><Icon name="scissors" size={19} /></span><div><h3>Corte y stripping</h3><p>El negocio menciona distintos estilos de corte y la técnica de stripping.</p></div></article>
            </div>
            <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Consultar disponibilidad</a>
          </div>
        </div>
      </section>

      <section className="animal-info-band">
        <div className="container animal-info-grid">
          <div className="animal-info-heading"><p className="eyebrow">Antes de pedir cita</p><h2>Cuéntanos quién<br /><em>viene a la peluquería.</em></h2></div>
          <div className="animal-info-content">
            <p>La página oficial indica atención a perros y también a gatos dóciles, conejos y cobayas. La atención depende del carácter, las necesidades y la disponibilidad; llama para confirmarlo.</p>
            <div className="animal-tags"><span>Perros</span><span>Gatos dóciles</span><span>Conejos</span><span>Cobayas</span></div>
            <div className="detail-note"><Icon name="check" size={18} /><p>Según la información publicada por el negocio, el baño puede incluir corte de uñas, cuidado higiénico y atención de la zona de los lagrimales. Confirma por teléfono los detalles aplicables.</p></div>
          </div>
        </div>
      </section>

      <section className="grooming-cta-section section-pad">
        <div className="container grooming-cta-card">
          <div className="grooming-cta-image">
            <Image src={PHOTO_ASSETS.cat.src} alt={PHOTO_ASSETS.cat.alt} fill sizes="(max-width: 760px) 100vw, 36vw" />
            <PhotoCredit photo={PHOTO_ASSETS.cat} />
          </div>
          <div className="grooming-cta-copy">
            <p className="eyebrow">Pide información</p>
            <h2>¿Tienes dudas sobre el servicio?</h2>
            <p>Cuéntanos qué necesita tu mascota. Te atenderán por teléfono para consultar tipo de cuidado, disponibilidad y cita.</p>
            <div className="grooming-cta-actions"><a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> {BUSINESS.phoneDisplay}</a><TextLink href="/contacto/">Más formas de contacto</TextLink></div>
          </div>
        </div>
      </section>
    </>
  );
}
