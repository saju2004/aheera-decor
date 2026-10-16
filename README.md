# Aheera Decor — Premium Home Decor & Interior Living Storefront

> **Portfolio Showcase Demo**  
> *A fictional international luxury interior decor brand engineered to demonstrate senior frontend development, e-commerce UI/UX, responsive layout architecture, client-side data filtering, and state management.*  
>  
> 🌐 **Live Demo Website:** [https://saju2004.github.io/aheera-decor/](https://saju2004.github.io/aheera-decor/)  
> 📦 **GitHub Repository:** [https://github.com/saju2004/aheera-decor](https://github.com/saju2004/aheera-decor)

---

## 1. Project Overview

**Aheera Decor** is an editorial e-commerce storefront for a fictional home decor brand specializing in architectural furniture, sculptural ceramics, ambient lighting, and natural Belgian flax textiles.

The project highlights:
- **Editorial Brand Aesthetic**: Tailored color palette (#F8F6F1 Ivory, #252522 Charcoal, #777B60 Muted Olive, #D8C7B1 Sand Beige), classical editorial serifs paired with modern geometric sans-serifs, and generous whitespace.
- **Client-Side E-Commerce Architecture**: Pure React 18 with Vite, React Router v6, persistent `localStorage` for Cart and Wishlist state, client-side promo code calculation, and an interactive demo checkout flow.
- **No External UI Component Bloat**: 100% custom modular CSS3 without Tailwind, Bootstrap, or component kits.
- **Transparent Demonstration Mode**: Clear notices indicating zero credit card processing, simulated UAE shipping, and demo order generation.

---

## 2. Key Features

### 🛍️ Storefront & Merchandising
- **Curated Catalog of 24 Realistic Products**: Handcrafted furniture, travertine pedestals, ceramic lamps, bouclé seating, and linen accessories with full specs, dimensions, materials, and multiple photography angles.
- **Interactive Product Detail Pages (PDP)**:
  - Multi-image gallery with real-time thumbnail switching.
  - Active color variant selection with visual feedback.
  - Accessible quantity selectors with boundary checks.
  - Spec breakdown tabs (Highlights, Materials & Dimensions, Shipping Policies).
  - Dynamic "Related Pieces" suggestions within the same category.
- **Dual Hover Imagery**: Product cards dynamically transition to alternate perspective angles on hover.

### 🔎 Discovery, Search & Filtering
- **Multi-Faceted Catalog Filtering**: Filter by category, price range (AED min/max), and stock status.
- **Instant Search Overlay & Dedicated Search Route**: Live keyword matching across product titles, descriptions, categories, and materials with deep-linking (`/search?q=travertine`).
- **Curated Collections**: Direct routes for `/collections/:category` (Furniture, Lighting, Wall Decor, Vases & Objects, Textiles, Mirrors).

### 🛒 Cart & Interactive Checkout Simulation
- **Persistent Shopping Bag (`CartContext`)**: Stores cart items, variants, and quantities in `localStorage`.
- **Accurate Financial Computations**:
  - Item line totals and cart subtotal in AED.
  - Complimentary UAE delivery logic (free over AED 500; flat AED 50 otherwise).
  - Working demo promo code (`WELCOME10` or `AHEERA10` for 10% discount).
- **Simulated Checkout Flow (`DemoCheckoutModal`)**: Captures customer details, address, and UAE Emirate selection with client-side form validation.
- **Generated Order Confirmation Receipt (`OrderConfirmationModal`)**: Creates a realistic order reference (`#AHD-XXXXXX`), estimated delivery timeline, and clears the cart safely.

### 🤍 Synchronized Wishlist (`WishlistContext`)
- Add/remove items with one click from cards, details, or catalog.
- Header counter badge updates instantaneously.
- Move items directly from Wishlist into the Shopping Bag.

### 📱 Responsive & Accessible UI
- Fully responsive across mobile (360px, 390px), tablet (768px), laptop (1024px), and desktop (1440px).
- Sticky glassmorphism header with scroll detection.
- Mobile slide-over navigation drawer.
- Zero horizontal layout overflow (`overflow-x: hidden`).
- Accessible semantic HTML5 elements, ARIA attributes, and visible focus rings.

---

## 3. Technology Stack

| Category | Technology |
|---|---|
| **Core Framework** | React 18.3.1 (JavaScript, `.jsx`) |
| **Build Tool & Server** | Vite 5.4.11 |
| **Routing** | React Router DOM v6.28.0 |
| **Icons** | Lucide React |
| **Styling** | Vanilla CSS3 (Custom design tokens & modular stylesheets) |
| **Persistence** | HTML5 `localStorage` with fallback wrappers |
| **Typography** | Cormorant Garamond & Plus Jakarta Sans (Google Fonts) |

*Strictly adheres to project constraints: No TypeScript, No Next.js, No Tailwind CSS, No Bootstrap, No Material UI.*

---

## 4. Website Route Structure

| Route | Purpose |
|---|---|
| `/` | Home page (Hero, Categories, Featured grid, Story, Editorial, Bestsellers, Trust, Newsletter) |
| `/shop` | Complete product catalog with filters and sorting |
| `/collections/:category` | Category-specific product listings (e.g. `/collections/furniture`) |
| `/product/:slug` | Product detail page with gallery, variants, specs, and related items |
| `/cart` | Shopping bag, promo discounts, order summary, and checkout trigger |
| `/wishlist` | Saved favorite products with move-to-bag shortcuts |
| `/about` | Brand ethos, philosophy, design principles, and portfolio transparency |
| `/contact` | Studio consultation form with client validation and simulated feedback |
| `/search` | Dedicated search results page reading `?q=...` parameters |
| `/privacy-policy` | Portfolio demonstration privacy policy and storage disclosures |
| `/shipping-returns` | Illustrative UAE shipping terms and returns policy |
| `*` | Professional 404 Not Found error page |

---

## 5. Getting Started & Local Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation Steps

1. **Clone or navigate to the repository directory**:
   ```bash
   cd "c:/shopify demo"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` to interact with the demo.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 6. Project Directory Architecture

```
shopify-demo/
├── dist/                     # Optimized production bundle
├── public/                   # Public static assets & favicon
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx       # Top announcement banner
│   │   ├── Breadcrumbs.jsx           # Accessible navigation trail
│   │   ├── CartItem.jsx              # Line item with variant & controls
│   │   ├── CategoryCard.jsx          # Visual collection link card
│   │   ├── DemoCheckoutModal.jsx     # Checkout simulation modal
│   │   ├── EmptyState.jsx            # Empty cart/wishlist/search graphic
│   │   ├── Footer.jsx                # Brand links, social, & demo notices
│   │   ├── Header.jsx                # Sticky navigation & badge counters
│   │   ├── HeroSection.jsx           # Homepage editorial lifestyle hero
│   │   ├── ImageGallery.jsx          # Detail page thumbnail gallery
│   │   ├── MobileMenu.jsx            # Responsive slide-over drawer
│   │   ├── NewsletterForm.jsx        # Validated newsletter subscription
│   │   ├── OrderConfirmationModal.jsx# Simulated order receipt
│   │   ├── ProductCard.jsx           # Product card with hover transitions
│   │   ├── ProductFilters.jsx        # Sidebar & mobile drawer filters
│   │   ├── ProductGrid.jsx           # Responsive multi-column grid
│   │   ├── QuantitySelector.jsx      # Stepper buttons with boundaries
│   │   ├── SearchOverlay.jsx         # Quick-search popup modal
│   │   ├── ToastNotification.jsx     # Animated status notifications
│   │   └── WishlistItem.jsx          # Saved wishlist card
│   ├── context/
│   │   ├── CartContext.jsx           # Shared cart state, promo, totals
│   │   └── WishlistContext.jsx       # Shared wishlist state & count
│   ├── data/
│   │   ├── categories.js             # 6 primary collections
│   │   └── products.js               # 24 realistic products with specs
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── ShippingReturnsPage.jsx
│   │   ├── ShopPage.jsx
│   │   └── WishlistPage.jsx
│   ├── styles/
│   │   ├── cart.css                  # Cart and checkout styling
│   │   ├── filters.css               # Catalog filters and sort bars
│   │   ├── footer.css                # Site footer styling
│   │   ├── global.css                # Reset, typography, utility classes
│   │   ├── header.css                # Announcement, header, search modal
│   │   ├── pages.css                 # Hero, story, editorial, trust
│   │   ├── product.css               # Cards, grid, detail page layout
│   │   └── variables.css             # Brand color tokens & design scale
│   ├── utils/
│   │   ├── formatters.js             # AED currency & discount calculations
│   │   └── storage.js                # Resilient localStorage wrapper
│   ├── App.jsx                       # Routing setup & scroll restoration
│   └── main.jsx                      # React 18 DOM mount & context wrapping
├── index.html                        # HTML5 document & Google Fonts
├── package.json                      # Scripts & dependencies
├── vite.config.js                    # Vite configuration
└── README.md                         # Portfolio documentation
```

---

## 7. Replacing Sample Product Images

All product and lifestyle imagery in `src/data/products.js` and `src/data/categories.js` utilize high-resolution photographic URLs from Unsplash.

To customize or replace images with your own studio photography:
1. Place local images in `public/images/products/` or host them on a CDN.
2. In `src/data/products.js`, update the respective product entry:
   ```javascript
   {
     id: 'prod-1',
     name: 'Sora Sculptural Ceramic Vase',
     mainImage: '/images/products/sora-vase-1.jpg',
     secondaryImage: '/images/products/sora-vase-2.jpg',
     images: [
       '/images/products/sora-vase-1.jpg',
       '/images/products/sora-vase-2.jpg',
       '/images/products/sora-vase-detail.jpg'
     ]
   }
   ```
3. The image gallery and product card hover states will automatically adjust.

---

## 8. Deployment Instructions (Vercel, Netlify, Cloudflare Pages)

### Deploying to Vercel
1. Push this repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add a rewrite for Single Page Application routing in `vercel.json` if needed:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### Deploying to Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Create a `public/_redirects` file with the rule:
   ```text
   /*    /index.html   200
   ```

---

## 9. Portfolio Demonstration Disclaimer

**Important Notice for Reviewers & Recruiters:**  
*Aheera Decor is an original fictional brand created exclusively for portfolio demonstration. It does not represent an operating commercial enterprise or live client engagement. No actual monetary transactions, banking integrations, or physical product shipments take place. All prices in AED and product specifications are illustrative.*
