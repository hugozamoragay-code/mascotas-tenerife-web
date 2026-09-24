# Mascotas Tenerife · web local

Web en Next.js App Router para Mascotas Tenerife, tienda de mascotas y peluquería para mascotas en Santa Cruz de Tenerife.

## Fuentes públicas revisadas

- Web asociada al negocio: [mascotas-tenerife.com](https://www.mascotas-tenerife.com/).
- Página oficial de peluquería: [Peluquería para mascotas](https://www.mascotas-tenerife.com/peluqueria-para-mascotas/). La información indexada describe cepillado, baño, corte y stripping; también menciona perros, gatos dóciles, conejos y cobayas. La página disponible en buscadores aparece fechada en 2024; confirmar con el negocio qué detalles siguen vigentes antes de publicar.
- Perfil de Instagram localizado como oficial: [@mascotastenerife](https://www.instagram.com/mascotastenerife/). Su presentación pública menciona tienda especializada, peluquería canina, comida y accesorios.
- Perfil de Facebook localizado como oficial: [Mascotas Tenerife](https://www.facebook.com/MascotasTenerifeTienda/). Publica teléfono, dirección y el correo general `mascotastenerife@gmail.com`.
- Ficha pública de comercio local y directorios consultados para contrastar la ubicación, teléfono y actividad. Los directorios secundarios muestran horarios distintos; no se trasladaron a la web como horarios confirmados.
- La búsqueda pública de reseñas devuelve una valoración aproximada de 4,1/5 (con cifras de reseñas distintas entre listados). La web solo muestra la puntuación orientativa y enlaza a Google Maps; no incorpora citas ni testimonios. Confirmar la cifra directamente en Google Business antes de publicar.
- Las fotografías propias no pudieron verificarse ni descargarse de los perfiles oficiales. Las imágenes de la web son fotografías de recurso de Pexels con enlaces de crédito; no representan el local ni al equipo.

## Datos usados y pendientes

| Dato | Tratamiento en esta web |
| --- | --- |
| Mascotas Tenerife | Nombre público del negocio |
| C. Álvaro Rodríguez López, 16, 38005 Santa Cruz de Tenerife | Dirección publicada |
| 922 59 59 92 | Teléfono público, con enlace `tel:` |
| `mascotastenerife@gmail.com` | Email general publicado en el perfil de Facebook localizado |
| `citasmascotastenerife@gmail.com` | También figura en la página oficial de peluquería; confirmar cuál debe ser el email de citas/contacto antes del lanzamiento |
| Peluquería, alimentación, higiene y accesorios | Categorías anunciadas en la web/perfiles públicos; confirmar vigencia y disponibilidad |
| Horario | **Pendiente de confirmación directa.** Se omiten horas exactas debido a discrepancias entre fuentes |
| Marcas comerciales | No se publican; no se pudo confirmar un catálogo oficial y vigente |
| WhatsApp | No se añade. No se verificó un canal oficial independiente; el enlace de llamada usa únicamente el teléfono publicado |
| Razón social, NIF/CIF y datos registrales | **Pendientes de facilitar por el titular**; señalados en el aviso legal |
| Fotos del local/equipo | Pendientes de recibir del negocio con autorización de uso |

## Activar el envío del formulario

El endpoint `POST /api/contact` valida el formulario en el servidor, limita longitudes y solo transmite una consulta por email si se configuran estas variables en el entorno de despliegue:

- `RESEND_API_KEY`: clave privada de Resend.
- `RESEND_FROM_EMAIL`: remitente en un dominio verificado por Resend.
- `CONTACT_EMAIL_TO`: buzón de Mascotas Tenerife que recibirá las consultas.

Sin las tres variables, el endpoint responde `503 EMAIL_NOT_CONFIGURED`; la interfaz no muestra un éxito falso y ofrece el teléfono y el email directo. El endpoint no guarda las consultas en PostgreSQL ni registra el contenido enviado. Antes de activar el envío, el titular debe validar el proveedor, el destinatario, el aviso de privacidad y las condiciones de tratamiento aplicables.

## Checklist antes de publicación

1. Confirmar horario y días festivos con Mascotas Tenerife o con su perfil actual de Google Business.
2. Confirmar el email general y si `citasmascotastenerife@gmail.com` sigue siendo el canal para peluquería.
3. Confirmar la puntuación de Google si se desea mantener el dato 4,1/5.
4. Confirmar qué especies, técnicas y cuidados de peluquería siguen ofreciéndose actualmente.
5. Completar razón social, titular, NIF/CIF y datos registrales que correspondan; revisar el aviso legal y las políticas con el titular.
6. Configurar y probar las tres variables de Resend si se va a habilitar el formulario. Sin configuración, mantener el aviso de contacto alternativo.
7. Sustituir las fotos ilustrativas por fotografías propias solo cuando el negocio las facilite y autorice su publicación.
8. Confirmar cualquier marca o referencia antes de añadirla al catálogo descriptivo.

## Implementación

- Next.js App Router + TypeScript.
- CSS responsive propio y componentes reutilizables.
- Imágenes remotas de Pexels servidas a través de `next/image` con formatos AVIF/WebP cuando estén disponibles.
- Schema.org `PetStore`, `WebSite`, `Service` y `BreadcrumbList`; no se incluyen horarios ni precios no verificados.
- `sitemap.xml`, `robots.txt`, canonical por página, Open Graph y Twitter cards.
- El iframe de Google Maps solo se inserta al pulsar “Cargar mapa”; los enlaces de teléfono, correo y cómo llegar están disponibles sin cargar el mapa.
