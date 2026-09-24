"use client";

import { useState } from "react";
import { MAPS_EMBED_URL, MAPS_URL, BUSINESS } from "@/lib/site";
import { Icon } from "@/components/icons";

export function MapPanel() {
  const [mapLoaded, setMapLoaded] = useState(false);

  if (mapLoaded) {
    return (
      <div className="map-panel map-panel--loaded">
        <iframe
          src={MAPS_EMBED_URL}
          title={`Mapa de Mascotas Tenerife en ${BUSINESS.addressFull}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="map-panel map-panel--placeholder">
      <div className="map-placeholder-art" aria-hidden="true">
        <span className="map-line map-line--one" />
        <span className="map-line map-line--two" />
        <span className="map-line map-line--three" />
        <span className="map-green" />
        <span className="map-pin"><Icon name="pin" size={28} /></span>
      </div>
      <div className="map-consent-card">
        <span className="map-kicker"><Icon name="pin" size={15} /> Santa Cruz de Tenerife</span>
        <h3>{BUSINESS.streetAddress}</h3>
        <p>El mapa de Google solo se carga si lo solicitas. Al hacerlo, Google puede recibir datos del navegador.</p>
        <div className="map-actions">
          <button type="button" className="btn btn-primary btn-small" onClick={() => setMapLoaded(true)}>Cargar mapa</button>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="map-open-link">Abrir Google Maps <Icon name="external" size={15} /></a>
        </div>
      </div>
    </div>
  );
}
