# Web del doctor (Next.js)

Sitio informativo para un doctor: presentación, especialidades y contacto.

## Comandos

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Abrir `http://localhost:3000`.

## Estructura

- `src/app/(site)/`: rutas públicas (`/`, `/sobre-mi`, `/especialidades`, `/contacto`, etc.)
- `src/app/api/contacto/route.ts`: endpoint `POST /api/contacto` (placeholder, sin envío real aún)
- `src/components/`: componentes UI (header/footer/form)
- `src/content/`: datos de contenido (ej. `src/content/especialidades.ts`)
- `src/lib/site.ts`: configuración del sitio (nombre, contacto, ubicación)

## Personalización rápida

- Edita `src/lib/site.ts` para cambiar nombre, horarios, ubicación y datos de contacto.
- Edita `src/content/especialidades.ts` para cambiar especialidades y descripciones.

## Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS
