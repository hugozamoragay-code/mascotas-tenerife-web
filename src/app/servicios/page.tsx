import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageIntro, PhotoCredit, TextLink } from "@/components/site-shell";
import { BUSINESS, PHOTO_ASSETS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Servicios para mascotas en Santa Cruz de Tenerife",
  description: "Peluquería para mascotas, alimentación, artículos de higiene y accesorios en Mascotas Tenerife, Santa Cruz. Consulta disponibilidad por teléfono.",
  path: "/servicios/",
});

const services = [
  {
    number: "01",
    title: "Peluquería para mascotas",
    description: "La información del negocio recoge cepillado, baño, corte y stripping. Llama para consultar el servicio adecuado y solicitar cita.",
    href: "/peluqueria-para-mascotas/",
    cta: "Ver peluquería",
    image: PHOTO_ASSETS.grooming,
    icon: "scissors" as const,
  },
  {
    number: "02",
    title: "Alimentación",
    description: "La tienda publica alimentación para animales de compañía. Si buscas una referencia concreta, pregunta por teléfono si está disponible.",
    href: "/tienda/#alimentacion",
    cta: "Consultar alimentación",
    image: PHOTO_ASSETS.food,
    icon: "bowl" as const,
  },
  {
    number: "03",
    title: "Higiene y accesorios",
    description: "Productos de higiene y accesorios forman parte de las categorías publicadas para la tienda. Ven a conocer la selección o consúltanos.",
    href: "/tienda/#higiene-accesorios",
    cta: "Ver categorías",
    image: PHOTO_ASSETS.shop,
    icon: "sparkle" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro path="/servicios/" breadcrumb="Servicios" eyebrow="Servicios para animales de compañía" title={<>Atención y productos<br /><em>para tu mascota.</em></>} lead="Mascotas Tenerife reúne una tienda de mascotas y un servicio de peluquería en Santa Cruz de Tenerife. Consulta cada servicio directamente con el negocio.">
        <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar para consultar</a>
      </PageIntro>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <p className="eyebrow">Lo que ofrece la tienda</p>
            <h2>Una respuesta sencilla,<br /><em>sin catálogo inventado.</em></h2>
            <p>Estas son las categorías que aparecen en la información pública del negocio. La disponibilidad de artículos y citas puede variar: confirma antes de desplazarte.</p>
          </div>
          <div className="service-grid services-page-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <Link className="service-card-image" href={service.href} aria-label={service.cta}>
                  <Image src={service.image.src} alt={service.image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="service-card-number">{service.number}</span>
                </Link>
                <div className="service-card-body">
                  <span className="service-card-icon"><Icon name={service.icon} size={20} /></span>
                  <p className="card-kicker">Mascotas Tenerife</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <TextLink href={service.href}>{service.cta}</TextLink>
                </div>
                <PhotoCredit photo={service.image} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-assurance">
        <div className="container service-assurance-inner">
          <div className="assurance-mark"><Icon name="pin" size={24} /></div>
          <div><p className="eyebrow">Atención local</p><h2>En el centro de Santa Cruz.</h2><p>{BUSINESS.streetAddress}, {BUSINESS.postalCode} {BUSINESS.addressLocality}. El horario actual está pendiente de confirmar directamente con el negocio.</p></div>
          <div className="assurance-actions"><Link className="btn btn-primary" href="/contacto/">Ver contacto <Icon name="arrow" size={17} /></Link><a className="quiet-phone" href={`tel:${BUSINESS.phoneHref}`}>Llamar: {BUSINESS.phoneDisplay}</a></div>
        </div>
      </section>
    </>
  );
}
