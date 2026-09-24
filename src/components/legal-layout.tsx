import type { ReactNode } from "react";
import { PageIntro } from "@/components/site-shell";
import { Icon } from "@/components/icons";

export function LegalPage({
  path,
  breadcrumb,
  title,
  lead,
  children,
}: {
  path: string;
  breadcrumb: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageIntro path={path} breadcrumb={breadcrumb} eyebrow="Información del sitio web" title={title} lead={lead} />
      <section className="legal-section">
        <div className="container legal-content">
          <div className="legal-notice"><Icon name="clock" size={19} /><p><strong>Documento informativo pendiente de revisión por el titular.</strong> Los campos no confirmados deben completarse antes de publicar la web definitiva.</p></div>
          {children}
        </div>
      </section>
    </>
  );
}
