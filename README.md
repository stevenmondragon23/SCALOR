# SCALOR ACADEMY — Sitio de la Escuela de Administración Aplicada

Landing page estática construida con **Next.js 14 (App Router)**, **React** y
**Tailwind CSS**. Presenta la definición institucional, la arquitectura por
niveles, la estructura de cada curso (La Ciencia / El Arte), la malla
curricular completa (51 cursos) y el modelo pedagógico de SCALOR ACADEMY.

No usa base de datos: todo el contenido vive en `data/curriculum.ts`.

## Requisitos

- Node.js 18.18 o superior
- npm (o pnpm/yarn si prefieres)

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura del proyecto

```
app/
  layout.tsx        → fuentes (Fraunces, IBM Plex Sans, IBM Plex Mono) y metadata
  page.tsx           → ensambla todas las secciones
  globals.css        → estilos base, textura de papel cuadriculado
components/
  Nav.tsx                    → navegación tipo pestañas de libro contable
  Hero.tsx                   → portada con la dualidad Ciencia / Arte
  InstitutionalDefinition.tsx→ sección 8.1–8.3
  LevelsArchitecture.tsx     → sección 8.4 (4 niveles)
  CourseStructure.tsx        → sección 8.5–8.6
  Curriculum.tsx             → sección 9 (malla de 51 cursos, con pestañas)
  PedagogicalModel.tsx       → sección 10 (modelo, evaluación, calidad)
  Footer.tsx
data/
  curriculum.ts      → todo el contenido: niveles, cursos, evaluación, etc.
```

## Editar el contenido

Todo el texto de la malla curricular, niveles, evaluación y estándares de
calidad está en `data/curriculum.ts`. Para actualizar un curso, un nivel o
agregar nuevos, solo edita ese archivo — el resto del sitio se actualiza
automáticamente.

## Desplegar en Vercel

**Opción A — desde GitHub (recomendada):**

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com/new e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no necesitas configurar nada.
4. Haz clic en "Deploy".

**Opción B — con Vercel CLI:**

```bash
npm i -g vercel
vercel
```

Sigue las instrucciones en pantalla (login, nombre de proyecto, confirmar
directorio). Al terminar obtendrás una URL de producción.

## Próximos pasos posibles

- Agregar contenido real de cada curso (videos, plantillas) cuando exista.
- Conectar una base de datos (ej. Supabase/Postgres) si más adelante quieres
  cuentas de usuario, progreso o certificados emitidos dinámicamente.
- Agregar formulario de contacto o lista de espera.
