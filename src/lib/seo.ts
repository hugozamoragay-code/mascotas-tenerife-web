import type { Metadata } from "next";
import { PHOTO_ASSETS, SITE_NAME, SITE_URL } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url: canonicalUrl,
      images: [{
        url: PHOTO_ASSETS.hero.src,
        width: 1200,
        height: 630,
        alt: "Fotografía ilustrativa de un perro durante una sesión de peluquería canina.",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [PHOTO_ASSETS.hero.src],
    },
  };
}
