import Link from "next/link";
import { site } from "@/lib/site";
export default function Footer(){return <footer className="footer"><div className="shell footer-grid"><div><strong>{site.name}</strong><p>{site.tagline}</p></div><div><span>Servicios</span>{site.services.map(s=><Link key={s.slug} href={`/servicios/${s.slug}`}>{s.nav}</Link>)}</div><div><span>Zona demo</span><p>{site.city}</p><Link href="/contacto">Contacto</Link></div></div><div className="shell footer-bottom">© {new Date().getFullYear()} {site.name}. Plantilla demo preparada para personalizar.</div></footer>}
