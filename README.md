# David Agbor's portfolio

A React portfolio built with the Next.js App Router. Soft grey panels and lilac accents frame an interactive creative playground instead of a portrait. Switch between its interface and code views. The phone layout includes touch-friendly navigation and filters, full-width cards, and readable contact fields.

Motion includes a staggered name entrance, orbiting geometry, floating notes, desktop pointer tilt, scroll reveals, and animated project filtering. The motion control pauses all effects; the site also respects the device's reduced-motion preference. The portrait is kept in the previous-version backup, outside the public site assets.

## Run locally

Use Node.js 20.9 or newer. In this folder, run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. This is a Next.js project: edit the React files rather than opening an index.html file directly.

## Build and preview

```sh
npm run build
npm start
```

The build exports the website to `out/`. You can deploy the source using a Next.js project on Vercel, or deploy the contents of `out/` to a static host. For Netlify, use `npm run build` as the build command and `out` as the publish directory.

## Edit the portfolio

- `app/page.jsx`: page composition.
- `app/globals.css`: visual design, including phone and tablet layouts.
- `app/creative.css`: the creative playground, transitions, and responsive refinements.
- `components/Hero.jsx`: introduction.
- `components/DeveloperShowcase.jsx`: interactive design/code scene and desktop pointer response.
- `components/MotionProvider.jsx`: global pause control and reduced-motion preference.
- `components/Sections.jsx`: about, services, skills, experience, and process.
- `components/portfolio-data.js`: project names, descriptions, links, and images.
- `components/Navigation.jsx`: responsive menu and active section tracking.
- `components/Projects.jsx`: React project filtering.
- `components/Contact.jsx`: social links and contact introduction.
- `components/ContactForm.jsx`: contact fields and submission feedback.
- `public/images/`: project screenshots.

Fonts and icons are bundled locally. The existing Formspree endpoint is preserved; sending a message requires an internet connection. No real contact message was sent during development.

Your tutor cover was not included as a teaching or instructor role. The pre-migration HTML, CSS, and script are backed up separately.

Reference: [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).

