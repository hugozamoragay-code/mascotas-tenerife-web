import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "phone"
  | "pin"
  | "paw"
  | "scissors"
  | "bowl"
  | "sparkle"
  | "clock"
  | "mail"
  | "instagram"
  | "facebook"
  | "external"
  | "check"
  | "menu"
  | "close";

export function Icon({
  name,
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };

  switch (name) {
    case "arrow":
      return <svg {...shared}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "phone":
      return <svg {...shared}><path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.6 2 2 0 0 1 3.1 1.4h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" /></svg>;
    case "pin":
      return <svg {...shared}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "paw":
      return <svg {...shared}><ellipse cx="5.5" cy="8" rx="2" ry="2.8" transform="rotate(-25 5.5 8)" /><ellipse cx="10.2" cy="5.7" rx="2" ry="2.8" transform="rotate(-8 10.2 5.7)" /><ellipse cx="15" cy="6.5" rx="2" ry="2.8" transform="rotate(12 15 6.5)" /><ellipse cx="19" cy="10" rx="1.8" ry="2.5" transform="rotate(28 19 10)" /><path d="M12 11c-3.7 0-7 3.7-7 6.7 0 2.1 1.5 3.4 3.5 3.4 1.3 0 2.2-.8 3.5-.8s2.2.8 3.5.8c2 0 3.5-1.3 3.5-3.4 0-3-3.3-6.7-7-6.7Z" /></svg>;
    case "scissors":
      return <svg {...shared}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="m8.1 8.1 12 12M8.1 15.9l5.4-5.4M14 8l6-6" /></svg>;
    case "bowl":
      return <svg {...shared}><path d="M3 12h18l-1.6 7a2 2 0 0 1-2 1.5H6.6a2 2 0 0 1-2-1.5L3 12Z" /><path d="M5 12c.5-4.1 3.4-6.5 7-6.5s6.5 2.4 7 6.5M8 4l1.3 1.5M16 4l-1.3 1.5" /></svg>;
    case "sparkle":
      return <svg {...shared}><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 2l.6 1.4L7 4l-1.4.6L5 6l-.6-1.4L3 4l1.4-.6L5 2Z" /></svg>;
    case "clock":
      return <svg {...shared}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
    case "mail":
      return <svg {...shared}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case "instagram":
      return <svg {...shared}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
    case "facebook":
      return <svg {...shared}><path d="M14 21v-8h3l.5-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.9V3.8c-.4-.1-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H8v3h2.6v8H14Z" /></svg>;
    case "external":
      return <svg {...shared}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>;
    case "menu":
      return <svg {...shared}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close":
      return <svg {...shared}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  }
}
