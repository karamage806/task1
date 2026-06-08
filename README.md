# Fluxify — Week 1 Frontend

A React + Vite + Tailwind CSS project covering Tasks 6–10 of the Fluxify internship curriculum.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ProfileCard/        # Task 6 — ProfileCard, Avatar, Badge, Bio
│   ├── ShoppingCart/       # Task 7 — ShoppingCart, ProductCard, CartSummary
│   ├── Layout/             # Task 8 — Header (dark mode), Sidebar
│   ├── Forms/              # Task 9 — RegistrationForm, LivePreviewForm
│   └── TeamDirectory/      # Task 10 — TeamDirectory, SearchBar, MemberCard, MemberList, AddMemberForm
├── Counter.jsx             # Task 7
├── ToggleCard.jsx          # Task 7
├── ColorPicker.jsx         # Task 7
├── ItemList.jsx            # Task 6
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Tailwind directives + global styles
```

## React Concepts Demonstrated

| Task | Concept |
|------|---------|
| 6 | Functional components, JSX, props, component composition, `.map()` with `key`, conditional rendering |
| 7 | `useState`, event handlers, lifting state up, passing callbacks as props |
| 8 | Tailwind CSS responsive design (`md:flex`, grid cols), dark mode with `class` strategy, `localStorage` persistence |
| 9 | Controlled inputs, form validation, `onChange` handlers, state objects |
| 10 | Multi-component app architecture, real-time search filtering, dynamic list updates |

## Tech Stack

- **React 18** — UI library
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v3** — Utility-first CSS framework
- **PostCSS + Autoprefixer** — CSS processing

## Features

- ✅ 10+ functional components across 5 task areas
- ✅ Responsive layout: sidebar hidden on mobile (`hidden md:flex`)
- ✅ 3-column card grid collapsing to 1 on mobile
- ✅ Dark / light mode toggle persisted in `localStorage`
- ✅ Registration form with full validation
- ✅ Live-preview profile form
- ✅ Team Directory with real-time search + add member (no page refresh)
- ✅ Shopping Cart with lifted state
- ✅ Counter with no-negative guard
