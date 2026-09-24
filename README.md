# COTA Construcción — Next.js + Scrollytelling + SEO

Plantilla demo preparada para GitHub y Vercel. Incluye diseño premium responsive, scrollytelling con Framer Motion y estructura SEO multipágina.

## Qué incluye
- Next.js + TypeScript
- Framer Motion (`useScroll`, `useTransform`, `useSpring`)
- Scrollytelling sticky optimizado para móvil con `svh`
- Home + 3 páginas SEO de servicio + contacto
- Metadata única por URL, canonical y Open Graph
- Schema.org de negocio/servicio
- sitemap.xml y robots.txt
- Enlazado interno entre servicios
- Contenido redactado para intención de búsqueda, sin keyword stuffing
- Visuales propios realizados en CSS, sin imágenes externas

## Personalización rápida
Edita `lib/site.ts` para cambiar marca, ciudad, URL y datos generales. Los textos de la demo usan **Madrid** como zona de ejemplo. Antes de publicar, sustituye todos los datos ficticios y revisa el contenido para que refleje servicios reales.

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## GitHub
```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Después importa el repositorio desde Vercel.

## Nota SEO
La estructura técnica ayuda a indexación y relevancia, pero no garantiza posiciones. Para un proyecto real conviene sustituir los datos demo, añadir fotografías propias, casos reales, reseñas, información de empresa y ajustar la estrategia a la competencia y búsquedas de la zona.
