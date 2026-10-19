# Video Editor and Colorist Portfolio (Next.js)

A one-page portfolio with a before/after grade slider, work grid, services, about, and contact.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Needs Node 18.18 or newer.

## Make it yours

1. Open `data/content.js`. Your name, email, headline, projects, services, tools, quote, and links all live there.
2. Add images to `public/` and reference them from `content.js`:
   - `hero.beforeImage` and `hero.afterImage` for the slider (same framing, one ungraded and one graded).
   - `image` on each project for its still. Leave it empty to keep the gradient placeholder.
3. Set each project's `href` to its Vimeo or YouTube page.
4. Colors, spacing, and type live in `app/globals.css`. The page is neutral grey on purpose, so your frames carry the color.

## Deploy

Push to GitHub and import the repo on Vercel. No settings needed.
