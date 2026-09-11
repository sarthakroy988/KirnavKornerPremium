# Kirnav Korner | Luxury & Affordable Children's Store

> **"Everything a child needs, in one little corner."**  
> Guwahati’s premier children's department store offering boutique luxury at honest, everyday prices — everything available at one big expansive showroom.

[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Rating](https://img.shields.io/badge/Google%20Rating-4.7%20%E2%98%85-FFB800)](https://maps.google.com/?q=Kirnav+Korner+RG+Baruah+Rd+Guwahati)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)]()

---

## Table of Contents
1. [Business Overview](#business-overview)
2. [Project Architecture](#project-architecture)
3. [Code Walkthrough](#code-walkthrough)
   - [HTML Structure & Page Sections](#html-structure--page-sections)
   - [Design System & Typographic Hierarchy](#design-system--typographic-hierarchy)
   - [Interactive JavaScript Features](#interactive-javascript-features)
   - [Local Business SEO & Structured Data](#local-business-seo--structured-data)
4. [Prerequisites & Getting Started](#prerequisites--getting-started)
5. [Building the Project](#building-the-project)
6. [Testing & Visual Regression](#testing--visual-regression)
7. [Deployment Guide](#deployment-guide)
   - [Deploying to Vercel](#deploying-to-vercel)
   - [Deploying to Netlify](#deploying-to-netlify)
   - [Deploying to GitHub Pages](#deploying-to-github-pages)
   - [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)
   - [Deploying to Firebase Hosting](#deploying-to-firebase-hosting)
   - [Deploying to Nginx / Apache / Static VPS](#deploying-to-nginx--apache--static-vps)

---

## Business Overview

- **Business Name**: Kirnav Korner
- **Category**: Children's Store / Baby & Kids Department Store
- **Address**: RG Baruah Rd, AIDC, Ambikagirinagar, Guwahati, Assam 781024, India
- **Phone**: [+91 99543 61338](tel:+919954361338)
- **WhatsApp**: [+91 99543 61338](https://wa.me/919954361338)
- **Google Rating**: 4.7 / 5 from 33+ verified reviews
- **Hours**: Open 7 Days a Week • 10:00 AM – 8:00 PM
- **Key Proposition**: Expansive physical showroom offering high-end children’s apparel, footwear, ride-on toys, nursery essentials, and baby care all under one roof at affordable, accessible prices.

---

## Project Architecture

```
KirnavKorner/
├── index.html               # Main production-ready landing page with all 9 sections
├── package.json             # NPM dependencies & scripts (Vite, Tailwind, Sharp, Puppeteer)
├── vite.config.js           # Vite bundler configuration with Tailwind & React plugins
├── README.md                # Documentation, walkthrough, build & deployment guide
│
├── public/                  # Static assets served directly by Vite
│   ├── favicon.ico          # Browser favicon (ICO format)
│   ├── favicon.png          # High-res favicon (PNG)
│   ├── favicon.svg          # Vector favicon (SVG)
│   │
│   ├── images/              # Optimized WebP assets used across the website
│   │   ├── brand-logo.webp         # Brand identity logo
│   │   ├── hero-mother-child.webp  # Hero editorial photography
│   │   ├── storefront-full.webp    # Showroom facade image
│   │   ├── interior-full.webp      # Showroom interior overview
│   │   └── real/                   # Real in-store photographs of Kirnav Korner
│   │       ├── kk-1.webp           # Floral crib booties display
│   │       ├── kk-2.webp           # Mercedes battery ride-on cars showcase
│   │       ├── kk-3.webp           # Boxed festive collared shirts
│   │       ├── kk-4.webp           # Store front billing & accessories counter
│   │       ├── kk-5.webp           # Baby pre-walker booties & footwear rack
│   │       ├── kk-6.webp           # Sporty electric ride-on bike
│   │       ├── kk-7.webp           # Multi-tier kids footwear wall
│   │       ├── kk-8.webp           # Festive girls party dresses & gowns
│   │       ├── kk-9.webp           # Toddler cotton rompers & dungarees
│   │       ├── kk-10.webp          # Navy floral cushioned canopy baby stroller
│   │       ├── kk-11.webp          # Yellow dinosaur mascot & trial rooms
│   │       ├── kk-12.webp          # Dusk exterior showroom facade
│   │       └── kk-13.webp          # Plush giant teddy bears & soft seats
│   │
│   └── screenshots/         # Automated responsive visual test captures
│       ├── mobile-375.png          # Mobile viewport (375x812) capture
│       ├── tablet-768.png          # Tablet viewport (768x1024) capture
│       └── desktop-1440.png        # Desktop viewport (1440x900) capture
│
├── scripts/                 # Automation and testing utility scripts
│   ├── process-images.mjs   # Sharp script for image optimization and WebP conversion
│   ├── take-screenshots.mjs # Puppeteer script for responsive viewport screenshots
│   ├── fullpage-capture.mjs # Full-page scrolling screenshot generator
│   └── test-interactions.mjs# Interaction and DOM assertions test script
│
└── dist/                    # Compiled production build output (generated via npm run build)
    ├── index.html           # Minified production HTML
    └── images/              # Copied production media assets
```

---

## Code Walkthrough

### HTML Structure & Page Sections

The layout is built with standard semantic HTML5 inside [`index.html`](file:///d:/EXTRA/KirnavKorner/index.html):

1. **Fixed Header (`<header>`)**:
   - Responsive navbar with boutique wordmark and clear visual branding.
   - Desktop navigation links (`Home`, `Collections` → `#categories`, `About` → `#flagship`, `Reviews` → `#reviews`, `Visit Us` → `#store-visit`, `Contact` → WhatsApp).
   - Desktop direct actions: Directions button (Google Maps) and Click-to-Call button.
   - Mobile hamburger menu button (`#mobile-menu-open`).

2. **Slide-out Navigation Drawer (`#mobile-drawer`)**:
   - Modern glassmorphic backdrop overlay (`#drawer-backdrop`).
   - Drawer container with store status pill (*"Open today • 10:30 AM – 8:00 PM"*), vertical navigation links, WhatsApp Concierge CTA, and Direct Phone Call CTA.
   - Full keyboard accessibility (`Escape` key closes drawer) and auto-close when any nav link is tapped.

3. **Top Announcement Banner**:
   - Highlight: *"Affordable Luxury for Little Ones: Children's fashion, newborn layettes, battery ride-ons & footwear at honest everyday prices."*

4. **Section 1: Editorial Hero (`<section>`)**:
   - Asymmetric editorial layout with authentic store photography:
     - Real dusk illuminated facade (`kk-12.webp`) on RG Baruah Road with bilingual signage (`কিৰ্ণভ কৰ্ণৰ`).
     - Floating inset card highlighting the yellow Mercedes AMG battery ride-on car (`kk-2.webp`).
     - Verified Google review pill: **4.7 ★ (33+ Google reviews)**.
     - Trust badges: *Fixed Honest Prices*, *Trial Rooms & Tailoring*, and *Customer Parking*.
   - Two high-contrast CTA buttons: *"Explore collections"* (anchor to `#categories`) and *"Visit our store"* (anchor to `#store-visit`).

5. **Section 2: Curated Categories Grid (`#categories`)**:
   - 8 structured product category cards grounded in real store inventory:
     1. Infant & Newborn Layettes (`0–24M`)
     2. Kids Fashion & Festive Wear (`1–12Y`)
     3. Battery Ride-Ons & Trikes (`Test-Drive`)
     4. Prams, Strollers & Walkers (`Mobility`)
     5. Kids Footwear Collection (`All Ages`)
     6. Plush Toys & Gifting (`Gift Ready`)
     7. School & Daycare Essentials (`Daily Prep`)
     8. Baby Care & Nursery Bedding (`Essentials`)
   - Each card features custom icon badges, department descriptions, and direct pre-filled WhatsApp inquiry deep-links.

6. **Section 3: Guwahati Flagship Showcase (`#flagship`)**:
   - Highlighting the **expansive RG Baruah Road showroom**.
   - Real photographs of the exterior dusk facade (`kk-12.webp`), yellow dinosaur mascot and fitting rooms (`kk-11.webp`), and ride-on vehicle showroom (`kk-2.webp`).
   - In-store distinctives: *Affordable Luxury*, *Trial Rooms*, and *In-House Tailoring* (on-site alteration counter).
   - Partner brands marquee: *Mee Mee*, *Himalaya BabyCare*, *Morisons Baby Dreams*, *Baybee*, *Doreme*, and *Infinia*.

7. **Section 4: The Kirnav Philosophy (Value Pillars)**:
   - Three cards breaking down why Guwahati parents trust Kirnav Korner:
     1. **Boutique Luxury Standards**: Hypoallergenic organic cottons, teething-safe dyes, heirloom durability.
     2. **Honest, Everyday Pricing**: Zero inflated boutique markups with transparent fixed pricing.
     3. **One Big Expansive Showroom**: Everything available here under one welcoming roof.

8. **Section 5: Real In-Store Collection Gallery (`#gallery`)**:
   - Curated horizontal snap-scrolling showcase featuring 10 genuine store products:
     - Canvas Infant Pre-Walkers (`kk-8.webp`)
     - Sporty R1 Electric Superbike (`kk-9.webp`)
     - Insulated Character Thermos Flasks (`kk-6.webp`)
     - Boxed Festive Collared Shirts (`kk-3.webp`)
     - Giant Plush Soft Toys & Teddies (`kk-13.webp`)
     - Floral Crib Booties & Gold Shoes (`kk-1.webp`)
     - Cushioned Canopy Baby Stroller (`kk-10.webp`)
     - Kids Party Sandals & Light-Up Sneakers (`kk-7.webp`)
     - Mercedes AMG Battery Ride-On Sports Car (`kk-2.webp`)
     - Revolving Disney Sunglasses Carousel (`kk-4.webp`)
   - Each item includes a direct one-tap *"Inquire on WhatsApp"* button with pre-filled item inquiry text.

9. **Section 6: Google Customer Reviews (`#reviews`)**:
   - Heading: *"Loved by Guwahati Families"*.
   - Rating badge: 4.7 Stars from 33+ Google reviews with a direct link to Google Maps.
   - Verified local reviews from Guwahati parents highlighting honest prices, quality garments, patient staff, and diverse collection.

10. **Section 7: Store & Location Experience (`#store-visit`)**:
    - Comprehensive physical store details: address (Plot 208, RG Baruah Rd, Opp. AIDC, Guwahati), phone number, and hours (10:00 AM – 8:00 PM).
    - Store front visual locator preview card (`kk-4.webp`).
    - 4 in-store amenities: Free customer parking, 100% air-conditioned, fitting trial rooms, and in-store tailoring.
    - One-tap buttons for Google Maps GPS Directions and Call Store.

11. **Section 8: WhatsApp Concierge CTA**:
    - Dedicated card inviting parents to request custom sizes, live video calls of fresh collections, or bespoke gift hampers.

12. **Section 9: Final Call-to-Action**:
    - Warm closing banner with quick links and trust guarantees.

13. **Footer (`<footer>`) & Mobile Bottom Floating Bar**:
    - Complete site directory, hours (10:00 AM – 8:00 PM), bilingual Assamese copyright, and direct concierge contact.
    - Mobile-only fixed sticky bottom bar with three touch targets: **WhatsApp**, **Call**, and **Directions**, fully supporting mobile safe-area insets (`env(safe-area-inset-bottom)`).

---

### Design System & Typographic Hierarchy

- **Color Palette**:
  - `Primary`: Warm Terracotta (`#994126` / `#C25838`) — boutique warmth and energy.
  - `Secondary`: Forest Green (`#2C3E2D` / `#4E6451`) — organic, calming, and natural.
  - `Surface / Background`: Soft Warm Cream (`#F8F5EE` / `#F6FBF5`) — elegant, non-glare reading canvas.
  - `Tertiary / Accent`: Antique Gold (`#FFE088` / `#735C00`) — luxury accentuation and star ratings.
- **Typography Pairing**:
  - **Headings & Editorial Titles**: *Playfair Display* (`font-headline-lg`, `font-headline-md`, `font-title-editorial`) for classic boutique sophistication.
  - **Body Text & UI Labels**: *Plus Jakarta Sans* (`font-body-lg`, `font-body-md`, `font-label-lg`) for clean legibility across mobile screens.
  - **Icons**: *Google Material Symbols Outlined* for crisp, lightweight iconography.

---

### Interactive JavaScript Features

Located at the bottom of [`index.html`](file:///d:/EXTRA/KirnavKorner/index.html):
- **Drawer Open / Close Transition**: Toggles Tailwind `hidden` and CSS transform/opacity classes with layout reflow enforcement.
- **Scroll Lock**: Sets `document.body.style.overflow = 'hidden'` while the drawer is open to prevent background page jumping.
- **Event Listeners**:
  - Open button (`#mobile-menu-open`)
  - Close button (`#mobile-menu-close`)
  - Backdrop click (`#drawer-backdrop`)
  - Drawer anchor navigation clicks (smoothly closes drawer and scrolls to target section)
  - Keyboard `Escape` key trigger for accessibility

---

### Local Business SEO & Structured Data

Included in the `<head>` of [`index.html`](file:///d:/EXTRA/KirnavKorner/index.html):
- Valid Schema.org `ClothingStore` JSON-LD specification.
- GeoCoordinates for RG Baruah Rd, Guwahati (`26.1724° N, 91.7766° E`).
- Opening hours specification for Google Local Pack visibility.
- Verified telephone number and aggregate rating (4.7 / 5 from 33 reviews).

---

## Prerequisites & Getting Started

### Requirements
- **Node.js**: `v18.0.0` or later (tested on Node v20/v24)
- **npm**: `v9.0.0` or later

### Installation

Clone or open the repository directory:
```bash
cd d:/EXTRA/KirnavKorner
```

Install all dependencies:
```bash
npm install
```

### Running Locally (Development Mode)

Start Vite's live-reloading dev server:
```bash
npm run dev
```

Open your browser at:
```
http://localhost:3000
```

---

## Building the Project

To compile the production-optimized bundle:

```bash
npm run build
```

This executes `vite build`, generating static HTML and assets inside the `dist/` directory:
- Minifies CSS and HTML.
- Resolves asset references and builds cache-friendly outputs.
- Output location: `dist/index.html`

To preview the production build locally:
```bash
npm run preview
```
The preview server will be available at `http://localhost:3000`.

---

## Testing & Visual Regression

The project includes pre-configured Puppeteer scripts for automated testing:

### 1. Viewport Screenshots
Captures desktop, tablet, and mobile layouts into `dist/screenshots/`:
```bash
node scripts/take-screenshots.mjs
```

### 2. Interaction & Navigation Tests
Validates drawer opening, closing, body overflow lock, anchor jumps, and typography styles:
```bash
node scripts/test-interactions.mjs
```

---

## Deployment Guide

The `dist/` folder produced by `npm run build` is a 100% static website. It can be deployed to any static host with zero backend server dependencies.

### Deploying to Vercel

#### Option A: Via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in and deploy:
   ```bash
   vercel
   ```
3. When prompted:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. For production release:
   ```bash
   vercel --prod
   ```

#### Option B: Via Git (GitHub / GitLab / Bitbucket)
1. Push your code to a Git repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Configure project settings:
   - **Framework**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

### Deploying to Netlify

#### Option A: Via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy the `dist` folder:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

#### Option B: Via Web Dashboard
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder directly into your browser.

#### Option C: Via `netlify.toml`
Create a `netlify.toml` in the root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Deploying to GitHub Pages

1. In `vite.config.js`, set the base path if using a subfolder repository:
   ```js
   export default defineConfig({
     base: '/<REPO_NAME>/', // or './'
     // ...
   });
   ```
2. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist
         - id: deployment
           uses: actions/deploy-pages@v4
   ```
3. Enable GitHub Pages in your repository: **Settings > Pages > Source > GitHub Actions**.

---

### Deploying to Cloudflare Pages

1. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create Application > Pages > Connect to Git**.
3. Select your repository and set:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

### Deploying to Firebase Hosting

1. Install Firebase CLI and login:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. Initialize Firebase in the project root:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project.
   - Public directory: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds and deploys with GitHub: `Optional`
3. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

---

### Deploying to Nginx / Apache / Static VPS

Upload the contents of `dist/` to your web server root (e.g., `/var/www/kirnavkorner`):

#### Nginx Configuration Snippet:
```nginx
server {
    listen 80;
    server_name kirnavkorner.com www.kirnavkorner.com;
    root /var/www/kirnavkorner;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    # Cache static images and fonts
    location ~* \.(webp|png|jpg|jpeg|gif|ico|svg|woff2|woff)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Business Contact & Direct Links

- **Physical Store**: [RG Baruah Rd, AIDC, Ambikagirinagar, Guwahati, Assam 781024](https://maps.google.com/?q=Kirnav+Korner+RG+Baruah+Rd+Guwahati)
- **Call Store**: [+91 99543 61338](tel:+919954361338)
- **WhatsApp Concierge**: [wa.me/919954361338](https://wa.me/919954361338)
