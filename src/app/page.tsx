import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { MapPanel } from "@/components/map-panel";
import { PhotoCredit, TextLink } from "@/components/site-shell";
import { BUSINESS, MAPS_URL, PHOTO_ASSETS, SITE_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Santa Cruz de Tenerife · Tienda y peluquería</p>
            <h1>Todo para cuidar a tu mascota, <em>cerca de casa.</em></h1>
            <p className="hero-lead">Alimentación, higiene, accesorios y peluquería para mascotas, en la calle Álvaro Rodríguez López.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar ahora</a>
              <Link className="btn btn-secondary" href="/servicios/">Ver servicios <Icon name="arrow" size={17} /></Link>
            </div>
            <a className="hero-address" href={MAPS_URL} target="_blank" rel="noreferrer">
              <span className="hero-address-icon"><Icon name="pin" size={17} /></span>
              <span><strong>Estamos en Santa Cruz</strong><small>{BUSINESS.streetAddress} · {BUSINESS.postalCode} · frente al Centro Comercial Meridiano</small></span>
              <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="hero-visual">
            <figure className="hero-image-frame">
              <Image src={PHOTO_ASSETS.hero.src} alt={PHOTO_ASSETS.hero.alt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
              <div className="hero-image-label"><span className="label-icon"><Icon name="paw" size={20} /></span><span><strong>Cuidado de mascotas</strong><small>En el centro de Santa Cruz</small></span></div>
              <PhotoCredit photo={PHOTO_ASSETS.hero} />
            </figure>
            <span className="hero-side-note">TIENDA <i>·</i> PELUQUERÍA <i>·</i> SANTA CRUZ</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Actividad del negocio">
        <div className="container proof-strip-inner">
          <div className="proof-item"><span className="proof-icon"><Icon name="scissors" size={20} /></span><span>Peluquería para mascotas</span></div>
          <span className="proof-separator" aria-hidden="true" />
          <div className="proof-item"><span className="proof-icon"><Icon name="bowl" size={20} /></span><span>Alimentación y accesorios</span></div>
          <span className="proof-separator" aria-hidden="true" />
          <div className="proof-item"><span className="proof-icon"><Icon name="pin" size={20} /></span><span>Santa Cruz de Tenerife</span></div>
        </div>
      </section>

      <section className="section-pad" id="servicios">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">Qué encontrarás</p><h2>Una tienda de mascotas<br /><em>y un servicio de peluquería.</em></h2></div>
            <div className="section-heading-aside"><p>Productos para el día a día y cuidados de peluquería, en un mismo punto de Santa Cruz.</p><TextLink href="/servicios/">Conocer los servicios</TextLink></div>
          </div>
          <div className="service-grid">
            <article className="service-card service-card--featured">
              <Link className="service-card-image" href="/peluqueria-para-mascotas/" aria-label="Ver peluquería para mascotas">
                <Image src={PHOTO_ASSETS.grooming.src} alt={PHOTO_ASSETS.grooming.alt} fill sizes="(max-width: 760px) 100vw, 38vw" />
                <span className="service-card-number">01</span>
              </Link>
              <div className="service-card-body">
                <p className="card-kicker">Cuidado y peluquería</p>
                <h3>Peluquería para mascotas</h3>
                <p>En la información publicada figuran cepillado, baño y distintos tipos de corte. Consulta el servicio adecuado y pide cita por teléfono.</p>
                <TextLink href="/peluqueria-para-mascotas/">Ver peluquería</TextLink>
              </div>
              <PhotoCredit photo={PHOTO_ASSETS.grooming} />
            </article>
            <article className="service-card">
              <Link className="service-card-image" href="/tienda/#alimentacion" aria-label="Ver alimentación para mascotas">
                <Image src={PHOTO_ASSETS.food.src} alt={PHOTO_ASSETS.food.alt} fill sizes="(max-width: 760px) 100vw, 30vw" />
                <span className="service-card-number">02</span>
              </Link>
              <div className="service-card-body">
                <p className="card-kicker">Para cada día</p>
                <h3>Alimentación</h3>
                <p>La tienda ofrece alimentación para animales de compañía. Llámanos si buscas una referencia concreta y te confirmamos disponibilidad.</p>
                <TextLink href="/tienda/#alimentacion">Consultar alimentación</TextLink>
              </div>
              <PhotoCredit photo={PHOTO_ASSETS.food} />
            </article>
            <article className="service-card">
              <Link className="service-card-image" href="/tienda/#higiene-accesorios" aria-label="Ver productos de higiene y accesorios">
                <Image src={PHOTO_ASSETS.shop.src} alt={PHOTO_ASSETS.shop.alt} fill sizes="(max-width: 760px) 100vw, 30vw" />
                <span className="service-card-number">03</span>
              </Link>
              <div className="service-card-body">
                <p className="card-kicker">Pequeños básicos</p>
                <h3>Higiene y accesorios</h3>
                <p>Artículos de higiene y accesorios para mascotas, según las categorías publicadas por el negocio. Consulta por un producto concreto.</p>
                <TextLink href="/tienda/#higiene-accesorios">Ver categorías</TextLink>
              </div>
              <PhotoCredit photo={PHOTO_ASSETS.shop} />
            </article>
          </div>
        </div>
      </section>

      <section className="grooming-highlight">
        <div className="container split-layout">
          <figure className="split-image grooming-highlight-image">
            <Image src={PHOTO_ASSETS.bath.src} alt={PHOTO_ASSETS.bath.alt} fill sizes="(max-width: 850px) 100vw, 48vw" />
            <span className="image-stamp"><Icon name="scissors" size={19} /> Peluquería</span>
            <PhotoCredit photo={PHOTO_ASSETS.bath} />
          </figure>
          <div className="split-copy">
            <p className="eyebrow">Peluquería en Santa Cruz</p>
            <h2>Cuidados de peluquería, <em>hablados con claridad.</em></h2>
            <p>La web del negocio describe servicios de cepillado, baño, corte y stripping. También indica atención a perros y, bajo ciertas condiciones, a gatos, conejos y cobayas.</p>
            <ul className="check-list">
              <li><Icon name="check" size={17} /> Cepillado y cuidado del pelo</li>
              <li><Icon name="check" size={17} /> Baño y limpieza</li>
              <li><Icon name="check" size={17} /> Corte adaptado a lo que consultes</li>
            </ul>
            <p className="soft-note">Cada mascota es distinta. Llama para confirmar disponibilidad, tipo de servicio y cita.</p>
            <div className="split-actions">
              <Link href="/peluqueria-para-mascotas/" className="btn btn-primary">Ver peluquería <Icon name="arrow" size={17} /></Link>
              <a href={`tel:${BUSINESS.phoneHref}`} className="quiet-phone"><Icon name="phone" size={16} /> {BUSINESS.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="review-section section-pad">
        <div className="container review-panel">
          <div className="review-copy">
            <p className="eyebrow eyebrow--light">La opinión de la gente</p>
            <h2>Antes de venir,<br /><em>lee experiencias recientes.</em></h2>
            <p>La valoración pública puede cambiar con el tiempo. Consulta en Google las reseñas y fotografías más recientes de Mascotas Tenerife.</p>
            <TextLink href={MAPS_URL} external>Ver reseñas en Google</TextLink>
          </div>
          <a className="rating-card" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Consultar la valoración pública de Mascotas Tenerife en Google Maps">
            <span className="rating-stars" aria-hidden="true">★★★★★</span>
            <span className="rating-number">4,1<span>/5</span></span>
            <span className="rating-source">Valoración pública en Google<br />Consulta el perfil actualizado</span>
            <span className="rating-open"><Icon name="external" size={16} /></span>
          </a>
        </div>
      </section>

      <section className="section-pad shop-preview-section">
        <div className="container shop-preview">
          <div className="shop-preview-copy">
            <p className="eyebrow">La tienda</p>
            <h2>Lo necesario para<br /><em>el día a día de tu mascota.</em></h2>
            <p>Alimentación, productos de higiene y accesorios aparecen entre las categorías públicas de la tienda. No hay un catálogo online confirmado: pregúntanos por teléfono si necesitas una marca o producto concreto.</p>
            <div className="category-pills"><span>Alimentación</span><span>Higiene</span><span>Accesorios</span></div>
            <Link href="/tienda/" className="btn btn-secondary">Explorar la tienda <Icon name="arrow" size={17} /></Link>
          </div>
          <figure className="shop-preview-image">
            <Image src={PHOTO_ASSETS.portrait.src} alt={PHOTO_ASSETS.portrait.alt} fill sizes="(max-width: 850px) 100vw, 40vw" />
            <div className="shop-image-note"><Icon name="bowl" size={18} /><span>Alimentación y accesorios<br /><small>Consulta disponibilidad</small></span></div>
            <PhotoCredit photo={PHOTO_ASSETS.portrait} />
          </figure>
        </div>
      </section>

      <section className="visit-section section-pad" id="ubicacion">
        <div className="container visit-grid">
          <div className="visit-copy">
            <p className="eyebrow">En Santa Cruz de Tenerife</p>
            <h2>Ven a visitarnos.</h2>
            <p>Estamos en la calle Álvaro Rodríguez López, en Santa Cruz. Si vienes por un servicio de peluquería o buscas un producto concreto, llámanos antes y te ayudamos a confirmarlo.</p>
            <address className="visit-address">
              <Icon name="pin" size={20} />
              <span><strong>{BUSINESS.streetAddress}</strong><br />{BUSINESS.postalCode} {BUSINESS.addressLocality}</span>
            </address>
            <div className="hours-alert"><Icon name="clock" size={18} /><span><strong>Horario por confirmar</strong><small>Los horarios publicados en directorios discrepan. Confirma por teléfono antes de desplazarte.</small></span></div>
            <div className="visit-actions">
              <a className="btn btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer"><Icon name="pin" size={17} /> Cómo llegar</a>
              <a className="btn btn-secondary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={16} /> Llamar</a>
            </div>
          </div>
          <MapPanel />
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container final-cta">
          <div><p className="eyebrow eyebrow--light">¿Tienes una consulta?</p><h2>Te atendemos por teléfono.</h2><p>Cuéntanos qué necesitas y te orientamos sobre el servicio o producto.</p></div>
          <a href={`tel:${BUSINESS.phoneHref}`} className="btn btn-light"><Icon name="phone" size={17} /> {BUSINESS.phoneDisplay}</a>
        </div>
      </section>
      <p className="site-image-disclosure">Las fotografías de esta web son imágenes de recurso y no muestran el local ni al equipo de Mascotas Tenerife. <Link href="/galeria/">Consulta la galería</Link> o visita sus <a href="https://www.instagram.com/mascotastenerife/" target="_blank" rel="noreferrer">publicaciones oficiales</a>.</p>
    </>
  );
}
