# D&D Tutorial App

A web application to help users learn and manage Dungeons & Dragons content, including classes, spells, monsters, and more.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Guide](#development-guide)
- [Learn More](#learn-more)

---

## Project Structure

```
dndtutorial/
  public/                  # Static files (index.html, favicon, etc.)
  src/
    assets/                # Global static assets (images, icons)
      class icons/
    components/            # Reusable React components
      CollapsableTable/
      LayoutDefault/
      LinkCard/
      Links/
      Modal/
      PreviewCard/
      SearchInput/
      SpellCard/
        assets/
          magic level icons/
          spell icons/
        SpellClasses/
    contexts/              # React context providers for state management
    pages/                 # Main app pages (routed views)
      Antecedentes/
      Classes/
        Detalhes/
      ComoJogar/
      Especies/
      FichaPersonagem/
      Home/
      Magias/
      Monstros/
        assets/
      Talentos/
      TutorialFicha/
  package.json             # Project metadata and dependencies
  tsconfig.json            # TypeScript configuration
  README.md                # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (v8 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd dndtutorial
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Available Scripts

In the project directory, you can run:

- **Start the development server:**
  ```bash
  npm start
  ```
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

- **Run tests:**
  ```bash
  npm test
  ```
  Launches the test runner in interactive watch mode.

- **Build for production:**
  ```bash
  npm run build
  ```
  Builds the app for production to the `build` folder.

- **Eject configuration (not recommended):**
  ```bash
  npm run eject
  ```
  Copies configuration files and dependencies for full control.

---

## Development Guide

- **Components:**  
  All reusable UI elements are in `src/components/`. Each subfolder is a component or a group of related components.

- **Pages:**  
  Main application views are in `src/pages/`. Each folder represents a route or a feature section (e.g., Classes, Magias, Monstros).

- **Assets:**  
  Images and icons are organized in `src/assets/` and within relevant component/page folders.

- **Contexts:**  
  Shared state and logic using React Context API are in `src/contexts/`.

- **Adding New Features:**  
  - Create new components in `src/components/`.
  - Add new pages or sections in `src/pages/`.
  - Store related assets in the appropriate `assets/` folder.

- **TypeScript:**  
  The project uses TypeScript for type safety. Update `tsconfig.json` as needed.

---

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
