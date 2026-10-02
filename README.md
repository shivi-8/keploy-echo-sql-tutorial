 # Keploy Echo + PostgreSQL Tutorial

An interactive, single-page tutorial for learning how to **record, mock, and replay a Go Echo API with Keploy**, using a PostgreSQL-backed URL shortener as the example application.

## Live Demo

[View the deployed tutorial](https://keploy-echo-sql-tutorial-g9jz7blkv-shivi-0b65.vercel.app)

## Repository

[GitHub Repository](https://github.com/shivi-8/keploy-echo-sql-tutorial)

---

## Overview

This project provides a practical guide to using **Keploy for API testing** with a Go Echo application connected to PostgreSQL.

The tutorial covers:

- Recording API test cases with Keploy
- Generating and using mocks
- Replaying recorded test cases
- Understanding API response differences
- Handling noisy or dynamic response fields
- PostgreSQL-backed API testing
- Common Windows and WSL2 setup issues
- Troubleshooting failed recordings and replays

The website is built as an interactive documentation experience with diagrams, expandable troubleshooting sections, code examples, and theme switching.

---

## Features

- Interactive step-by-step Keploy tutorial
- Record and replay workflow diagram
- API testing and mock generation concepts
- PostgreSQL integration walkthrough
- Response-noise comparison
- Expandable troubleshooting guides
- Copyable code blocks
- Light/Dark theme
- Responsive interface
- MDX-based tutorial content

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | Web application framework |
| **React** | UI components |
| **MDX** | Interactive documentation and tutorial content |
| **JavaScript / JSX** | Application development |
| **CSS** | Styling and responsive design |
| **Keploy** | API test recording, mocking, and replay |
| **Go Echo** | Example backend API |
| **PostgreSQL** | Example application database |
| **Vercel** | Deployment |
| **Git & GitHub** | Version control and source hosting |

---

## Project Structure

```text
keploy-echo-sql-tutorial/
│
├── app/
│   ├── globals.css
│   │   └── Global styles, theme tokens, and responsive layout
│   │
│   ├── layout.jsx
│   │   └── Root layout, metadata, theme setup, and table of contents
│   │
│   └── page.mdx
│       └── Main Keploy tutorial content
│
├── components/
│   ├── Callout.jsx
│   │   └── Informational and warning callouts
│   │
│   ├── CodeBlock.jsx
│   │   └── Code blocks with copy functionality
│   │
│   ├── FlowDiagram.jsx
│   │   └── Interactive recording/replay workflow
│   │
│   ├── Issue.jsx
│   │   └── Expandable troubleshooting entries
│   │
│   ├── NoiseDemo.jsx
│   │   └── Interactive response-noise comparison
│   │
│   └── ThemeToggle.jsx
│       └── Light/dark mode switch
│
├── jsconfig.json
│   └── JavaScript path aliases
│
├── mdx-components.jsx
│   └── MDX component registration
│
├── next.config.mjs
│   └── Next.js and MDX configuration
│
├── package.json
│   └── Dependencies and npm scripts
│
├── package-lock.json
│   └── Locked dependency versions
│
└── README.md
    └── Project documentation
```

---

## How the Tutorial Works

The tutorial demonstrates the following workflow:

```text
        Go Echo API
             |
             v
       PostgreSQL DB
             |
             v
       Keploy Recording
             |
             v
     Test Cases + Mocks
             |
             v
       Keploy Replay
             |
             v
      Compare Responses
             |
             v
       Validate API
```

The goal is to demonstrate how Keploy can capture real API interactions and use the recorded information to reproduce and validate API behavior.

---

## Requirements

To run the tutorial website locally:

- Node.js 18.17+
- npm 9+
- Internet access during dependency installation and the first build

You do not need Go, PostgreSQL, Docker, WSL2, or Keploy to run the website itself.

These tools are required only if you want to reproduce the sample API and follow the complete Keploy tutorial.

### Example Tutorial Environment

The tutorial references an environment consisting of:

- Windows 10
- WSL2 with Ubuntu 22.04
- Docker Desktop with WSL integration
- Go 1.18.1
- PostgreSQL 10.5
- Keploy 3.8.58

The example Go API is based on [`keploy/samples-go`](https://github.com/keploy/samples-go) and is not included in this repository.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shivi-8/keploy-echo-sql-tutorial.git
cd keploy-echo-sql-tutorial
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build |
| `npm start` | Serves the production build |

---

## Tutorial Content

The main tutorial content is located in:

```text
app/page.mdx
```

Reusable interactive components are located in:

```text
components/
```

MDX maps these components through:

```text
mdx-components.jsx
```

---

## Resources

- [Live Demo](https://keploy-echo-sql-tutorial-g9jz7blkv-shivi-0b65.vercel.app)
- [GitHub Repository](https://github.com/shivi-8/keploy-echo-sql-tutorial)
- [Keploy Documentation](https://keploy.io/)
- [Keploy Go Samples](https://github.com/keploy/samples-go)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Author

**Shivi Sharma**
 
