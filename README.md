# Evidence Education Portal

A comprehensive web application built with React, TypeScript, and Vite that showcases various educational evidence libraries and resources.

## Features

- Interactive carousel showcasing different educational sites
- Mobile-friendly layout

## Tech Stack

- React 19
- TypeScript
- Vite 6
- TailwindCSS
- Embla Carousel
- Shadcn/ui components

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd my-evidance-education-io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Building for Production

1. Create a production build:

```bash
npm run build
```

2. Preview the production build locally:

```bash
npm run preview
```

The production build will be created in the `dist` folder.

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   └── ...        # Feature components
├── data/          # Data and configuration files
├── lib/           # Utility functions and shared code
└── ...            # Root files (App.tsx, main.tsx)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting
