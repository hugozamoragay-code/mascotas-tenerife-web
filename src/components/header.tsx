"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BUSINESS, NAV_ITEMS } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Brand } from "@/components/brand";

function normalisePath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav id="main-navigation" className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const current = normalisePath(pathname) === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className="header-call" href={`tel:${BUSINESS.phoneHref}`}>
          <Icon name="phone" size={16} /><span>Llamar</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
