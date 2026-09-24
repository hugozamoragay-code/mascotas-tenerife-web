export const SITE_URL = "https://www.mascotas-tenerife.com";
export const SITE_NAME = "Mascotas Tenerife";

export const BUSINESS = {
  name: SITE_NAME,
  phoneDisplay: "922 59 59 92",
  phoneHref: "+34922595992",
  email: "mascotastenerife@gmail.com",
  streetAddress: "C. Álvaro Rodríguez López, 16",
  postalCode: "38005",
  addressLocality: "Santa Cruz de Tenerife",
  addressRegion: "Santa Cruz de Tenerife",
  country: "ES",
  addressFull: "C. Álvaro Rodríguez López, 16, 38005 Santa Cruz de Tenerife, Tenerife, España",
  websiteDisplay: "mascotas-tenerife.com",
  hoursNotice: "Horario pendiente de confirmar directamente con el negocio.",
} as const;

const mapQuery = "Mascotas Tenerife, C. Álvaro Rodríguez López, 16, 38005 Santa Cruz de Tenerife, Tenerife, España";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?${new URLSearchParams({ q: mapQuery, z: "16", output: "embed" }).toString()}`;

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/mascotastenerife/" },
  { label: "Facebook", href: "https://www.facebook.com/MascotasTenerifeTienda/" },
] as const;

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Peluquería", href: "/peluqueria-para-mascotas/" },
  { label: "Tienda", href: "/tienda/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros/" },
  { label: "Galería", href: "/galeria/" },
  { label: "Contacto", href: "/contacto/" },
] as const;

export const PHOTO_ASSETS = {
  hero: {
    src: "https://images.pexels.com/photos/19145876/pexels-photo-19145876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1500&h=1300",
    alt: "Fotografía de recurso de un perro durante una sesión de peluquería canina.",
    credit: "Goochie Poochie Grooming · Pexels",
    creditUrl: "https://www.pexels.com/photo/dog-getting-professional-haircut-19145876/",
  },
  grooming: {
    src: "https://images.pexels.com/photos/19145874/pexels-photo-19145874.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de un perro en una peluquería para mascotas.",
    credit: "Goochie Poochie Grooming · Pexels",
    creditUrl: "https://www.pexels.com/photo/a-dog-in-a-pet-salon-19145874/",
  },
  bath: {
    src: "https://images.pexels.com/photos/19145881/pexels-photo-19145881.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de un perro durante el baño en una peluquería.",
    credit: "Goochie Poochie Grooming · Pexels",
    creditUrl: "https://www.pexels.com/photo/washing-dog-at-saloon-19145881/",
  },
  brush: {
    src: "https://images.pexels.com/photos/19145894/pexels-photo-19145894.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de un perro mientras le cepillan el pelo.",
    credit: "Goochie Poochie Grooming · Pexels",
    creditUrl: "https://www.pexels.com/photo/dog-being-brushed-19145894/",
  },
  cat: {
    src: "https://images.pexels.com/photos/6131099/pexels-photo-6131099.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de un gato durante un cuidado de peluquería.",
    credit: "Tima Miroshnichenko · Pexels",
    creditUrl: "https://www.pexels.com/photo/grooming-of-cat-by-a-professional-groomer-6131099/",
  },
  shop: {
    src: "https://images.pexels.com/photos/37559533/pexels-photo-37559533.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de collares y accesorios para mascotas en una tienda.",
    credit: "Fidel Gallaga · Pexels",
    creditUrl: "https://www.pexels.com/photo/pet-shop-leather-collars-display-with-vendor-37559533/",
  },
  food: {
    src: "https://images.pexels.com/photos/34952074/pexels-photo-34952074.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900",
    alt: "Fotografía de recurso de alimento seco para mascotas.",
    credit: "Rafael Rodrigues · Pexels",
    creditUrl: "https://www.pexels.com/photo/close-up-of-brown-dry-pet-food-kibble-34952074/",
  },
  portrait: {
    src: "https://images.pexels.com/photos/11380220/pexels-photo-11380220.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200",
    alt: "Fotografía de recurso de un caniche blanco con el pelo arreglado.",
    credit: "Anna Bondarenko · Pexels",
    creditUrl: "https://www.pexels.com/photo/adorable-white-poodle-puppy-11380220/",
  },
} as const;

export const FORM_TOPICS = [
  "Peluquería para mascotas",
  "Alimentación",
  "Higiene y accesorios",
  "Otra consulta",
] as const;

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.phoneHref,
  email: BUSINESS.email,
  description: "Tienda de mascotas y peluquería para mascotas en Santa Cruz de Tenerife.",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.country,
  },
  sameAs: SOCIALS.map((social) => social.href),
};
