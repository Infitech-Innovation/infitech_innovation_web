# Infitech Innovation Web

Infitech Innovation Web is a multilingual Next.js App Router website for Infitech Innovation. It presents the brand home page and service pages for digital transformation, ERP SaaS, custom development, AI automation, marketing, innovation, and chatbot offerings.

## 🧰 Tech Stack

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/next--intl-1E293B?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next-intl" />
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide React" />
</p>

| Tool | Purpose |
|---|---|
| ⚫ Next.js 16 | React framework with App Router |
| ⚛️ React 19 | UI library |
| 🔷 TypeScript | Static typing |
| 🎨 Tailwind CSS 4 | Utility-first styling |
| 🌍 next-intl | Internationalization and localized routing |
| 🔄 TanStack Query | Server state and data fetching |
| 🌐 Axios | HTTP client |
| ✨ Lucide React | Icon library |

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

The middleware redirects or resolves locale-prefixed routes such as:

```text
/en
/fr
/sw
/de
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| 🧪 `npm run dev` | Start the local development server |
| 🏗️ `npm run build` | Build the production app |
| ▶️ `npm run start` | Start the production server |
| 🔍 `npm run lint` | Run ESLint |

## 🌍 Internationalization

This project uses `next-intl` with locale-prefixed routing.

Supported locales:

- `en` - English
- `fr` - French
- `sw` - Swahili
- `de` - German

Important files:

| File | Purpose |
|---|---|
| 🧭 `i18n/routing.ts` | Locale list, default locale, localized pathname map, and locale-aware navigation exports |
| 📥 `i18n/request.ts` | Loads request messages for the active locale |
| 🚦 `proxy.ts` | Applies `next-intl` middleware routing |
| 🗣️ `messages/*.json` | Translation messages for each locale |
| 🧱 `app/[locale]/layout.tsx` | Locale layout, providers, metadata, and static locale params |

### 🗺️ Localized Pathnames

The app keeps one internal pathname per route and maps it to public localized URLs in `i18n/routing.ts`.

Example:

```ts
"/digital-transform": {
  en: "/digital-transform",
  fr: "/transformation-numerique",
  sw: "/mageuzi-ya-kidijitali",
  de: "/digitale-transformation"
}
```

Components should link to the internal pathname:

```tsx
<Link href="/digital-transform">...</Link>
```

Because `Link` is exported from `@/i18n/routing`, `next-intl` generates the correct public URL for the active locale.

## ⚡ Static Rendering

Locale pages use `generateStaticParams()` and `setRequestLocale(locale)` so known locale routes are prerendered during build.

Expected build output for the home route:

```text
● /[locale]
  ├ /en
  ├ /fr
  ├ /sw
  └ /de
```

`Proxy (Middleware)` remains dynamic by design because middleware runs per request.

## 📁 Project Structure

```text
app/
  [locale]/
    layout.tsx
    page.tsx
    (web)/
      ai-automation-booking/
      chatbot/
      custom-develop/
      digital-transform/
      erp-saas/
      innovation/
      marketing/
  robots.ts
  sitemap.ts
components/
  common/
    comming-soon.tsx
  layout/
    navbar/
      NavBar.tsx
features/
  home/
    HomePage.tsx
i18n/
  request.ts
  routing.ts
messages/
  de.json
  en.json
  fr.json
  sw.json
styles/
  globals.css
```

## 🎨 Design System

The Infitech palette is defined as CSS variables and Tailwind theme colors in `styles/globals.css`.

Current palette:

```text
#fefffe
#000000
#1cf0e8
#ffa500
#40e0d0
#c8c871
#f6b216
```

Use the shared Tailwind color tokens, for example:

```tsx
className="bg-infitech-surface text-infitech-ink border-infitech-olive"
```

## 🔐 Environment Variables

Create `.env.local` from `.env.example` and set:

```text
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` is used for metadata URL generation.

## ✅ Validation Notes

Run these before handing off changes:

```bash
npm run lint
npm run build
```

In restricted environments, `next build` may need network access to fetch Google font files used by `next/font`.

## 📄 License

Proprietary. Infitech Innovation.
