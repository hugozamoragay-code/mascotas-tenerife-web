import { createFileRoute } from "@tanstack/react-router";

const paths = [
  "/",
  "/servicios",
  "/peluqueria",
  "/tienda",
  "/sobre-nosotros",
  "/galeria",
  "/contacto",
  "/aviso-legal",
  "/politica-privacidad",
  "/politica-cookies",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq><priority>${
                p === "/" ? "1.0" : "0.7"
              }</priority></url>`,
          )
          .join("\n");

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
          { headers: { "content-type": "application/xml; charset=utf-8" } },
        );
      },
    },
  },
});
