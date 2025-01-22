---
id: mayfest-productions-tech-stack
sidebar_position: 2
---

# Understanding Our Technologies

A technical overview of the Mayfest Productions technology stack.

## Web Technologies

### React

A JavaScript library for building user interfaces:

- Component-based architecture
- Virtual DOM for efficient updates
- Unidirectional data flow
- Rich ecosystem of tools and libraries
  [Documentation](https://react.dev)

### Next.js

A React framework optimized for production with:

- Server-side rendering and static site generation
- Automatic code splitting and bundling
- Built-in API routes and middleware support
- Integrated build optimization and image handling
  [Documentation](https://nextjs.org/)

### Vite

A modern frontend build tool that offers:

- Lightning-fast HMR (Hot Module Replacement)
- Out-of-the-box TypeScript support
- Optimized build performance
- Plugin-based architecture
  [Documentation](https://vitejs.dev/)

### TypeScript

A strongly typed programming language built on JavaScript that:

- Provides compile-time type checking
- Enables better IDE tooling and code navigation
- Supports modern ECMAScript features
- Offers advanced type inference capabilities
  [Documentation](https://www.typescriptlang.org/)

### Drizzle ORM

A TypeScript ORM with:

- Type-safe database queries
- Zero overhead abstraction
- Prepared statement support
- Migration and seeding utilities
  [Documentation](https://orm.drizzle.team/)

### Firebase

Google's mobile platform providing:

- Real-time database and Firestore
- Authentication services
- Cloud Functions and hosting
- Analytics and crash reporting
  [Documentation](https://firebase.google.com/)

### Supabase

An open source Firebase alternative featuring:

- PostgreSQL database with real-time capabilities
- Built-in authentication and row-level security
- Auto-generated APIs
- Storage management for large files
  [Documentation](https://supabase.com/)

### Styling Solutions

#### Tailwind CSS

A utility-first CSS framework offering:

- JIT compiler for optimized production builds
- Configurable design system implementation
- Built-in responsive design utilities
- Dark mode and other advanced features
  [Documentation](https://tailwindcss.com/)

#### styled-components

CSS-in-JS library that provides:

- Dynamic styling based on props
- Automatic critical CSS
- Unique class names
- Theme support
  [Documentation](https://styled-components.com/)

#### shadcn/ui

A collection of re-usable components that:

- Implements Radix UI primitives
- Offers accessible components
- Provides copy-paste component architecture
- Supports easy customization
  [Documentation](https://ui.shadcn.com/)

## Mobile Technologies

### React Native

A cross-platform mobile framework that:

- Renders to native UI components
- Provides platform-specific implementations
- Supports hot reloading
- Enables native module integration
  [Documentation](https://reactnative.dev/)

### Expo

A React Native platform that provides:

- Managed workflow for rapid development
- Native API abstraction layer
- Over-the-air updates
- Development client tooling
  [Documentation](https://expo.dev/)

### NativeWind

Tailwind CSS for React Native with:

- Compile-time styles processing
- Platform-specific style handling
- Style inheritance support
- Custom variants for native platforms
  [Documentation](https://www.nativewind.dev/)

## Architecture Overview

Our stack is divided into two main segments:

1. **Web Platform**

- React and Next.js for server-rendered applications
  - dilloday.com
  - mayfestproductions.com
- Vite for rapid development
  - bio.dilloday.com
  - bio.dilloday-editor.com
- TypeScript for type safety across the codebase
- Drizzle ORM for database interactions
- Supabase for authentication and data storage
- Tailwind CSS, styled-components, and shadcn/ui for styling

2. **Mobile Platform**

- React Native with Expo for cross-platform development
- Firebase for mobile-specific backend services
- NativeWind for consistent styling with web platform
- TypeScript shared between platforms
