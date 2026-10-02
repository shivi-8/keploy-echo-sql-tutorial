# Keploy Echo + PostgreSQL Tutorial

A single-page, interactive guide to recording and replaying a Go Echo API with Keploy. The guide covers a PostgreSQL-backed URL shortener, common Windows/WSL2 setup issues, recorded mocks, replay, and noisy response fields.

The website is built with Next.js 14, the App Router, and MDX. It includes an interactive record/replay diagram, a response-noise comparison, expandable troubleshooting notes, copyable code blocks, and a light/dark theme switch.

## Requirements

To run or build this website:

- Node.js 18.17 or later
- npm 9 or later (included with supported Node.js releases)
- Internet access during dependency installation and the first build, because the site loads its fonts with `next/font/google`

Go, PostgreSQL, Docker, WSL2, and Keploy are not required to run the website. They are relevant only if you want to follow the tutorial and run the sample API yourself. The tutorial's example environment is Windows 10, WSL2 with Ubuntu 22.04, Docker Desktop with WSL integration, Go 1.18.1, PostgreSQL 10.5, and Keploy 3.8.58. The sample API source is cloned from [`keploy/samples-go`](https://github.com/keploy/samples-go); it is not included in this repository.

## Getting Started

From the repository root, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and serve a production build:

```bash
npm run build
npm start
```

## Project Structure

```text
.
├── app/
│   ├── globals.css       # Global styles, theme tokens, and responsive layout
│   ├── layout.jsx        # Root layout, metadata, theme setup, and table of contents
│   └── page.mdx          # Tutorial content
├── components/
│   ├── Callout.jsx        # Informational, warning, and lesson callouts
│   ├── CodeBlock.jsx      # Code blocks with a copy control
│   ├── FlowDiagram.jsx    # Interactive recording/replay flow
│   ├── Issue.jsx          # Expandable troubleshooting entries
│   ├── NoiseDemo.jsx      # Interactive response comparison
│   └── ThemeToggle.jsx    # Light/dark theme control
├── jsconfig.json         # JavaScript path aliases
├── mdx-components.jsx    # MDX component registration
├── next.config.mjs       # Next.js MDX and syntax-highlighting configuration
├── package.json          # Scripts and application dependencies
└── package-lock.json     # Locked npm dependency versions
```

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` compiles and statically generates the production site.
- `npm start` serves the production build; run `npm run build` first.

Tutorial prose and code samples live in `app/page.mdx`. Reusable interactive elements live in `components/`; MDX maps their names to the React components in `mdx-components.jsx`.
