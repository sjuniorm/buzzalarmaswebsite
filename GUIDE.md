# Buzz Alarmas Website — Owner's Guide

This guide covers everything you need to manage and update your website without touching complex code.

---

## Table of Contents
1. [Project Structure](#structure)
2. [How to Change Text](#text)
3. [How to Swap Photos & Images](#photos)
4. [How to Change the Favicon](#favicon)
5. [How to Add/Edit Testimonials](#testimonials)
6. [How to Add a New Service](#services)
7. [How to Change Colors](#colors)
8. [How to Add Spanish Translations](#translations)
9. [Contact Form Setup (Resend)](#resend)
10. [Deploying to Vercel](#deploy)
11. [Connecting Your Own Domain](#domain)
12. [Pushing Changes to GitHub](#git)

---

## 1. Project Structure {#structure}

```
buzz-alarmas-website/
├── public/
│   └── images/           ← All your photos and logos go here
│       ├── logo-white.png
│       ├── logo-black.png
│       └── logo-color.png
├── src/
│   ├── app/
│   │   ├── globals.css   ← Brand colors
│   │   ├── layout.tsx    ← Page title & SEO description
│   │   ├── page.tsx      ← Main page (assembles all sections)
│   │   └── api/contact/route.ts  ← Contact form email handler
│   ├── components/       ← Each section of the website
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── WhyBuzz.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Coverage.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── context/
│       └── LanguageContext.tsx  ← ALL website text (EN + ES)
└── .env.local            ← API keys (never commit this)
```

---

## 2. How to Change Text {#text}

**All website text is in one file:** `src/context/LanguageContext.tsx`

Open that file and find the `translations` object. Each entry has:
- `en` — English text
- `es` — Spanish text

**Example — to change the hero tagline:**
```ts
"hero.tagline": { en: "Real Protection.", es: "Protección Real." },
```
Just edit the text inside the quotes. Save the file. Done.

**To change the page title & SEO description:**
Open `src/app/layout.tsx` and edit the `metadata` object at the top.

---

## 3. How to Swap Photos & Images {#photos}

All images go in the `public/images/` folder.

### Hero background photo
1. Save your photo as `hero-bg.jpg` in `public/images/`
2. Open `src/components/Hero.tsx`
3. Find the comment that says `PHOTO GUIDE` and follow the instructions there

### Team / installation photos (for future sections)
1. Drop your `.jpg` or `.png` file in `public/images/`
2. In the component where you want to add it, use:
```tsx
import Image from "next/image";
<Image src="/images/your-photo.jpg" alt="Description" width={600} height={400} />
```

### Logo swap
Replace any of these files in `public/images/`:
- `logo-white.png` — used on dark backgrounds (navbar, footer)
- `logo-black.png` — for light backgrounds if needed
- `logo-color.png` — full color version

Keep the same filename and the logo updates everywhere automatically.

### Photo size tips
- Hero background: at least 1920×1080px
- Service/team photos: 800×600px is fine
- Always use `.jpg` for photos, `.png` for logos

---

## 4. How to Change the Favicon {#favicon}

The favicon is the small icon shown in browser tabs.

1. Convert your logo to `.ico` format at [favicon.io](https://favicon.io/favicon-converter/)
2. Save the file as `favicon.ico`
3. Replace `public/favicon.ico` with your new file

For best results also add:
- `public/apple-touch-icon.png` (180×180px) — for iPhone home screen

---

## 5. How to Add/Edit Testimonials {#testimonials}

Open `src/components/Testimonials.tsx` and find the `reviews` array at the top:

```ts
const reviews = [
  {
    name: "Customer Name",
    badge: "Google Review",
    stars: 5,
    text: "Their review text here...",
  },
  // ... more reviews
];
```

**To add a review:** Copy one block and paste it at the end of the array (before the `]`).  
**To remove a review:** Delete the entire block for that person.  
**To edit a review:** Change the text inside the quotes.

---

## 6. How to Add a New Service {#services}

Open `src/components/Services.tsx` and find the `services` array:

```ts
const services = [
  {
    icon: "🏠",
    titleKey: "services.home.title",
    descKey: "services.home.desc",
  },
  // ...
];
```

**Step 1:** Add a new entry to the array:
```ts
{
  icon: "📷",
  titleKey: "services.cctv.title",
  descKey: "services.cctv.desc",
},
```

**Step 2:** Add the translations in `src/context/LanguageContext.tsx`:
```ts
"services.cctv.title": { en: "CCTV Cameras", es: "Cámaras de seguridad" },
"services.cctv.desc": { en: "...", es: "..." },
```

---

## 7. How to Change Colors {#colors}

Open `src/app/globals.css`. The brand colors are at the top:

```css
@theme {
  --color-orange: #ff914d;       ← Main accent color
  --color-orange-dark: #e67a35;  ← Hover state
  --color-dark: #0a0a0a;         ← Page background
  --color-dark-2: #141414;       ← Section backgrounds
  --color-dark-3: #1e1e1e;       ← Card backgrounds
  --color-light: #f5f5f5;        ← Text color
}
```

Change the hex values to update colours across the whole site.

---

## 8. How to Add/Fix Spanish Translations {#translations}

All translations live in `src/context/LanguageContext.tsx` in the `translations` object.

Every key has `en` and `es` values. If any Spanish text is missing or wrong, just update the `es` value for that key.

---

## 9. Contact Form Setup (Resend) {#resend}

The contact form sends emails via [Resend](https://resend.com) — free for up to 100 emails/day.

### Setup steps:
1. Go to [resend.com](https://resend.com) and create a free account
2. Go to **API Keys** → **Create API Key** → copy the key
3. Open `.env.local` and replace the placeholder:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
4. **On Vercel:** Go to your project → Settings → Environment Variables → add `RESEND_API_KEY`

### Domain verification (required to send from your own email):
1. In Resend, go to **Domains** → **Add Domain** → enter `buzzalarmas.com`
2. Add the DNS records they show you to your domain registrar
3. Once verified, emails will send from `noreply@buzzalarmas.com`

Until the domain is verified, use `onboarding@resend.dev` as the `from` address in `src/app/api/contact/route.ts`.

---

## 10. Deploying to Vercel {#deploy}

### First deployment:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **New Project** → **Import** your `buzzalarmaswebsite` repo
3. Keep all settings as default
4. Add your environment variable: `RESEND_API_KEY` = your key
5. Click **Deploy**

That's it — your site is live!

### After that, every git push auto-deploys. No manual steps needed.

---

## 11. Connecting Your Own Domain {#domain}

1. In Vercel, go to your project → **Settings** → **Domains**
2. Add `buzzalarmas.com` and `www.buzzalarmas.com`
3. Vercel will show you DNS records to add at your domain registrar
4. Add those records, wait 10–30 minutes, done

---

## 12. Pushing Changes to GitHub {#git}

After making any changes:

```bash
# Navigate to the project folder
cd "buzz-alarmas-website"

# Stage all changes
git add .

# Commit with a description
git commit -m "Update hero text"

# Push to GitHub (auto-deploys on Vercel)
git push
```

Or use **GitHub Desktop** if you prefer a visual interface — just click "Commit" then "Push".

---

## Need Help?

If you get stuck, the files to look at first are almost always:
- `src/context/LanguageContext.tsx` — for any text changes
- `src/components/[SectionName].tsx` — for layout/content changes
- `public/images/` — for photo changes
