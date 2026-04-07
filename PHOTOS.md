# Photo Guide — Buzz Alarmas Website

A practical reference for adding or swapping photos on the site.
All images go in the `public/images/` folder.

---

## 1. Hero Background Photo

**What it does:** Full-screen background image behind the main headline.

**Where to edit:** `src/components/Hero.tsx` — around line 27–35.

**How to add it:**

1. Save your photo as `public/images/hero-bg.jpg`
2. Open `src/components/Hero.tsx`
3. Find this line:
   ```jsx
   <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
   ```
4. Add the image **above** that line (the gradient overlay sits on top for readability):
   ```jsx
   <Image
     src="/images/hero-bg.jpg"
     alt="Buzz Alarmas — alarm installation"
     fill
     className="object-cover opacity-30"
     priority
   />
   ```
5. Make sure `import Image from "next/image"` is at the top of the file.

**Recommended size:** 1920×1080px · JPG · under 300KB
The image is darkened by the gradient overlay, so contrast matters less than composition.
Good subjects: a city at night, a house exterior, an alarm panel close-up.

---

## 2. WhyBuzz — Team / Installation Photo

**What it does:** Fills the left column of the "Why Choose Buzz?" section with a real photo instead of just text.

**Where to edit:** `src/components/WhyBuzz.tsx` — inside the left `<motion.div>` (around line 29).

**How to add it:**

1. Save your photo as `public/images/team.jpg`
2. Open `src/components/WhyBuzz.tsx`
3. Add `import Image from "next/image"` at the top.
4. Find the closing `</motion.div>` of the left column (after the CTA button, around line 47) and add the image just before it:
   ```jsx
   <div className="relative mt-10 rounded-2xl overflow-hidden aspect-[4/3]">
     <Image
       src="/images/team.jpg"
       alt="Buzz Alarmas team at work"
       fill
       className="object-cover"
     />
   </div>
   ```

**Recommended size:** 800×600px · JPG · under 200KB
Good subjects: your team installing a panel, a technician on site, your van/equipment.

---

## Replacing a photo later

Just overwrite the file in `public/images/` with the same filename.
The site will pick it up automatically on next deploy — no code changes needed.

---

## Quick size reference

| Slot          | File name               | Ideal size    | Max size |
|---------------|-------------------------|---------------|----------|
| Hero bg       | `hero-bg.jpg`           | 1920×1080px   | 300KB    |
| WhyBuzz team  | `team.jpg`              | 800×600px     | 200KB    |

**Tip:** Use [Squoosh](https://squoosh.app) (free, in-browser) to compress photos before uploading.

---

## 3. Favicon (browser tab icon)

**What it does:** The small icon shown in the browser tab, bookmarks, and mobile home screen shortcuts.

**Current state:** The site uses the white logo as favicon — this can be hard to see on light browser themes.

**How to add a proper favicon:**

1. Create a square version of the Buzz Alarmas logo — ideally the icon/mark only (not the full wordmark), on a dark or orange background. Minimum 512×512px PNG.
2. Go to [favicon.io](https://favicon.io/favicon-converter/) or [realfavicongenerator.net](https://realfavicongenerator.net) — upload your square logo image and download the generated package.
3. From the downloaded package, copy these files into `public/`:
   - `favicon.ico`
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png` (180×180px)
4. Open `src/app/layout.tsx` and update the `icons` block:
   ```tsx
   icons: {
     icon: [
       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
     ],
     apple: "/apple-touch-icon.png",
     shortcut: "/favicon.ico",
   },
   ```

**Size reference:**

| File                  | Size        | Purpose                        |
|-----------------------|-------------|--------------------------------|
| `favicon.ico`         | 32×32px     | Browser tab fallback           |
| `favicon-16x16.png`   | 16×16px     | Small browser tabs             |
| `favicon-32x32.png`   | 32×32px     | High-DPI browser tabs          |
| `apple-touch-icon.png`| 180×180px   | iOS home screen shortcut       |
