# AiGenix marketing site

Angular 19 standalone application with Tailwind CSS v4, structured as feature and shared UI components. Brand assets live in `public/brand/` (copied from the reference `Website images` folder).

## Development server

```bash
npm start
```

Open `http://localhost:4200/`.

## Building

```bash
npm run build
```

Output is written to `dist/aigenix-web`.

## Editing copy

Homepage sections read from [`src/app/features/home/home.content.ts`](src/app/features/home/home.content.ts). Update that file to change headlines, case study text, and CTAs without touching templates.

## Project layout

- `src/app/core/` — `SeoService` for page title and meta description.
- `src/app/shared/layout/` — `MainLayoutComponent`, header, footer.
- `src/app/shared/ui/` — Reusable presentational components (button, card, logo, section heading).
- `src/app/features/home/` — Home page and section components.
- `src/app/features/stub-page/` — Placeholder pages for primary navigation routes.

## Tests

```bash
ng test
```
