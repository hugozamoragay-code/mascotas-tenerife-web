"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { BUSINESS, FORM_TOPICS } from "@/lib/site";
import { Icon } from "@/components/icons";

type FormState = "idle" | "sending" | "sent" | "unavailable" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { ok?: boolean; code?: string };

      if (response.ok && result.ok) {
        form.reset();
        setState("sent");
      } else if (result.code === "EMAIL_NOT_CONFIGURED") {
        setState("unavailable");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">Nombre</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
        <div className="field">
          <label htmlFor="contact-phone">Teléfono <span>(opcional)</span></label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </div>
        <div className="field">
          <label htmlFor="contact-topic">Motivo de consulta</label>
          <select id="contact-topic" name="topic" defaultValue="" required>
            <option value="" disabled>Selecciona una opción</option>
            {FORM_TOPICS.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea id="contact-message" name="message" rows={5} minLength={10} maxLength={3000} required />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-website">No rellenar</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <label className="privacy-check">
        <input name="privacyAccepted" type="checkbox" value="yes" required />
        <span>He leído la <Link href="/politica-de-privacidad/">política de privacidad</Link> y autorizo el uso de estos datos para responder a mi consulta.</span>
      </label>
      <button type="submit" className="btn btn-primary form-submit" disabled={state === "sending"}>
        {state === "sending" ? "Enviando…" : "Enviar consulta"}
        {state === "sending" ? null : <Icon name="arrow" size={18} />}
      </button>
      <p className="form-privacy-note">No incluyas información sensible. La consulta solo se remite por email cuando el servicio del negocio está configurado; sin él, no se almacena ni se entrega.</p>
      <div className="form-feedback" aria-live="polite" role="status">
        {state === "sent" && <p className="form-success"><Icon name="check" size={18} /> Tu consulta se ha enviado. Gracias por contactar.</p>}
        {state === "unavailable" && (
          <p className="form-warning">El envío online aún no está activado. Para contactar ahora, llama al <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phoneDisplay}</a> o escribe a <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
        )}
        {state === "error" && <p className="form-warning">No se ha podido enviar la consulta. Inténtalo de nuevo o contacta por teléfono o email.</p>}
      </div>
    </form>
  );
}
