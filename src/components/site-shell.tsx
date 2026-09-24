import Link from "next/link";
import type { ReactNode } from "react";
import { BUSINESS, MAPS_URL, NAV_ITEMS, SITE_NAME, SITE_URL, SOCIALS } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Brand } from "@/components/brand";

export { Brand };

export function PageIntro({
  path,
  breadcrumb,
  eyebrow,
  title,
  lead,
  children,
}: {
  path: string;
  breadcrumb: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  children?: ReactNode;
}) {
  const items = [
    { name: "Inicio", url: `${SITE_URL}/` },
    { name: breadcrumb, url: `${SITE_URL}${path}` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Ruta de navegación">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{breadcrumb}</span>
          </nav>
          <div className="page-intro-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="page-intro-lead">{lead}</p>
            {children ? <div className="page-intro-actions">{children}</div> : null}
          </div>
          <span className="page-intro-ornament" aria-hidden="true"><Icon name="paw" size={110} /></span>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

export function PhotoCredit({ photo }: { photo: { credit: string; creditUrl: string } }) {
  return (
    <span className="photo-credit">
      Fotografía de recurso · <a href={photo.creditUrl} target="_blank" rel="noreferrer">{photo.credit}</a>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand inverse />
            <p>Tienda y peluquería para mascotas en Santa Cruz de Tenerife.</p>
            <div className="footer-socials" aria-label="Perfiles oficiales">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} aria-label={`Seguir a Mascotas Tenerife en ${social.label}`} target="_blank" rel="noreferrer">
                  <Icon name={social.label === "Instagram" ? "instagram" : "facebook"} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h2>Explora</h2>
            <ul>
              {NAV_ITEMS.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h2>Ven a visitarnos</h2>
            <a className="footer-contact-link" href={MAPS_URL} target="_blank" rel="noreferrer">
              <Icon name="pin" size={18} /><span>{BUSINESS.streetAddress}<br />{BUSINESS.postalCode} {BUSINESS.addressLocality}</span>
            </a>
            <a className="footer-contact-link" href={`tel:${BUSINESS.phoneHref}`}>
              <Icon name="phone" size={17} /><span>{BUSINESS.phoneDisplay}</span>
            </a>
            <a className="footer-contact-link" href={`mailto:${BUSINESS.email}`}>
              <Icon name="mail" size={17} /><span>{BUSINESS.email}</span>
            </a>
            <p className="footer-hours"><Icon name="clock" size={17} /><span>Horario: <strong>pendiente de confirmar.</strong><br />Llámanos antes de venir.</span></p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE_NAME}</span>
          <nav aria-label="Información legal">
            <Link href="/aviso-legal/">Aviso legal</Link>
            <Link href="/politica-de-privacidad/">Privacidad</Link>
            <Link href="/politica-de-cookies/">Cookies</Link>
          </nav>
          <a href={SITE_URL} className="footer-domain">{BUSINESS.websiteDisplay}</a>
        </div>
      </div>
    </footer>
  );
}

export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Accesos rápidos de contacto">
      <a href={`tel:${BUSINESS.phoneHref}`} className="mobile-action mobile-action--call">
        <Icon name="phone" size={18} /><span>Llamar</span>
      </a>
      <a href={MAPS_URL} className="mobile-action mobile-action--directions" target="_blank" rel="noreferrer">
        <Icon name="pin" size={18} /><span>Cómo llegar</span>
      </a>
    </nav>
  );
}

export function TextLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const content = <>{children}<Icon name={external ? "external" : "arrow"} size={17} /></>;
  return external
    ? <a className="text-link" href={href} target="_blank" rel="noreferrer">{content}</a>
    : <Link className="text-link" href={href}>{content}</Link>;
}
