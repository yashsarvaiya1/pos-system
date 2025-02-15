## Folder Structure

```
pos-frontend/
├── /public             # Static assets (logos, images, etc.)
├── /src
│   ├── /app           # Next.js App Router (Replaces /pages)
│   │   ├── layout.tsx # Global Layout Component
│   │   ├── page.tsx   # Landing Page
│   │   ├── /auth      # Authentication Pages
│   │   │   ├── login.tsx
│   │   │   ├── signup.tsx
│   │   │   ├── reset-password.tsx
│   │   ├── /dashboard # Main POS Dashboard
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   ├── /products  # Product management
│   │   ├── /sales     # Sales & Billing
│   │   ├── /reports   # Reports & Analytics
│   ├── /components    # Reusable UI components (buttons, modals, tables)
│   ├── /hooks         # Custom React hooks (e.g., useAuth, useCart)
│   ├── /layouts       # Layout components (Dashboard, AuthLayout)
│   ├── /redux         # Redux store (if using Redux)
│   ├── /services      # API calls (Axios, Fetch)
│   ├── /utils         # Helper functions (currency formatting, validation)
├── .env.local         # Environment variables
├── next.config.js     # Next.js config file
├── package.json       # Dependencies
├── tailwind.config.ts # TailwindCSS config
├── tsconfig.json      # TypeScript config (if using TS)
```