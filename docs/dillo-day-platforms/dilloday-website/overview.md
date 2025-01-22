---
id: overview
sidebar_positon: 1
---

# Overview

The Dillo Day website (dilloday.com) serves as the digital hub for Northwestern University's largest student-run music festival. This documentation outlines the technical implementation and features of the website, which is designed to provide festival information, handle ticket distribution, and showcase the event's rich history.

## Project Goals

The Dillo Day website aims to create an engaging platform that effectively serves multiple stakeholder groups including students, guests, artists, and sponsors. Key objectives include:

- Providing comprehensive festival information and updates
- Managing ticket registration and distribution
- Showcasing past festivals and lineups
- Facilitating sponsor engagement
- Offering real-time event updates and notifications

## Technical Architecture

The website leverages modern web technologies to ensure performance, accessibility, and maintainability:

### Technology Stack

- **Framework**: Next.js 14 with App Router for server-side rendering
- **Language**: TypeScript for type-safe development
- **Primary Styling**: TailwindCSS for utility-first styling
- **Component Styling**: Styled-components for component-specific styles
- **Animation**: Framer Motion for smooth transitions and interactions
- **State Management**: React hooks for local state management
- **Database**: Firebase Firestore for data persistence
- **Analytics**: Google Analytics for user tracking

### Key Features

The website includes several core features:

- Responsive navigation system with scroll-based modifications
- Dynamic ticket registration and distribution system
- Interactive team showcase with detailed member information
- Festival history browser with comprehensive past event details
- Mobile app promotion and download section
- Integrated mailing list subscription system
- Sponsor showcase and partnership information

## Content Structure

The website is organized into distinct sections to provide comprehensive festival coverage:

### Main Sections

- **Hero**: Dynamic countdown timer and festival date display
- **About**: Organization history and festival background
- **Lineup**: Festival performance schedule and artist information
- **Event Information**: Comprehensive guide for attendees
- **Tickets**: Registration system and distribution details
- **Festival Features**: Interactive carousel of festival attractions
- **Mobile App**: App promotion and feature showcase
- **Past Events**: Historical festival information
- **Support**: Contact information and help resources

### Interactive Elements

- Dynamic countdown timer
- Interactive festival history browser
- Team member showcase grid
- Animated section transitions
- Mobile-responsive navigation
- FAQ accordions for information organization

## Development Standards

The project maintains high development standards through:

### Code Organization

- Component-based architecture using React
- Strict TypeScript implementation
- Hybrid styling approach with Tailwind and styled-components
- Reusable UI components
- Clear separation of concerns between sections and components

### Styling Approach

The website employs a dual styling strategy:

- TailwindCSS for rapid development and consistent utilities
- Styled-components for complex, reusable component styles
- Mobile-first responsive design
- Dark theme optimization

### Performance Considerations

- Server-side rendering for optimal loading
- Image optimization and lazy loading
- Responsive asset delivery
- Client-side navigation
- Firebase performance monitoring

## Future Development

The website architecture supports future enhancements including:

- Real-time lineup updates
- Interactive festival map integration
- Enhanced ticket management system
- Expanded artist showcase features
- Additional social media integrations
- Advanced analytics tracking

## Getting Started

For detailed information about working with the website, please refer to:

- [Development Guide](./development-guide.md): Local development setup
- [Deployment Guide](./deployment.md): Production deployment process

## Support

The website is actively maintained by the Mayfest Technology Team. For support:

- Submit issues through the project repository
- Contact the technology team through official channels
- Reference this documentation for common solutions
