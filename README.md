# Triply - Modern React Landing Page

# Live Site - https://triply-hazel.vercel.app/

A modern and minimalistic, responsive landing page built with React, Vite, and Tailwind CSS. This project includes multiple pages, a responsive navigation bar, and a clean, professional design.

## Features

- 🚀 Built with React 18 and Vite
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🧭 Client-side routing with React Router
- ⚡ Fast refresh and optimized builds
- 🛠️ Pre-configured with ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd triply
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Available Scripts

- `npm start` or `yarn start` - Start the development server
- `npm run build` or `yarn build` - Build for production
- `npm run preview` or `yarn preview` - Preview the production build
- `npm run lint` or `yarn lint` - Lint the code
- `npm run format` or `yarn format` - Format the code with Prettier

## Project Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable UI components
│   └── layout/       # Layout components (Header, Footer, etc.)
├── pages/            # Page components
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. The main styles are defined in `src/index.css` using Tailwind's `@apply` directives.

## Routing

Routing is handled by [React Router](https://reactrouter.com/). The main routes are defined in `src/App.jsx`.

## Deployment

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is open source and available under the [MIT License](LICENSE).
