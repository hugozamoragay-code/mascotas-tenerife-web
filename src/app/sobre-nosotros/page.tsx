import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageIntro, PhotoCredit } from "@/components/site-shell";
import { BUSINESS, MAPS_URL, PHOTO_ASSETS, SOCIALS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sobre Mascotas Tenerife",
  description: "Conoce Mascotas Tenerife: tienda para animales de compañía y peluquería para mascotas en la calle Álvaro Rodríguez López, Santa Cruz de Tenerife.",
  path: "/sobre-nosotros/",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro path="/sobre-nosotros/" breadcrumb="Sobre nosotros" eyebrow="Mascotas Tenerife · Santa Cruz" title={<>Una tienda local<br /><em>para el cuidado diario.</em></>} lead="Mascotas Tenerife combina una tienda para animales de compañía con un servicio de peluquería para mascotas, en Santa Cruz de Tenerife.">
        <a className="btn btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer"><Icon name="pin" size={17} /> Cómo llegar</a>
      </PageIntro>

      <section className="section-pad">
        <div className="container about-layout">
          <figure className="about-image">
            <Image src={PHOTO_ASSETS.portrait.src} alt={PHOTO_ASSETS.portrait.alt} fill sizes="(max-width: 850px) 100vw, 47vw" />
            <PhotoCredit photo={PHOTO_ASSETS.portrait} />
          </figure>
          <div className="about-copy">
            <p className="eyebrow">Un comercio de proximidad</p>
            <h2>Un sitio para resolver<br /><em>lo cotidiano.</em></h2>
            <p>En Mascotas Tenerife puedes consultar productos de alimentación, higiene y accesorios, además de informarte sobre peluquería para mascotas. La actividad del negocio reúne estas dos áreas en una misma dirección.</p>
            <p>Estamos en la calle Álvaro Rodríguez López, 16, en Santa Cruz de Tenerife. Para saber si hay un artículo concreto o consultar qué cuidado necesita tu mascota, lo más directo es llamarnos.</p>
            <div className="about-nap-card"><Icon name="pin" size={19} /><div><strong>{BUSINESS.streetAddress}</strong><span>{BUSINESS.postalCode} {BUSINESS.addressLocality}</span></div><a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Abrir ubicación en Google Maps"><Icon name="arrow" size={18} /></a></div>
            <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar a Mascotas Tenerife</a>
          </div>
        </div>
      </section>

      <section className="about-principles-section">
        <div className="container about-principles">
          <div><span className="about-principle-number">01</span><h3>Tienda</h3><p>Alimentación, higiene y accesorios en Santa Cruz.</p></div>
          <div><span className="about-principle-number">02</span><h3>Peluquería</h3><p>Consulta cuidados, disponibilidad y cita por teléfono.</p></div>
          <div><span className="about-principle-number">03</span><h3>Contacto directo</h3><p>Si tienes dudas, hablamos contigo antes de que vengas.</p></div>
        </div>
      </section>

      <section className="about-social-section section-pad">
        <div className="container about-social-card">
          <div><p className="eyebrow">Imágenes actuales del negocio</p><h2>Conoce la tienda<br /><em>en sus perfiles oficiales.</em></h2><p>Las fotografías de esta web son recursos ilustrativos. Para ver publicaciones propias y actuales, visita las redes oficiales de Mascotas Tenerife.</p></div>
          <div className="social-link-list">
            {SOCIALS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer"><span><Icon name={social.label === "Instagram" ? "instagram" : "facebook"} size={20} /> {social.label}</span><Icon name="external" size={17} /></a>)}
            <Link href="/galeria/">Ver galería de imágenes de recurso <Icon name="arrow" size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
