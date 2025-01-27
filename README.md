# The "Studio One" frontend project
The project is built using React.js 18+, Styled Components, and TypeScript, with data managed through a REST API connection.

### Key Features

- **React.js**: The core library for building user interfaces
- **TypeScript**: Ensures type safety and better developer experience
- **Styled Components**: Enables component-level styling in React
- **Multilingual Support**: Implemented using i18n
- **Redux Thunk**: Efficient data fetching and state management solution, part of Redux
- **Utility SCSS Classes**: Utility classes inspired by Tailwind CSS for rapid JSX styling
- **ESLint**: Enforces consistent code style and catches errors
- **Prettier**: Formats code to maintain a uniform code style
- **Alias Imports**: Clean and maintainable imports using the @ prefix
- **Vite**: A fast and efficient build tool for modern web development


## Getting Started


### Project Structure

The project follows a modular folder structure to ensure code is clean and manageable. Here's an example:
```
src
├── assets
│    ├── icons
│    └── ...
├── components
│   ├── {component}
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   │   └── ...
│   │   └── ...
├── i18n/
├── layout/
├── pages
│   ├── {page}
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts
│   │   │   └── ...
│   │   └── ...
├── routes/
├── services/
├── store
│   ├── {slices}
│   │   │   ├── {name}Slice.ts
│   │   │   └── ...
│   │   └── ...
├── styles
│   ├── scss  
│   │   ├── {name}.scss 
│   │   └── ... 
│   ├── theme
│   │   ├── {name}.js 
│   │   └── ...
│   └── ...
├── types/
└── utils/
```

#### Shared elements are stored in the global `src` folder, which includes:
- `components`: Reusable UI components
- `i18n`: Internationalization configurations and translations
- `styles`: Global styles, SCSS files, and themes
- `types`: Global TypeScript types and interfaces
- `utils`: Helper methods and utility functions

This structure promotes modularity and ensures that shared resources are well-organized while each page or feature is easy to manage.

### Useful commands

#### Development
```shell
pnpm start
```
Starts the development server with React.js.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you modify `App.tsx`.

#### Linting
```shell
pnpm run lint
```
Checks for stylistic issues and potential errors using ESLint.

#### Format Code
```shell
pnpm run format
```
Fixes linting issues and formats your code with Prettier.

#### Bundle Analyzer
```shell
pnpm run build
```
Builds the project with bundle analysis enabled to visualize JavaScript bundle sizes.

## SCSS Classes
This project includes SCSS files that generate utility classes inspired by Tailwind CSS.

### Key Features
- **Responsive Design**: SCSS classes support responsive styling for various breakpoints
- **4px Grid System**: All spacing and sizing values follow a 4px grid
- **Utility Coverage**: Provides classes for flexbox, grid, padding, margin, height, width, and more

#### Usage Example

```tsx
// Basic usage
<div className="h-full w-screen flex px-20"></div>

// Responsive
<div className="display-block md:display-flex lg:display-grid py-16 sm:py-20"></div>
```

## Learn More

To learn more about this project, check out the following resources:

- [React.js Documentation](https://react.dev/learn) - Learn about React.js features and API.
- [React-i18next](https://react.i18next.com/getting-started) - a complete i18n solution for React.js.
- [Redux Thunk Documentation](https://redux.js.org/usage/writing-logic-thunks#thunk-overview) - A guide to using Redux Thunk for data fetching and state management.
- [Styled Components](https://styled-components.com/docs) - Styling React components using CSS-in-JS.
- [Vite](https://vite.dev/guide/) - A fast build tool for modern web projects.

## Requirements

- Node.js 20+
- pnpm 7+ (install via `npm install -g pnpm`)

