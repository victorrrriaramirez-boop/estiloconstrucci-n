import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.category} en ${site.city}`, template: `%s | ${site.name}` },
  description: "Obra nueva, rehabilitación y construcción residencial con seguimiento técnico de cada fase. Coordinamos estructura, envolvente, instalaciones y acabados dentro de un proceso común.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: site.name, title: `${site.name} | ${site.category} en ${site.city}`, description: "Obra nueva, rehabilitación y construcción residencial con seguimiento técnico de cada fase. Coordinamos estructura, envolvente, instalaciones y acabados dentro de un proceso común.", url: site.url },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
