import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer, MobileActions } from "@/components/site-shell";
import { BUSINESS_SCHEMA, PHOTO_ASSETS, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const description = "Tienda de mascotas y peluquería para mascotas en Santa Cruz de Tenerife. Alimentación, higiene, accesorios y cuidado con atención directa.";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    BUSINESS_SCHEMA,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mascotas Tenerife | Tienda y peluquería en Santa Cruz",
    template: "%s | Mascotas Tenerife",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: "Mascotas Tenerife | Tienda y peluquería en Santa Cruz",
    description,
    url: `${SITE_URL}/`,
    images: [{
      url: PHOTO_ASSETS.hero.src,
      width: 1200,
      height: 630,
      alt: "Fotografía ilustrativa de un perro durante una sesión de peluquería canina.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mascotas Tenerife | Tienda y peluquería en Santa Cruz",
    description,
    images: [PHOTO_ASSETS.hero.src],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <MobileActions />
      </body>
    </html>
  );
}
