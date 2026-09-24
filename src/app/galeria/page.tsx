import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageIntro } from "@/components/site-shell";
import { PHOTO_ASSETS, SOCIALS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Galería de mascotas y peluquería",
  description: "Galería ilustrativa de peluquería, cuidados y productos para mascotas. Para ver fotos propias de Mascotas Tenerife, visita sus perfiles oficiales.",
  path: "/galeria/",
});

const galleryImages = [
  { key: "hero", photo: PHOTO_ASSETS.hero, label: "Peluquería para mascotas", className: "gallery-item--tall" },
  { key: "food", photo: PHOTO_ASSETS.food, label: "Alimentación", className: "gallery-item--wide" },
  { key: "cat", photo: PHOTO_ASSETS.cat, label: "Cuidado de mascotas", className: "" },
  { key: "shop", photo: PHOTO_ASSETS.shop, label: "Accesorios", className: "gallery-item--wide" },
  { key: "bath", photo: PHOTO_ASSETS.bath, label: "Baño y cuidado", className: "" },
  { key: "portrait", photo: PHOTO_ASSETS.portrait, label: "Mascotas", className: "gallery-item--tall" },
  { key: "brush", photo: PHOTO_ASSETS.brush, label: "Cepillado", className: "" },
];

export default function GalleryPage() {
  return (
    <>
      <PageIntro path="/galeria/" breadcrumb="Galería" eyebrow="Imágenes de recurso" title={<>Un vistazo al cuidado<br /><em>de las mascotas.</em></>} lead="No hemos podido verificar fotografías propias del local para esta web. Esta galería reúne imágenes ilustrativas; no representan el establecimiento ni a su equipo.">
        <a className="btn btn-primary" href={SOCIALS[0].href} target="_blank" rel="noreferrer">Ver fotos oficiales <span aria-hidden="true">↗</span></a>
      </PageIntro>

      <section className="gallery-section section-pad">
        <div className="container">
          <div className="gallery-disclosure"><span className="gallery-disclosure-mark">i</span><p>Fotografías de recurso de Pexels con crédito a sus autores. Para imágenes reales y actuales de Mascotas Tenerife, consulta sus perfiles oficiales.</p><a href={SOCIALS[1].href} target="_blank" rel="noreferrer">Facebook oficial ↗</a></div>
          <div className="gallery-grid">
            {galleryImages.map(({ key, photo, label, className }) => (
              <figure className={`gallery-item ${className}`} key={key}>
                <div className="gallery-image-wrap"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
                <figcaption className="gallery-caption">
                  <span>{label} · imagen ilustrativa</span>
                  <span className="photo-credit">Fotografía: <a href={photo.creditUrl} target="_blank" rel="noreferrer">{photo.credit}</a></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
