/**
 * Datos del negocio verificados en fuentes públicas (Páginas Amarillas, QDQ,
 * Santa Cruz es Comercio, Infobel) y en el material facilitado por el cliente.
 * Cualquier dato no confirmado NO debe añadirse aquí.
 */
export const NEGOCIO = {
  nombre: "Mascotas Tenerife",
  descripcion:
    "Tienda de mascotas y peluquería canina y felina en Santa Cruz de Tenerife.",
  calle: "C. Álvaro Rodríguez López, 16",
  cp: "38005",
  ciudad: "Santa Cruz de Tenerife",
  region: "Tenerife, Canarias",
  telefonoTexto: "922 59 59 92",
  telefonoTel: "+34922595992",
  email: "mascotastenerife@gmail.com",
  webActual: "https://www.mascotas-tenerife.com/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mascotas+Tenerife%2C+C.+%C3%81lvaro+Rodr%C3%ADguez+L%C3%B3pez+16%2C+38005+Santa+Cruz+de+Tenerife",
  mapaEmbed:
    "https://www.google.com/maps?q=C.%20%C3%81lvaro%20Rodr%C3%ADguez%20L%C3%B3pez%2016%2C%2038005%20Santa%20Cruz%20de%20Tenerife&output=embed",
  resenasUrl:
    "https://www.google.com/search?q=Mascotas+Tenerife+Santa+Cruz+de+Tenerife+rese%C3%B1as",
  valoracion: "4,1",
  numResenas: 278,
  instagram: "https://www.instagram.com/mascotastenerife",
  facebook: "https://www.facebook.com/MascotasTenerifeTienda",
  horario: {
    laborables: "10:00 – 14:00 y 16:00 – 20:30",
    dias: "Lunes a sábado",
    domingo: "Cerrado",
  },
  pagos: "Efectivo y tarjeta (TPV)",
  marcas: ["Royal Canin", "Affinity", "Advance", "Libra", "Hill's", "Acana"],
} as const;

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/peluqueria", label: "Peluquería" },
  { to: "/tienda", label: "Tienda" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
] as const;
