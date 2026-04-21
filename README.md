# AlgaeTree Website

Marketing site for AlgaeTree built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Routes

- `/` home page
- `/technology` technology page
- `/about` about page

## Project Structure

- `app/` route files and page sections
- `app/components/` shared UI such as header, footer, and buttons
- `app/components/sections/technology/` technology page sections
- `app/components/sections/about/` about page sections
- `public/figma/` exported design assets downloaded from Figma MCP

## Notes

- The About page is implemented against the Figma source for both desktop and mobile variants.
- Assets used by the About page are stored under `public/figma/about/` and `public/figma/about/mobile/`.
- The selected mobile Figma frame does not expose prototype animation data through MCP, so the page matches the static design rather than inventing non-source interactions.
