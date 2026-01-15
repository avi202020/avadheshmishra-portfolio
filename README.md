# Avadhesh Mishra – Portfolio (Next.js)

Single-page portfolio built with Next.js (App Router) + Tailwind.

## Local run
```bash
npm install
npm run dev
```

## Update content
Edit `src/data/resume.ts` (LinkedIn/GitHub links + text).

## CV download
Replace `public/Avadhesh_Mishra_Final_Clean_CV.pdf` with your real PDF (same filename).

## Deploy
Push to GitHub and deploy on Vercel.


## Print-friendly CV
Use your browser Print → Save as PDF. The site hides the navbar and buttons in print.

## Contact form (Google Forms)
1) Create a Google Form (add fields: Name, Email, Message).
2) In Google Forms: **Settings → Responses → Get email notifications for new responses** (or use the 3-dot menu → "Get email notifications").
   - Ensure notifications go to **avadhesh.cs@gmail.com** (the Google account owning the form).
3) Click **Send → <> Embed HTML**, copy the `src` URL and set it in:
   - `src/data/resume.ts` → `googleFormEmbedUrl`
4) Optionally set `googleFormEditUrl` for your own reference (shown only in print view).
