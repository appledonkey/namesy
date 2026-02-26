# Namesy

**Namesy** is a baby name discovery app: swipe through names, see meanings and origins, preview full names with your surname, and (optionally) match names with a partner on the same device.

- [Live on GitHub Pages](https://appledonkey.github.io/namesy/)
- [Repository](https://github.com/appledonkey/namesy)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No account or API keys required; everything runs in the browser with localStorage.

## Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm run dev`  | Start dev server (port 3000) |
| `npm run build`| Static export → `out/`      |
| `npm run start`| Serve production build     |
| `npm run lint` | Run ESLint                 |
| `npm test`     | Run Vitest                 |

## Deploy to GitHub Pages

The app is set up to deploy to **https://&lt;username&gt;.github.io/namesy/** via GitHub Actions.

1. **Enable GitHub Pages (Actions)**
   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Push to `main`**
   - Each push to `main` runs the workflow, builds the static site with base path `/namesy`, and deploys to GitHub Pages.
   - After the first successful run, the site is available at:
     - **https://appledonkey.github.io/namesy/**

3. **Manual run**
   - **Actions → Deploy to GitHub Pages → Run workflow** (no need to push)

Local builds (`npm run build`) do not use the base path, so they work as usual for Vercel, Capacitor, or local static hosting.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**
- State: **localStorage** (no backend)
- Deploy: **GitHub Pages** or **Vercel**

## License

Private / unlicensed unless stated otherwise.
