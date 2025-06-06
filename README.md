# Vite Starter Template

A modern, production-ready starter template built with React, TypeScript, Vite, and TailwindCSS. This template includes routing, UI components, and development tools configured out of the box.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full TypeScript support with type checking
- 🎨 **TailwindCSS v4** - Modern utility-first CSS framework
- 🧭 **TanStack Router** - Type-safe routing with devtools
- 🎯 **Shadcn UI** - Headless, accessible UI components
- 🧹 **ESLint + Prettier** - Code linting and formatting
- 🎭 **Lucide Icons** - Beautiful, customizable icons

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm or bun

### Installation

1. Clone this repository:

```bash
git clone <git@github.com:RahullRawat/vite-starter.git>
cd vite-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## 🏗️ Project Structure

```
vite-starter/
├── src/
│   ├── components/     # Reusable UI components
│   ├── routes/         # Application routes
│   ├── lib/           # Utility functions
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── eslint.config.js   # ESLint configuration
```

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling

- **TailwindCSS v4** - Utility-first CSS framework
- **tailwind-merge** - Merge Tailwind classes efficiently
- **class-variance-authority** - Component variant management

### Routing

- **TanStack Router** - Type-safe routing solution
- **TanStack Router DevTools** - Development tools for routing

### UI Components

- **Shadcn UI** - Headless, accessible components
- **Lucide React** - Beautiful SVG icons

### Code Quality

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🎨 Styling

This template uses TailwindCSS v4 with the new Vite plugin for optimal performance. The configuration includes:

- Modern CSS features
- Responsive design utilities
- Dark mode support (if configured)
- Custom animations with `tw-animate-css`

## 🧭 Routing

TanStack Router provides:

- Type-safe routing
- Code splitting
- Search params validation
- Layout routes
- Development tools

## 📦 Building for Production

```bash
bun run build
```

This will:

1. Type-check your code with TypeScript
2. Build optimized bundles with Vite
3. Output files to the `dist` directory

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Shadcn UI](https://ui.shadcn.com/) - Low-level UI primitives

---

Built with ❤️
