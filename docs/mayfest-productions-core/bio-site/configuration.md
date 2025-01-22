---
id: configuration
sidebar_positions: 2
---

# Theme Configuration

The Dillo Day Bio site implements a comprehensive theming system that ensures consistent styling across the application. This guide explains how to configure and customize the site's visual appearance using the theme configuration files.

## Theme Structure

The theming system is implemented across two primary files: a base configuration file and an extended theme file. This separation allows for both standard and advanced theming options while maintaining type safety through TypeScript interfaces.

### Base Theme Configuration

The base theme configuration is defined in `src/config/theme.ts` and establishes the core visual elements of the site. This configuration implements the `ThemeConfig` interface, which defines the essential styling properties:

```typescript
export interface ThemeConfig {
  background: string;
  text: string;
  linkBackground: string;
  linkBackgroundHover: string;
  linkForeground: string;
  linkForegroundHover: string;
  footerText: string;
  primary: string;
}
```

These properties control fundamental aspects of the site's appearance:

- `background`: The main background color of the application
- `text`: The default text color used throughout the site
- `primary`: The primary brand color used for emphasis and important elements
- `footerText`: The color used for footer content
- Link-related colors:
  - `linkBackground`: The background color of link buttons
  - `linkBackgroundHover`: The background color when hovering over links
  - `linkForeground`: The text color for links
  - `linkForegroundHover`: The text color when hovering over links

### Extended Theme Configuration

The extended theme configuration in `src/theme.ts` builds upon the base configuration to provide additional styling options, particularly for form elements and more specific UI components:

```typescript
export const theme = {
  // Base theme properties
  background: "#09142f",
  primary: "#e3ddde",
  linkBackground: "#e59BAF",
  linkForeground: "#09142f",
  linkBackgroundHover: "#09142f",
  linkForegroundHover: "#e59BAF",

  // Form-specific properties
  formTitle: "#e3ddde",
  formText: "#e3ddde",
  inputBackground: "#1b223c",
  inputForeground: "#09142f",
  inputPlaceholder: "#e3ddde",
  inputOutlineHover: "#e59BAF",
  inputOutlineFocus: "#e59BAF",

  // Footer styling
  footerText: "#e3ddde",
};
```

The extended configuration adds several form-specific color properties:

- `formTitle`: Color for form section titles
- `formText`: Color for form descriptive text
- `inputBackground`: Background color for form input fields
- `inputForeground`: Text color for form input fields
- `inputPlaceholder`: Color for input placeholder text
- `inputOutlineHover`: Input field outline color on hover
- `inputOutlineFocus`: Input field outline color when focused

## Responsive Design

The theme system includes a mobile breakpoint definition for responsive styling:

```typescript
export const mobile = "@media (max-width: 640px)";
```

This constant can be used with styled-components to apply mobile-specific styles:

```typescript
const StyledComponent = styled.div`
  // Desktop styles

  ${mobile} {
    // Mobile styles
  }
`;
```

## Usage in Components

To use the theme in your components, wrap your application with the `ThemeProvider` from styled-components and pass the theme configuration:

```typescript
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your application components */}
    </ThemeProvider>
  );
}
```

You can then access theme values in your styled components:

```typescript
const StyledButton = styled.button`
  background: ${({ theme }) => theme.linkBackground};
  color: ${({ theme }) => theme.linkForeground};

  &:hover {
    background: ${({ theme }) => theme.linkBackgroundHover};
    color: ${({ theme }) => theme.linkForegroundHover};
  }
`;
```

## Customizing the Theme

To modify the site's appearance, update the color values in the theme configuration files. When making changes:

1. Ensure all colors maintain sufficient contrast ratios for accessibility
2. Test changes across different components and screen sizes
3. Verify hover states and interactions remain visually clear
4. Consider the relationship between different UI elements when modifying colors

For example, to update the site to use a different color scheme:

```typescript
export const theme = {
  // Update these values to create a new color scheme
  background: "#000000", // New background color
  primary: "#ffffff", // New primary color
  linkBackground: "#ff0000", // New link color
  // ... update other colors as needed
};
```

## Best Practices

When working with the theme system:

1. Always use theme values instead of hardcoding colors in components
2. Test color changes across all interactive states (hover, focus, active)
3. Maintain consistent color relationships throughout the application
4. Consider color accessibility when making changes
5. Test theme changes across different device sizes

## Related Resources

For more information about implementing and modifying themes, consult:

- [Styled Components Documentation](https://styled-components.com/docs/advanced#theming)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
