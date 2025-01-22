---
id: development-guide
sidebar_position: 2
---

# Development Guide

This guide provides comprehensive instructions for setting up and developing the Dillo Day website locally. It covers the initial setup process, project structure, and development workflows.

## Prerequisites

Before beginning development, ensure you have the following installed:

- Node.js 20.x or later
- Git
- A code editor (VS Code recommended)
- npm or yarn package manager

## Initial Setup

Follow these steps to set up your local development environment:

1. Clone the repository:

```bash
git clone https://github.com/mayfestproductions/dilloday.com.git
cd dilloday.com
```

2. Install dependencies:

```bash
npm ci
```

3. Start the development server:

```bash
npm run dev
```

The website should now be running at `http://localhost:3000`.

## Project Structure

The Dillo Day website follows a structured organization:

### Core Directories

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and data management
- `sections/`: Major page sections
- `types/`: TypeScript type definitions

### Key Files

- `app/layout.tsx`: Root layout with navigation and footer
- `app/page.tsx`: Homepage component
- `lib/directory.ts`: Navigation configuration
- `lib/app.ts`: Firebase configuration
- `lib/teams.ts`: Team member data
- `lib/roster.ts`: Historical roster information

## Development Workflow

### Code Standards

The project currently uses multiple styling solutions, which will be consolidated in future updates:

- TailwindCSS for utility-first styling
- Styled-components for component-specific styles
- CSS modules for specific component styling

> **Note**: We plan to consolidate to a single styling solution in the future to reduce bundle size and maintain consistency. This will likely be TailwindCSS with CSS modules for complex components.

### Component Development

When creating new components:

1. Place shared components in the `components/` directory
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Include proper prop typing
5. Document complex functionality
6. Implement responsive design
7. Test across different viewports

### Working with Data

The project uses various data sources:

1. Firebase Firestore for dynamic data:

   - User information
   - Mailing list subscriptions
   - Event details

2. Static data in TypeScript files:
   - Team information
   - Historical records
   - Navigation configuration

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Run production server
- `npm run lint`: Run ESLint checks

## Key Features Development

### Navigation System

The navigation system is implemented in `components/NavigationBar.tsx` and uses:

- Dynamic scroll-based styling
- Mobile responsiveness
- Route management through `lib/directory.ts`

### Team Display

Team information is managed through:

- Data in `lib/teams.ts`
- Grid display in `components/TeamsGrid.tsx`
- Individual cards in `components/TeamBox.tsx`

### Event Information

Festival information is structured through:

- Section components in `sections/`
- Data management in relevant `lib/` files
- Interactive components for user engagement

## Common Tasks

### Adding New Pages

1. Create page component in `app/` directory
2. Update navigation in `lib/directory.ts`
3. Add necessary sections and components
4. Test routing and responsiveness

### Updating Team Information

1. Modify data in `lib/teams.ts`
2. Update types if needed
3. Test display components
4. Verify mobile responsiveness

### Managing Assets

- Place images in the `public/` directory
- Use Next.js Image component for optimization
- Follow naming conventions
- Compress assets appropriately

## Deployment

The website uses GitHub Pages for deployment:

1. Ensure all changes are committed
2. Run build checks locally
3. Create a pull request
4. Automated checks will run
5. Merge triggers deployment

## Troubleshooting

Common issues and solutions:

### Build Errors

- Verify all dependencies are installed
- Check for TypeScript errors
- Ensure environment variables are set
- Clear `.next` cache if needed

### Styling Issues

- Check CSS specificity
- Verify Tailwind classes
- Inspect styled-components
- Test responsive breakpoints

### Data Loading

- Verify Firebase configuration
- Check data structure
- Ensure proper error handling
- Test loading states

## Getting Help

For assistance:

1. Check existing GitHub issues
2. Review pull request templates
3. Contact the tech team lead
4. Consult framework documentation:
   - Next.js docs
   - TailwindCSS docs
   - Firebase docs

Remember to maintain code quality, write clear documentation, and follow established patterns in the codebase.
