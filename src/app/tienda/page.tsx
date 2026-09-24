import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageIntro, PhotoCredit, TextLink } from "@/components/site-shell";
import { BUSINESS, PHOTO_ASSETS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tienda de mascotas en Santa Cruz de Tenerife",
  description: "Alimentación para mascotas, productos de higiene y accesorios en Mascotas Tenerife, Santa Cruz. Consulta disponibilidad por teléfono.",
  path: "/tienda/",
});

export default function ShopPage() {
  return (
    <>
      <PageIntro path="/tienda/" breadcrumb="Tienda" eyebrow="Tienda para animales de compañía" title={<>Todo lo esencial,<br /><em>en una tienda local.</em></>} lead="Alimentación, productos de higiene y accesorios son algunas de las categorías publicadas por Mascotas Tenerife, en Santa Cruz.">
        <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Consultar disponibilidad</a>
      </PageIntro>

      <section className="section-pad">
        <div className="container shop-page-grid">
          <div className="shop-page-copy">
            <p className="eyebrow">La tienda</p>
            <h2>Una selección para<br /><em>el día a día.</em></h2>
            <p>La información pública de Mascotas Tenerife describe una tienda con alimentación, higiene y accesorios para animales de compañía. No hay un catálogo online verificable en esta web; si necesitas un producto concreto, consulta por teléfono antes de venir.</p>
            <a className="btn btn-primary" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> Llamar a la tienda</a>
            <p className="no-ecommerce-note">La web no muestra precios ni existencias en tiempo real.</p>
          </div>
          <figure className="shop-page-image">
            <Image src={PHOTO_ASSETS.shop.src} alt={PHOTO_ASSETS.shop.alt} fill sizes="(max-width: 850px) 100vw, 53vw" />
            <span className="shop-page-image-label"><Icon name="paw" size={18} /> Tienda de mascotas</span>
            <PhotoCredit photo={PHOTO_ASSETS.shop} />
          </figure>
        </div>
      </section>

      <section className="shop-categories-section" id="categorias">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <p className="eyebrow">Categorías anunciadas</p>
            <h2>Lo que puedes<br /><em>consultar en tienda.</em></h2>
            <p>Las marcas y referencias no se muestran como catálogo actual porque su disponibilidad no se ha podido confirmar.</p>
          </div>
          <div className="shop-category-grid">
            <article className="shop-category-card" id="alimentacion">
              <div className="shop-category-visual shop-category-visual--food"><Image src={PHOTO_ASSETS.food.src} alt={PHOTO_ASSETS.food.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <div className="shop-category-body"><span className="shop-category-icon"><Icon name="bowl" size={21} /></span><p className="card-kicker">Para cada día</p><h3>Alimentación</h3><p>Piensos y comida para animales de compañía aparecen entre las categorías públicas del negocio.</p><a href={`tel:${BUSINESS.phoneHref}`} className="category-cta">Preguntar por teléfono <Icon name="arrow" size={16} /></a></div>
              <PhotoCredit photo={PHOTO_ASSETS.food} />
            </article>
            <article className="shop-category-card" id="higiene-accesorios">
              <div className="shop-category-visual"><Image src={PHOTO_ASSETS.bath.src} alt={PHOTO_ASSETS.bath.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <div className="shop-category-body"><span className="shop-category-icon"><Icon name="sparkle" size={21} /></span><p className="card-kicker">Cuidado diario</p><h3>Higiene</h3><p>Productos de higiene y cuidado forman parte de las categorías anunciadas para la tienda.</p><a href={`tel:${BUSINESS.phoneHref}`} className="category-cta">Consultar productos <Icon name="arrow" size={16} /></a></div>
              <PhotoCredit photo={PHOTO_ASSETS.bath} />
            </article>
            <article className="shop-category-card">
              <div className="shop-category-visual"><Image src={PHOTO_ASSETS.shop.src} alt={PHOTO_ASSETS.shop.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <div className="shop-category-body"><span className="shop-category-icon"><Icon name="paw" size={21} /></span><p className="card-kicker">Para compartir cada día</p><h3>Accesorios</h3><p>La tienda también publica accesorios para animales de compañía. Pregunta por la disponibilidad de cada artículo.</p><a href={`tel:${BUSINESS.phoneHref}`} className="category-cta">Consultar accesorios <Icon name="arrow" size={16} /></a></div>
              <PhotoCredit photo={PHOTO_ASSETS.shop} />
            </article>
          </div>
        </div>
      </section>

      <section className="store-visit-banner">
        <div className="container store-visit-inner">
          <div><p className="eyebrow eyebrow--light">Ven a conocer la tienda</p><h2>¿Buscas algo concreto?</h2><p>Llama antes y pregunta por el producto. Si prefieres, acércate a {BUSINESS.streetAddress}, Santa Cruz de Tenerife.</p></div>
          <div className="store-visit-actions"><a className="btn btn-light" href={`tel:${BUSINESS.phoneHref}`}><Icon name="phone" size={17} /> {BUSINESS.phoneDisplay}</a><TextLink href="/contacto/">Ver ubicación y contacto</TextLink></div>
        </div>
      </section>
    </>
  );
}
