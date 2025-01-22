---
id: overview
sidebar_positions: 1
---

# Overview

The Dillo Day mobile application serves as the digital companion to Northwestern University's largest student-run music festival. The application aims to enhance the festival experience through interactive features, real-time updates, and personalized content delivery. This documentation outlines both the technical implementation and planned features of the mobile application.

## Project Goals

The Dillo Day mobile application is designed to create an immersive and helpful festival experience for attendees. The application focuses on several key objectives:

- Providing real-time festival information and updates
- Enabling personalized schedule creation and management
- Offering interactive festival ground navigation
- Facilitating emergency communications and announcements
- Creating lasting digital memories through badge collection
- Supporting year-over-year continuity and engagement

## Technical Architecture

The application leverages modern mobile development technologies to ensure performance, reliability, and maintainability:

### Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript for enhanced code reliability
- **Navigation**: Expo Router for type-safe navigation
- **Styling**: NativeWind for utility-first styling
- **State Management**: React Context and hooks
- **Backend Services**: Firebase suite of products
- **Maps Integration**: React Native Maps with custom styling
- **Push Notifications**: Firebase Cloud Messaging

### Core Infrastructure

The application is built on a robust foundation that includes:

- Tab-based navigation structure for intuitive access to key features
- Centralized state management for user preferences and data
- Offline capability for essential festival information
- Real-time updates through Firebase
- Deep linking support for notifications
- Theme management with light and dark mode support

## Current Features

The application currently implements several foundational features:

- Tab-based navigation with key sections:

  - Announcements for festival updates
  - Schedule management
  - Interactive festival map
  - Information hub
  - Home dashboard

- Basic map functionality with:

  - Custom markers for key locations
  - Interactive pan and zoom
  - Location-based features

- Theme support including:
  - Dark mode compatibility
  - Custom font integration
  - Responsive design elements

## Planned Features

The development roadmap includes several key features:

### Phase 1: Core Functionality

- Firebase Authentication integration for Dillo Accounts
- Badge collection system implementation
- Basic schedule management
- Push notification framework

### Phase 2: Enhanced Features

- Interactive map with real-time location services
- Personalized schedule builder
- Emergency announcement system
- Live activity integration for iOS

### Phase 3: Media Integration

- Festival photo features
- Digital badge showcase
- Social media integration
- Festival recap generation

## Development Standards

The project maintains high development standards through:

### Code Organization

- Feature-based directory structure
- Consistent component patterns
- Type-safe development practices
- Modular feature implementation

### Styling Approach

- NativeWind for utility-first styling
- Platform-specific adaptations
- Consistent theme implementation
- Accessibility considerations

### Performance Considerations

- Optimized asset loading
- Efficient state management
- Memory usage optimization
- Battery life considerations

## Future Development

The application architecture supports several planned enhancements:

- Enhanced offline capabilities
- Advanced schedule features
- Expanded social features
- Improved location services
- Advanced notification systems

## Getting Started

For detailed information about working with the application, please refer to:

- [Local Development Setup](./setup.md): Development environment setup
- [Feature Overview](./features.md): Detailed feature documentation
- [Development Guide](./development-guide.md): Development workflows and standards
- [Deployment Guide](./deployment.md): Release process and procedures

## Support

The application is actively maintained by the Mayfest Technology Team. For support:

- Submit issues through the project repository
- Contact the technology team through official channels
- Reference this documentation for common solutions

Remember to regularly check for updates as new features and improvements are continuously being added to enhance the festival experience.
