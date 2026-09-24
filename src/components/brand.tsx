import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { Icon } from "@/components/icons";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand--inverse" : ""}`} href="/" aria-label={`${BUSINESS.name}, inicio`}>
      <span className="brand-mark"><Icon name="paw" size={24} /></span>
      <span className="brand-copy">
        <span className="brand-name">mascotas</span>
        <span className="brand-place">TENERIFE</span>
      </span>
    </Link>
  );
}
