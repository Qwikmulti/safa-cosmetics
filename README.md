# SAFA Hair & Cosmetics — Next.js Website

A modern, production-ready website for **SAFA Hair & Cosmetics**, Chatham's premier Afro hair and cosmetics destination.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer (contact form)
- **Font:** Playfair Display + DM Sans

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, categories, products, testimonials, store info |
| Products | `/products` | Full product catalogue with search & filter |
| About | `/about` | Brand story, values, team |
| Blog / Journal | `/blog` | Beauty tips and trend articles |
| Contact | `/contact` | Contact form (Nodemailer), store info, Google Maps |

---

## ⚙️ Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=info@safacosmetics.co.uk
```

> **Gmail users:** You need to create an [App Password](https://support.google.com/accounts/answer/185833) — do not use your main Gmail password.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🖼️ Adding Real Product & Store Images

Replace the placeholder visuals by:

1. Adding your images to `/public/images/`
2. Using Next.js `<Image>` components pointing to those files
3. The store image from the Google Business listing can be used in the Hero section

---

## 📦 Deployment

This project is ready to deploy on:

- **Vercel** (recommended — zero config): `vercel deploy`
- **Netlify**
- Any Node.js hosting (VPS, Railway, Render, etc.)

Make sure to set your environment variables in the deployment dashboard.

---

## 📬 Email Setup (Nodemailer)

The contact form at `/contact` sends two emails:
1. **Notification** to SAFA team with the enquiry details
2. **Auto-reply** to the customer confirming receipt

Configure your SMTP provider in `.env.local`. Works with Gmail, SendGrid, Mailgun, Brevo, Postmark, etc.

---

## 🏪 Business Info

| Detail | Value |
|--------|-------|
| Address | 161 High Street, Chatham ME4 4BA |
| Location | The Pentagon Shopping Centre |
| Phone | +44 1634 790439 |
| Website | safacosmetics.co.uk |
| Hours (Mon–Sat) | 9:00 AM – 7:00 PM |
| Hours (Sunday) | 10:00 AM – 5:00 PM |
| Google Rating | 4.8 ★ |

---

© 2026 SAFA HAIR & COSMETICS LTD
