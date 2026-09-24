import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Ui";
import { NEGOCIO } from "@/lib/negocio";

const titulo = "Contacto | Mascotas Tenerife";
const descripcion =
  "Teléfono, email, dirección y horario de Mascotas Tenerife en Santa Cruz de Tenerife. Escríbenos tu consulta.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
    ],
  }),
  component: Contacto,
});

type Campos = {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  mensaje: string;
};

const inicial: Campos = {
  nombre: "",
  email: "",
  telefono: "",
  motivo: "Peluquería",
  mensaje: "",
};

function Contacto() {
  const [valores, setValores] = useState<Campos>(inicial);
  const [errores, setErrores] = useState<Partial<Record<keyof Campos, string>>>({});

  const campoClase =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

  function validar(v: Campos) {
    const e: Partial<Record<keyof Campos, string>> = {};
    if (v.nombre.trim().length < 2) e.nombre = "Indica tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Escribe un email válido.";
    if (v.telefono.trim() && !/^[+\d\s()-]{7,}$/.test(v.telefono))
      e.telefono = "Revisa el teléfono.";
    if (v.mensaje.trim().length < 10) e.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
    return e;
  }

  function enviar(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validar(valores);
    setErrores(e);
    if (Object.keys(e).length > 0) return;

    const cuerpo = [
      `Nombre: ${valores.nombre}`,
      `Email: ${valores.email}`,
      `Teléfono: ${valores.telefono || "(no indicado)"}`,
      `Motivo: ${valores.motivo}`,
      "",
      valores.mensaje,
    ].join("\n");

    window.location.href = `mailto:${NEGOCIO.email}?subject=${encodeURIComponent(
      `Consulta web: ${valores.motivo}`,
    )}&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablamos cuando quieras"
        intro="Lo más rápido es llamarnos en horario de tienda. También puedes enviarnos tu consulta por email."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-2xl font-semibold">Datos de contacto</h2>
            <ul className="mt-5 grid gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-brand-deep" aria-hidden="true" />
                <address className="not-italic text-muted-foreground">
                  {NEGOCIO.nombre}
                  <br />
                  {NEGOCIO.calle}
                  <br />
                  {NEGOCIO.cp} {NEGOCIO.ciudad}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-brand-deep" aria-hidden="true" />
                <a href={`tel:${NEGOCIO.telefonoTel}`} className="hover:text-brand-deep">
                  {NEGOCIO.telefonoTexto}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-brand-deep" aria-hidden="true" />
                <a href={`mailto:${NEGOCIO.email}`} className="hover:text-brand-deep">
                  {NEGOCIO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-3">
                <p className="font-semibold">Lunes a sábado</p>
                <p className="text-muted-foreground">{NEGOCIO.horario.laborables}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                <p className="font-semibold">Domingo</p>
                <p className="text-muted-foreground">Cerrado</p>
              </div>
            </div>

            <iframe
              title="Mapa de Mascotas Tenerife"
              src={NEGOCIO.mapaEmbed}
              loading="lazy"
              className="mt-6 aspect-[16/10] w-full rounded-2xl border border-border"
            />
            <a
              href={NEGOCIO.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep"
            >
              Cómo llegar
            </a>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="font-display text-2xl font-semibold">Envíanos tu consulta</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Al enviar, se abrirá tu programa de correo con el mensaje listo para{" "}
              {NEGOCIO.email}. Todavía no hay servidor de correo conectado a la web.
            </p>
            <form className="mt-5 space-y-4" onSubmit={enviar} noValidate>
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="nombre"
                  className={campoClase}
                  value={valores.nombre}
                  onChange={(e) => setValores({ ...valores, nombre: e.target.value })}
                  aria-invalid={Boolean(errores.nombre)}
                />
                {errores.nombre && (
                  <p className="mt-1 text-xs text-destructive">{errores.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={campoClase}
                  value={valores.email}
                  onChange={(e) => setValores({ ...valores, email: e.target.value })}
                  aria-invalid={Boolean(errores.email)}
                />
                {errores.email && (
                  <p className="mt-1 text-xs text-destructive">{errores.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className={campoClase}
                  value={valores.telefono}
                  onChange={(e) => setValores({ ...valores, telefono: e.target.value })}
                  aria-invalid={Boolean(errores.telefono)}
                />
                {errores.telefono && (
                  <p className="mt-1 text-xs text-destructive">{errores.telefono}</p>
                )}
              </div>

              <div>
                <label htmlFor="motivo" className="mb-1.5 block text-sm font-medium">
                  Motivo de consulta
                </label>
                <select
                  id="motivo"
                  className={campoClase}
                  value={valores.motivo}
                  onChange={(e) => setValores({ ...valores, motivo: e.target.value })}
                >
                  <option>Peluquería</option>
                  <option>Alimentación</option>
                  <option>Accesorios e higiene</option>
                  <option>Otra consulta</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className={campoClase}
                  value={valores.mensaje}
                  onChange={(e) => setValores({ ...valores, mensaje: e.target.value })}
                  aria-invalid={Boolean(errores.mensaje)}
                />
                {errores.mensaje && (
                  <p className="mt-1 text-xs text-destructive">{errores.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-brand-deep"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
