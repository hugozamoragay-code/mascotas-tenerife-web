import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages = [
  { path: "/", priority: 1 },
  { path: "/servicios/", priority: 0.9 },
  { path: "/peluqueria-para-mascotas/", priority: 0.9 },
  { path: "/tienda/", priority: 0.85 },
  { path: "/sobre-nosotros/", priority: 0.65 },
  { path: "/galeria/", priority: 0.6 },
  { path: "/contacto/", priority: 0.85 },
  { path: "/aviso-legal/", priority: 0.2 },
  { path: "/politica-de-privacidad/", priority: 0.2 },
  { path: "/politica-de-cookies/", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
