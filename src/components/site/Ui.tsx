import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { NEGOCIO } from "@/lib/negocio";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative z-10 mx-auto max-w-6xl px-4 py-10 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
      <h2 className="font-display text-3xl font-semibold tracking-tight">{title}</h2>
      {aside && <span className="text-sm text-muted-foreground">{aside}</span>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <Section className="pt-8">
      <div className="rise-in max-w-2xl">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-brand-deep">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </div>
    </Section>
  );
}

export function CallCta({
  text = "Llamar y preguntar",
  secondary,
}: {
  text?: string;
  secondary?: { to: string; label: string };
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${NEGOCIO.telefonoTel}`}
        className="rounded-xl bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glass)] transition-colors hover:bg-brand-deep"
      >
        {text}
      </a>
      {secondary && (
        <Link
          to={secondary.to}
          className="glass rounded-xl px-6 py-3 font-semibold text-ink transition-colors hover:bg-brand-soft"
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`text-accent ${className}`} aria-hidden="true">
      ★★★★<span className="text-muted">★</span>
    </span>
  );
}
