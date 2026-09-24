"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap">
    <nav className="nav shell" aria-label="Principal">
      <Link href="/" className="brand">{site.name}</Link>
      <button className="menu-btn" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>Menú</button>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/#story" onClick={()=>setOpen(false)}>Proceso</Link>
        {site.services.map((s)=><Link key={s.slug} href={`/servicios/${s.slug}`} onClick={()=>setOpen(false)}>{s.nav.replace(` en ${site.city}`,"")}</Link>)}
        <Link className="nav-cta" href="/contacto" onClick={()=>setOpen(false)}>Contacto</Link>
      </div>
    </nav>
  </header>
}
