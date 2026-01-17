# avadheshmishra.com — Portfolio

A clean, fast **Next.js + Tailwind** portfolio site driven by a single config file: **`src/data/resume.ts`**.

This version is aligned to the latest CV (Program / Delivery Management + Cloud & Security Architecture).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update content

Edit:

- `src/data/resume.ts` — name, title, summary, experience, major programmes, certifications, skills
- `public/Avadhesh_Mishra_Executive_CV.pdf` — CV download file (linked from the **Download CV** button)

## Deploy

### Option A — Vercel (recommended for Next.js)

1. Push this repo to GitHub.
2. Import into Vercel.
3. Add your domain **`avadheshmishra.com`** in Vercel → Project Settings → Domains.
4. Update DNS at your registrar:
   - Add/Update **A record** for root domain to Vercel’s IP (or follow Vercel’s guided DNS)
   - Add **CNAME** for `www` to Vercel

### Option B — Netlify

- Build command: `npm run build`
- Publish directory: `.next` (or use Netlify’s Next.js runtime)

## Notes

- The header shows **LinkedIn**, **GitHub**, and **Portfolio** links.
- Contact form URLs in `resume.ts` are placeholders — replace with your actual Google Form links if you want embedded contact.
