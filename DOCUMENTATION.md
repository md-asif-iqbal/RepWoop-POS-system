# Repwoop POS System — Documentation

> **Version:** 2.0.0 | **Author:** Asif Iqbal | **License:** Regular / Extended (CodeCanyon)

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [System Requirements](#system-requirements)
4. [Installation](#installation)
5. [Folder Structure](#folder-structure)
6. [Page Routes](#page-routes)
7. [Component Library](#component-library)
8. [Theming & Customization](#theming--customization)
9. [Dark Mode](#dark-mode)
10. [Configuration](#configuration)
11. [Third-Party Libraries](#third-party-libraries)
12. [Screenshots](#screenshots)
13. [FAQ](#faq)
14. [Changelog](#changelog)
15. [Support](#support)

---

## Introduction

**Repwoop POS** is a modern, professional Point-of-Sale (POS) system built with **Next.js 16**, **React 19**, **Tailwind CSS**, and a **shadcn/ui**-inspired component library. It's designed for retail stores, restaurants, supermarkets, and any business that needs an elegant, fast, and feature-rich POS solution.

### What Makes Repwoop POS Special?

- ✅ Built with the **latest** Next.js 16 + React 19
- ✅ **60+ pages** fully designed and functional
- ✅ Custom **shadcn/ui** component system (Button, Card, Badge, Input, Avatar, Separator)
- ✅ Professional **dark mode** with seamless toggle
- ✅ **Responsive** — works perfectly on desktop, tablet, and mobile
- ✅ **Indigo** professional color palette with gradient accents
- ✅ **Sonner** toast notifications
- ✅ **Chart.js** integration for analytics
- ✅ Export to **PDF, Excel, Print** on data tables
- ✅ Clean, well-organized folder structure

---

## Features

### Core POS Features
| Feature | Description |
|---------|-------------|
| **POS Terminal** | Full-featured POS with cart, search, category filter, barcode scan |
| **Sales Management** | Invoice list, filters, status tracking (PAID/UNPAID) |
| **Purchase Management** | Purchase orders, supplier management |
| **Stock Management** | Real-time stock tracking with alerts |
| **Returns** | Product return processing |
| **Damages** | Track damaged inventory |

### Product Management
| Feature | Description |
|---------|-------------|
| **Products** | Add, edit, delete products with images |
| **Categories** | Organize products by category |
| **Brands** | Brand management |
| **Units** | Measurement unit management |

### Financial
| Feature | Description |
|---------|-------------|
| **Expenses** | Track all business expenses |
| **Payments** | Payment processing and history |
| **Bank Accounts** | Bank account management with history |
| **Cash Book** | Daily cash transaction log |

### People Management
| Feature | Description |
|---------|-------------|
| **Customers** | Customer database with due tracking |
| **Suppliers** | Supplier management |
| **Employee & Salary** | Employee records, salary payments |
| **Users & Roles** | User management with role-based permissions |
| **Owners** | Business owner profiles |

### Reports (14 Reports)
| Report | Description |
|--------|-------------|
| **Today Report** | Current day summary |
| **Daily Report** | Day-by-day breakdown |
| **Current Month Report** | Monthly overview |
| **Summary Report** | Complete business summary |
| **Profit & Loss** | Revenue vs expenses |
| **Category Wise Report** | Sales by category |
| **Purchase Report** | Purchase analytics |
| **Customer Due Report** | Outstanding customer dues |
| **Supplier Due Report** | Outstanding supplier dues |
| **Low Stock Report** | Products below threshold |
| **Top Customer** | Best customers by revenue |
| **Top Product** | Best-selling products |
| **Customer Ledger** | Customer transaction history |
| **Supplier Ledger** | Supplier transaction history |

### Additional Features
| Feature | Description |
|---------|-------------|
| **Dashboard** | Beautiful analytics dashboard with charts |
| **Dark Mode** | System-aware + manual toggle |
| **Promotional SMS** | Send bulk promotional messages |
| **Settings** | Company info, currency, invoice design |
| **Asset Management** | Business asset tracking |

---

## System Requirements

| Requirement | Version |
|-------------|---------|
| **Node.js** | 18.0 or higher |
| **npm** | 9.0 or higher |
| **Browser** | Chrome 90+, Firefox 90+, Safari 15+, Edge 90+ |
| **OS** | Windows 10+, macOS 11+, Linux |

---

## Installation

### Step 1: Extract Files
Extract the downloaded zip file to your desired location.

### Step 2: Install Dependencies
```bash
cd repwoop-pos-system
npm install --legacy-peer-deps
```

> **Note:** The `--legacy-peer-deps` flag is required due to TinyMCE peer dependency.

### Step 3: Run Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to **http://localhost:3000**

### Step 5: Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

---

## Folder Structure

```
repwoop-pos-system/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (Sidebar + Nav + Footer)
│   ├── page.js                 # Root page (redirects to Dashboard)
│   ├── globals.css             # Global styles + CSS variables
│   │
│   ├── components/             # Reusable UI components
│   │   └── ui/
│   │       ├── avatar.jsx      # Avatar component (Radix UI)
│   │       ├── badge.jsx       # Badge with variants
│   │       ├── button.jsx      # Button with CVA variants
│   │       ├── card.jsx        # Card component family
│   │       ├── input.jsx       # Input component
│   │       └── separator.jsx   # Separator (Radix UI)
│   │
│   ├── Shared/                 # Shared layout components
│   │   ├── Navigation/         # Top navigation bar
│   │   ├── Sidebar/            # Side navigation
│   │   └── Footer/             # Page footer
│   │
│   ├── home/                   # Dashboard page
│   ├── Login/                  # Authentication - Login
│   ├── Signup/                 # Authentication - Signup
│   ├── POS/                    # Point of Sale terminal
│   ├── Sales/                  # Sales management
│   ├── Products/               # Product listing + Create
│   ├── Categories/             # Category management + Create
│   ├── Brands/                 # Brand management + Create
│   ├── Units/                  # Unit management + Create
│   ├── Stock/                  # Stock management
│   ├── Purchase/               # Purchase management + Create
│   ├── Returns/                # Return management
│   ├── Damages/                # Damage tracking + Create
│   ├── Customers/              # Customer management + Create
│   ├── Suppliers/              # Supplier management + Create
│   ├── Owners/                 # Owner management + Create
│   ├── Expenses/               # Expense tracking
│   ├── Payments/               # Payment management
│   ├── Bank_Accounts/          # Bank accounts + History
│   ├── Cash_Book/              # Cash book
│   ├── Employee-and-Salary/    # HR management
│   │   ├── New-Employee/
│   │   ├── Salary/
│   │   └── Payments/
│   ├── Users/                  # User management + Create
│   ├── Roles-And-Permissions/  # RBAC + Create
│   ├── Settings/               # Application settings
│   ├── Assets-Management/      # Asset tracking + Create
│   ├── Promotional-SMS/        # SMS campaigns
│   │
│   ├── Today-Report/           # Reports
│   ├── Daily-Report/
│   ├── Current-Month-Report/
│   ├── Summary-Report/
│   ├── Profit-Loss-Report/
│   ├── Category-Wise-Report/
│   ├── Purchase-Report/
│   ├── Customer-Due-Report/
│   ├── Supplier-Due-Report/
│   ├── Low-Stock-Report/
│   ├── Top-Customer/
│   ├── Top-Product/
│   ├── Customer-Ledger/
│   └── Supplier-Ledger/
│
├── assets/                     # Static assets (logo, etc.)
├── lib/
│   └── utils.js                # Utility functions (cn helper)
│
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── jsconfig.json               # Path aliases (@/*)
└── package.json                # Dependencies
```

---

## Page Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Main analytics dashboard |
| `/Login` | Login | User authentication |
| `/Signup` | Sign Up | New user registration |
| `/POS` | POS Terminal | Point of Sale interface |
| `/Sales` | Sales List | Sales invoice management |
| `/Products` | Product List | Product management |
| `/Products/Create` | Add Product | Create new product |
| `/Categories` | Categories | Category management |
| `/Categories/Create` | Add Category | Create new category |
| `/Brands` | Brands | Brand management |
| `/Units` | Units | Unit management |
| `/Stock` | Stock | Inventory management |
| `/Purchase` | Purchase | Purchase orders |
| `/Purchase/Create` | New Purchase | Create purchase order |
| `/Returns` | Returns | Return management |
| `/Damages` | Damages | Damage tracking |
| `/Customers` | Customers | Customer database |
| `/Suppliers` | Suppliers | Supplier database |
| `/Owners` | Owners | Business owners |
| `/Expenses` | Expenses | Expense tracking |
| `/Payments` | Payments | Payment records |
| `/Bank_Accounts` | Bank Accounts | Bank management |
| `/Cash_Book` | Cash Book | Cash transactions |
| `/Employee-and-Salary` | HR | Employee management |
| `/Users` | Users | User management |
| `/Roles-And-Permissions` | Roles | Access control |
| `/Settings` | Settings | App configuration |
| `/Assets-Management` | Assets | Asset tracking |
| `/Promotional-SMS` | SMS | Marketing campaigns |
| `/Today-Report` | Today Report | Daily summary |
| `/Daily-Report` | Daily Report | Daily breakdown |
| `/Current-Month-Report` | Monthly Report | Monthly summary |
| `/Summary-Report` | Summary | Business overview |
| `/Profit-Loss-Report` | P&L | Financial report |
| ... | *14 reports total* | See full list above |

---

## Component Library

### Button
```jsx
import { Button } from '@/app/components/ui/button'

// Variants: default, destructive, outline, secondary, ghost, link, success, warning
// Sizes: default (h-10), sm (h-8), lg (h-12), icon (h-10 w-10)

<Button variant="default">Primary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="success">Save</Button>
<Button size="lg">Large Button</Button>
<Button size="icon"><Icon /></Button>
```

### Card
```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/app/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Badge
```jsx
import { Badge } from '@/app/components/ui/badge'

// Variants: default, secondary, success, destructive, warning, info, outline
<Badge variant="success">Active</Badge>
<Badge variant="destructive">Expired</Badge>
```

### Input
```jsx
import { Input } from '@/app/components/ui/input'

<Input type="email" placeholder="Enter email" />
```

### Avatar
```jsx
import { Avatar, AvatarImage, AvatarFallback } from '@/app/components/ui/avatar'

<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

## Theming & Customization

### CSS Variables (globals.css)
All colors are controlled via CSS custom properties. Edit `app/globals.css`:

```css
:root {
  --primary: #6366f1;        /* Indigo - main brand color */
  --background: #f8fafc;     /* Light background */
  --card: #ffffff;            /* Card background */
  --border: #e2e8f0;         /* Border color */
  --success: #10b981;        /* Green */
  --danger: #ef4444;         /* Red */
  --warning: #f59e0b;        /* Amber */
  --info: #3b82f6;           /* Blue */
}
```

### Changing Brand Color
1. Open `app/globals.css`
2. Change `--primary` in both `:root` and `.dark`
3. Update gradient classes in components (search for `indigo`)

### Adding a New Page
1. Create folder: `app/YourPage/page.jsx`
2. Add to sidebar: Edit `app/Shared/Sidebar/Sidebar.jsx` → `sidebarSections` array
3. Import shadcn components as needed

---

## Dark Mode

Dark mode works automatically based on system preference, with manual toggle support.

### How It Works
1. **Detection:** Checks `localStorage` for saved preference, falls back to system preference
2. **Toggle:** Navigation bar has a sun/moon toggle button
3. **Persistence:** Saves choice to `localStorage`
4. **CSS:** Uses Tailwind's `dark:` prefix throughout

### Customizing Dark Colors
Edit the `.dark` section in `globals.css`:
```css
.dark {
  --background: #0f172a;    /* Slate 900 */
  --card: #1e293b;          /* Slate 800 */
  --primary: #818cf8;       /* Indigo 400 */
}
```

---

## Configuration

### Next.js Config (`next.config.mjs`)
- **Image Domains:** Configured for `images.unsplash.com`, `cdn.pixabay.com`, `img.daisyui.com`
- **Turbopack:** Enabled for fast development

### Tailwind Config (`tailwind.config.js`)
- **Colors:** CSS variable-based color system
- **Fonts:** Inter font family
- **Animations:** `fade-in`, `slide-in` keyframes
- **Plugins:** DaisyUI, tailwind-scrollbar

### Path Aliases (`jsconfig.json`)
```json
{ "@/*": "./*" }
```
Use `@/app/components/ui/button` instead of relative paths.

---

## Third-Party Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.6 | React framework |
| React | 19.2.4 | UI library |
| Tailwind CSS | 3.4.13 | Utility CSS |
| DaisyUI | 4.12.10 | UI component library |
| Lucide React | Latest | Icon library |
| Chart.js | Latest | Data visualization |
| react-chartjs-2 | Latest | Chart React wrapper |
| Sonner | Latest | Toast notifications |
| jsPDF | Latest | PDF export |
| xlsx | Latest | Excel export |
| PapaParse | Latest | CSV parsing |
| class-variance-authority | Latest | Component variants |
| clsx + tailwind-merge | Latest | Class utilities |
| @radix-ui/* | Latest | Headless UI primitives |
| TinyMCE | Latest | Rich text editor |

---

## Screenshots

### Dashboard
Beautiful analytics dashboard with gradient stat cards, Chart.js bar charts, today/monthly summaries, recent products with images, and expired products table.

### POS Terminal
Split-panel layout with cart on left, product grid with images on right. Category filter pills, search, and inline cart management.

### Sales Management
Gradient stat cards, advanced filtering, clean data table with status badges and action dropdowns.

### Login / Signup
Split-panel auth pages with animated illustrations, feature highlights, and testimonials.

### Dark Mode
Full dark mode support across all 60+ pages with carefully crafted slate color palette.

---

## FAQ

**Q: How do I connect to a backend/API?**
A: This is a frontend template. Replace the hardcoded data arrays in each page with API calls using `fetch()` or libraries like Axios/SWR.

**Q: Can I use a different database?**
A: Yes! This frontend works with any backend — Node.js, Laravel, Django, etc. Just connect via REST API or GraphQL.

**Q: How do I add authentication?**
A: Use NextAuth.js or your preferred auth solution. The Login/Signup pages are already designed — just wire them up.

**Q: Can I change the color scheme?**
A: Yes! Edit CSS variables in `globals.css`. Change `--primary` and related colors to your brand colors.

**Q: Does it support RTL?**
A: Basic RTL can be added by adding `dir="rtl"` to the HTML tag and adjusting Tailwind config.

**Q: How do I deploy?**
A: Deploy to Vercel (recommended), Netlify, AWS, or any Node.js hosting. Run `npm run build` then `npm start`.

---

## Changelog

### v2.0.0 (Latest)
- ✨ Complete UI redesign with shadcn/ui component system
- ✨ New Button, Card, Badge, Input, Avatar, Separator components
- ✨ Gradient stat cards on Dashboard, Sales, and POS
- ✨ Product images from Unsplash across all pages
- ✨ Interactive POS with working cart (add, remove, quantity)
- ✨ Advanced filtering on Sales page with action dropdowns
- ✨ Login & Signup redesigned with feature panels
- ✨ Sonner toast notification system
- ✨ CSS variable-based theming system
- ✨ Fade-in / slide-in animations
- 🔧 Dark mode fixes for all inputs, checkboxes, selects
- 🔧 Next.js 16 + React 19 upgrade
- 🔧 All 61 routes building successfully

### v1.0.0
- Initial release with basic POS functionality
- 60+ pages with Tailwind CSS styling
- Dark mode support
- Chart.js integration

---

## Support

For support, please contact:
- **Email:** support@repwoop.com
- **Documentation:** This file
- **Updates:** Check CodeCanyon for latest version

---

© 2024 Repwoop. All rights reserved.
