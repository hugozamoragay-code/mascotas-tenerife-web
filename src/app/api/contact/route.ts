import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

const allowedTopics = new Set([
  "Peluquería para mascotas",
  "Alimentación",
  "Higiene y accesorios",
  "Otra consulta",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const singleLine = (value: unknown) => typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: "INVALID_BODY" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, code: "INVALID_BODY" }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  // A quiet honeypot response discourages basic automated spam without storing data.
  if (singleLine(fields.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = singleLine(fields.name);
  const email = singleLine(fields.email);
  const phone = singleLine(fields.phone);
  const topic = singleLine(fields.topic);
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const privacyAccepted = fields.privacyAccepted === "yes" || fields.privacyAccepted === true;

  const phoneIsValid = !phone || /^[+()\d\s.-]{6,40}$/.test(phone);
  if (
    name.length < 2 || name.length > 100 ||
    email.length > 254 || !emailPattern.test(email) ||
    !phoneIsValid ||
    !allowedTopics.has(topic) ||
    message.length < 10 || message.length > 3000 ||
    !privacyAccepted
  ) {
    return NextResponse.json({ ok: false, code: "VALIDATION_ERROR" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !sender || !recipient) {
    return NextResponse.json({ ok: false, code: "EMAIL_NOT_CONFIGURED" }, { status: 503 });
  }

  const text = [
    "Nueva consulta desde la web de Mascotas Tenerife",
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone || "No indicado"}`,
    `Motivo: ${topic}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  try {
    const providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Consulta web: ${topic}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!providerResponse.ok) {
      console.error("[contact] Email provider returned status", providerResponse.status);
      return NextResponse.json({ ok: false, code: "EMAIL_SEND_FAILED" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, code: "EMAIL_SEND_FAILED" }, { status: 502 });
  }
}
