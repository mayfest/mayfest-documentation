---
id: development-guide
sidebar_position: 2
---

# Development Guide

This guide provides instructions for setting up and developing the Mayfest Productions website locally. It covers the initial setup process, project structure, and development workflows.

## Getting Started

To begin development on the Mayfest Productions website, you'll need to have the following prerequisites installed on your system:

- Node.js 20.x or later
- Git
- A code editor (VS Code recommended)

### Initial Setup

Follow these steps to set up your local development environment:

1. Clone the repository:

```bash
git clone https://github.com/mayfestproductions/mayfestproductions.com.git
cd mayfestproductions.com
```

2. Install dependencies:

```bash
npm ci
```

3. Start the development server:

```bash
npm run dev
```

The site should now be running at `http://localhost:3000`.

## Project Structure

The project follows a well-organized structure designed for maintainability and scalability:

### Core Directories

- `src/`: Contains the main application code
  - `app/`: Next.js app directory containing routes and layouts
  - `components/`: Reusable React components
  - `lib/`: Utility functions and data files
  - `types/`: TypeScript type definitions

### Configuration Files

- `next.config.mjs`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `components.json`: Shadcn/UI configuration
- `postcss.config.mjs`: PostCSS configuration
- `eslint.config.mjs`: ESLint configuration

### Development Tools

- `.husky/`: Git hooks for code quality checks
- `.vscode/`: VS Code settings for consistent development
- `.github/`: GitHub Actions workflows and PR templates

## Development Workflow

### Code Quality Tools

The project uses several tools to maintain code quality:

1. TypeScript for type safety
2. ESLint for code linting
3. Prettier for code formatting
4. Husky for Git hooks

These tools run automatically during development and before commits.

### Making Changes

When working on new features or fixes:

1. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test them locally

3. Format your code:

```bash
npm run format
```

4. Check for linting issues:

```bash
npm run lint
```

5. Create a pull request following the template

### Working with Components

The project uses a component-based architecture:

1. Shared components go in `src/components/`
2. Page-specific components should be co-located with their pages
3. UI components from shadcn/ui are in `src/components/ui/`

### Content Management

The website's content is managed through TypeScript files in the `src/lib/` directory:

- Team information: `src/lib/mayfest-teams/`
- Utility functions: `src/lib/utils.ts`

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Best Practices

When developing for the Mayfest Productions website:

1. Follow TypeScript best practices and ensure proper typing
2. Use Tailwind CSS for styling, following the established patterns
3. Keep components modular and reusable
4. Write meaningful commit messages
5. Test changes thoroughly before creating pull requests

## Common Tasks

### Adding a New Page

1. Create a new directory in `src/app/`
2. Add your page component
3. Update navigation if necessary

### Creating New Components

1. Create component file in appropriate directory
2. Write component using TypeScript and Tailwind
3. Add necessary types in `src/types/`

### Updating Team Information

1. Modify team data in `src/lib/mayfest-teams/`
2. Update types if necessary
3. Test changes on team display components

## Troubleshooting

Common issues and their solutions:

1. Build errors

   - Verify all dependencies are installed
   - Check for TypeScript errors
   - Ensure all required environment variables are set

2. Development server issues

   - Clear `.next` directory
   - Reinstall dependencies
   - Check for port conflicts

3. Type errors
   - Verify type definitions
   - Check for missing imports
   - Ensure proper TypeScript configuration

## Getting Help

If you encounter issues or need assistance:

1. Check existing GitHub issues
2. Review the pull request template for guidance
3. Reach out to the development team
4. Consult the Next.js and Tailwind CSS documentation

Remember to keep the codebase clean, well-documented, and maintainable for future developers.
