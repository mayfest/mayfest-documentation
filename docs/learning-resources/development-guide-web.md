---
id: development-guide-web
sidebar_position: 4
---

# Web Development Guide

## Development Standards and Practices

Our web development workflow prioritizes type safety, code quality, and consistent styling across all projects. This guide outlines our development practices and provides practical workflows for efficient development.

### Code Quality Requirements

Code quality is enforced through automated tooling and strict TypeScript usage. Before submitting any code for review, developers must ensure their code passes our quality checks by running:

```bash
npm run lint:check && npm run prettier:check
```

For formatting issues, you can apply automatic fixes:

```bash
npm run prettier:fix
```

Our ESLint configuration enforces strict TypeScript usage, prohibiting the `any` type except in rare, documented cases. This requirement ensures type safety throughout our applications and promotes better code maintainability.

## Project-Specific Development Guidelines

### Next.js Applications (dilloday.com, mayfestproductions.com)

Our Next.js applications follow a server-side rendering approach for optimal performance and SEO. When developing these applications:

1. Development Workflow

   ```bash
   # Start development server with fast refresh
   npm run dev

   # Build for production
   npm run build

   # Test production build locally
   npm run start
   ```

2. Route Management
   ```typescript
   // Use Next.js App Router for new features
   // pages/events/[eventId].tsx
   export default function EventPage({
     params,
   }: {
     params: { eventId: string };
   }) {
     // Server components are the default
     return <EventDetails id={params.eventId} />;
   }
   ```

### Vite Applications (bio.dilloday.com, bio.dilloday-editor.com)

Our Vite-powered applications prioritize development speed and build optimization. Follow these practices:

1. Development Workflow

   ```bash
   # Start development server
   npm run dev

   # Build for production
   npm run build

   # Preview production build
   npm run preview
   ```

2. Module Imports

   ```typescript
   // Use named imports for better tree-shaking
   import { useState, useEffect } from "react";

   // Leverage Vite's dynamic imports for code-splitting
   const AdminPanel = lazy(() => import("./components/AdminPanel"));
   ```

## Styling Guidelines

We employ multiple styling solutions based on project requirements:

### Tailwind CSS Implementation

Primary styling solution for most components:

```typescript
export function Card({ title, content }: CardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
}
```

### styled-components Usage

For dynamic, prop-based styling:

```typescript
const Button = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  ${({ variant }) =>
    variant === "primary"
      ? "background-color: #3b82f6; color: white;"
      : "background-color: #e5e7eb; color: #374151;"}
`;
```

:::info

Try to stick _one_ styling method: tailwindcss + shadcn/ui or strictly styled-components. This will prevent projects such as dilloday.com to be a lot less bloated due to intermixing of different styling solutions into one project

:::

### shadcn/ui Components

For consistent, accessible UI components:

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ConfirmationDialog({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

You can view the entire component library of components that shadcn/ui offers as well how to add them to the project by going [here](https://ui.shadcn.com/docs/components/accordion)

## State Management and Data Fetching

### Server-Side Data Management

For Next.js applications:

```typescript
// Use Server Components for direct database access
async function EventsList() {
  const events = await db.query.events.findMany();
  return (
    <ul>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
```

:::info

All components in Next.js are server-side rendered by **default**

:::

### Client-Side State Management

For interactive features:

```typescript
export function EventFilter() {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    date: "upcoming",
  });

  // Implement optimistic updates
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
}
```

:::warning

**For all interactive components, make sure to include the `use client` directive as the top of the file**
:::

## Performance Optimization

Implement these practices to maintain optimal performance:

1. Image Optimization

   ```typescript
   import Image from "next/image";

   export function EventHeader({ coverImage }: { coverImage: string }) {
     return (
       <Image
         src={coverImage}
         alt="Event cover"
         width={1200}
         height={630}
         priority
         className="rounded-lg"
       />
     );
   }
   ```

2. Code Splitting

   ```typescript
   // Route-based code splitting
   const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

   // Component-based code splitting
   const HeavyChart = lazy(() => import("./components/HeavyChart"));
   ```

## Database Interactions

Using Drizzle ORM for type-safe database operations:

```typescript
// schema.ts
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
});

// queries.ts
export async function getUpcomingEvents() {
  return db.query.events.findMany({
    where: eq(events.date, gt(new Date())),
    orderBy: [asc(events.date)],
  });
}
```

## Authentication and Authorization

Implementing auth with Supabase:

```typescript
// auth.ts
export async function signIn() {
  const { data, error } = await supabase.auth.signIn({
    provider: "google",
  });

  if (error) {
    throw new Error("Authentication failed");
  }

  return data;
}

// Protected routes
export function withAuth<P extends object>(
  Component: ComponentType<P>
): ComponentType<P> {
  return function ProtectedRoute(props) {
    const { user, loading } = useUser();

    if (loading) return <LoadingSpinner />;
    if (!user) return <Navigate to="/login" />;

    return <Component {...props} />;
  };
}
```

## Version Control Workflow

Follow these steps for feature development:

1. Create a feature branch:

   ```bash
   git checkout -b username-feature-name
   ```

2. Commit changes with meaningful messages:

   ```bash
   git commit -m "feat: implement event filtering"
   ```

3. Submit pull request:
   - Fill out PR template completely
   - Include screenshots for UI changes
   - Link related issues
   - Request review from appropriate team members

Remember that all code must pass type checking, linting, and formatting requirements before being merged into the main branch.

## Deployment Process

Our deployment process varies by project:

1. Next.js applications deploy through Vercel:

   - Automatic deployments on main branch updates
   - Preview deployments for pull requests
   - Environment variable management through Vercel dashboard

2. Vite applications deploy through Netlify:
   - Configure build settings in netlify.toml
   - Manage redirects for SPA routing
   - Set up environment variables in Netlify dashboard

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
