<div align="center">

# 🚀 SoftLanding POS

### Modern Point of Sale System — Built for Speed, Designed for Growth

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

<img src="https://img.shields.io/badge/60%2B-Pages-6366f1?style=flat-square" />
<img src="https://img.shields.io/badge/shadcn%2Fui-Components-000?style=flat-square" />
<img src="https://img.shields.io/badge/Dark%20Mode-Supported-1e293b?style=flat-square" />
<img src="https://img.shields.io/badge/Responsive-Mobile%20First-10b981?style=flat-square" />

</div>

---

## ✨ Overview

**SoftLanding POS** is a professional, enterprise-grade Point of Sale system with 60+ pages, built on **Next.js 16**, **React 19**, **Tailwind CSS**, and a custom **shadcn/ui**-inspired component library. Designed for retail stores, restaurants, supermarkets, and any business that needs a fast, elegant, and feature-rich POS solution.

> 💡 Fully responsive, dark mode enabled, and production-ready — perfect for CodeCanyon or SaaS deployment.

---

## 🎯 Key Features

<table>
<tr>
<td width="50%">

### 🛒 Sales & Transactions
- Real-time POS terminal
- Sales history & returns management
- Purchase order tracking
- Multi-payment method support

</td>
<td width="50%">

### 📦 Inventory Management
- Real-time stock tracking
- Low stock alerts & notifications
- Product categories, brands & units
- Damage tracking & stock adjustments

</td>
</tr>
<tr>
<td width="50%">

### 📊 Reports & Analytics
- Profit & Loss reports
- Daily, Monthly & Summary reports
- Customer & Supplier due reports
- Top customers & products ranking
- Category-wise & Purchase reports
- Customer & Supplier ledgers
- CSV, Excel & PDF exports

</td>
<td width="50%">

### 👥 People Management
- Customer & Supplier management
- Employee management & payroll
- Role-based access control
- User permissions system

</td>
</tr>
<tr>
<td width="50%">

### 💰 Financial Management
- Expense tracking & categorization
- Payment management
- Bank accounts & cash book
- Asset management

</td>
<td width="50%">

### ⚙️ System & Settings
- Company profile configuration
- Invoice & barcode customization
- Promotional SMS
- Data backup & restore
- Dark / Light theme toggle

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16.1 (App Router + Turbopack) |
| **UI Library** | React 19.2 |
| **Styling** | Tailwind CSS 3.4 + DaisyUI 4.12 |
| **Components** | Custom shadcn/ui-inspired library |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Notifications** | Sonner (toast) |
| **Export** | jsPDF, SheetJS (xlsx), html2canvas |

---

## 📁 Project Structure

```
softlanding-pos/
├── app/
│   ├── Components/        # Layout wrapper
│   ├── Shared/            # Navigation, Sidebar, Footer
│   ├── components/ui/     # shadcn-style UI components
│   ├── Hooks/             # Custom React hooks
│   ├── home/              # Dashboard
│   ├── POS/               # Point of Sale terminal
│   ├── Sales/             # Sales management
│   ├── Products/          # Product CRUD
│   ├── Categories/        # Category management
│   ├── Brands/            # Brand management
│   ├── Units/             # Unit management
│   ├── Purchase/          # Purchase orders
│   ├── Stock/             # Stock management
│   ├── Damages/           # Damage tracking
│   ├── Returns/           # Returns management
│   ├── Expenses/          # Expense tracking
│   ├── Payments/          # Payment management
│   ├── Customers/         # Customer CRUD
│   ├── Suppliers/         # Supplier CRUD
│   ├── Employee-and-Salary/  # HR & Payroll
│   ├── Bank_Accounts/     # Bank account management
│   ├── Cash_Book/         # Cash book ledger
│   ├── Owners/            # Business owner profiles
│   ├── Assets-Management/ # Asset tracking
│   ├── Settings/          # System configuration
│   ├── Users/             # User management
│   ├── Roles-And-Permissions/  # RBAC system
│   ├── Promotional-SMS/   # SMS marketing
│   ├── Login/             # Authentication
│   ├── Signup/            # Registration
│   └── [*-Report]/        # 14 report modules
├── assets/                # Static assets & logos
├── tailwind.config.js     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/md-asif-iqbal/RepWoop-POS-system.git
cd RepWoop-POS-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Screenshots

| Dashboard | POS Terminal |
|-----------|-------------|
| Modern dashboard with analytics cards | Full-featured point of sale interface |

| Products | Reports |
|----------|---------|
| Product management with filters | Comprehensive business reports |

---

## 🎨 Design System

The project uses a custom component library inspired by **shadcn/ui**:

| Component | Description |
|-----------|-------------|
| `Button` | Multiple variants (default, outline, ghost, destructive) |
| `Card` | Content containers with header/footer support |
| `Badge` | Status indicators (success, warning, destructive) |
| `Input` | Form inputs with dark mode support |
| `Separator` | Visual dividers |
| `Avatar` | User profile images with fallbacks |

All components support **dark mode** and are fully **responsive**.

---

## 📄 Pages Overview

| Module | Pages | Description |
|--------|-------|-------------|
| **Dashboard** | 1 | Business overview & analytics |
| **POS** | 1 | Point of sale terminal |
| **Sales & Purchase** | 6 | Sales, Returns, Purchase, Stock, Damages |
| **Products** | 8 | Products, Categories, Brands, Units (+ Create) |
| **People** | 8 | Customers, Suppliers, Employees, Salary |
| **Finance** | 5 | Expenses, Payments, Bank, Cash Book |
| **Reports** | 14 | All business intelligence reports |
| **Settings** | 6 | Users, Roles, Assets, Config |
| **Auth** | 2 | Login & Signup |
| **Total** | **61** | **Production-ready pages** |

---

## 🌙 Dark Mode

Full dark mode support across all 61 pages — toggleable from the navigation bar. Persists user preference via `localStorage`.

---

## 📱 Responsive Design

Fully responsive layout from mobile to 4K displays:
- **Mobile** — Collapsible sidebar with overlay
- **Tablet** — Adapted grid layouts  
- **Desktop** — Full sidebar with optimized content area

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [SoftLanding](https://github.com/md-asif-iqbal)**

⭐ Star this repo if you find it useful!

</div>
