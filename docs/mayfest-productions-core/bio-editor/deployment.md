---
id: deployment
sidebar_position: 2
---

# Deployment Guide

This guide outlines the process for deploying the Dillo Day Bio Editor to Firebase Hosting. Firebase Hosting provides fast and secure hosting for our web application, with features like SSL encryption, global CDN distribution, and seamless integration with other Firebase services.

## Prerequisites

Before deploying the application, ensure you have the following prerequisites in place:

1. Node.js and npm installed on your development machine
2. Firebase CLI installed globally: `npm install -g firebase-tools`
3. Firebase project access with appropriate permissions
4. Local environment properly configured

## Firebase Configuration

The deployment process begins with proper Firebase configuration. The project uses Firebase for both hosting and other services like Authentication and Firestore.

### Firebase Project Setup

First, ensure your Firebase project is properly configured:

```bash
# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init
```

During initialization, select the following services:

- Hosting: Configure files for Firebase Hosting
- Firestore: Configure security rules and indexes
- Authentication: Set up sign-in methods

### Firebase Configuration File

The application uses the following Firebase configuration in `lib/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "dillo-day.firebaseapp.com",
  projectId: "dillo-day",
  storageBucket: "dillo-day.appspot.com",
  messagingSenderId: "1025535388888",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```

## Deployment Process

### Building the Application

Before deployment, build the application for production:

```bash
# Install dependencies
npm ci

# Build the application
npm run build
```

### Firebase Hosting Configuration

The `firebase.json` file configures how Firebase Hosting serves your application:

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Deploying to Firebase

Deploy the application using the Firebase CLI:

```bash
# Deploy to Firebase
firebase deploy --only hosting
```

The deployment process includes several automatic steps:

1. File upload to Firebase servers
2. CDN cache configuration
3. SSL certificate provisioning
4. Domain configuration

## Environment Management

### Production Environment Variables

Ensure all required environment variables are properly set in Firebase:

```bash
# Set Firebase environment variables
firebase functions:config:set \
  project.id="dillo-day" \
  auth.domain="dillo-day.firebaseapp.com"
```

### Security Considerations

The deployment process includes several security measures:

1. Authentication Configuration

   - Google sign-in settings
   - Authorized domains
   - Security rules

2. Firestore Security
   - Data access rules
   - Validation rules
   - Index configurations

## Post-Deployment Verification

After deployment, verify the following:

1. Application Functionality

   - Authentication works correctly
   - All features are accessible
   - Data operations function properly

2. Security Checks

   - SSL certificate is active
   - Authentication rules are enforced
   - Data access is properly restricted

3. Performance Verification
   - Page load times are acceptable
   - API responses are quick
   - CDN is properly caching

## Continuous Deployment

For automated deployments, set up a CI/CD pipeline using GitHub Actions or similar tools. Key steps include:

1. Automated Testing

   - Unit tests
   - Integration tests
   - Build verification

2. Production Builds

   - Environment configuration
   - Dependency installation
   - Build optimization

3. Deployment Steps
   - Firebase token authentication
   - Deployment command execution
   - Status verification

## Troubleshooting

Common deployment issues and their solutions:

1. Build Failures

   - Verify all dependencies are installed
   - Check environment variables
   - Review build logs

2. Firebase Errors

   - Confirm Firebase CLI is up to date
   - Verify project permissions
   - Check deployment logs

3. Authentication Issues
   - Review Firebase console settings
   - Check authorized domains
   - Verify security rules

## Rollback Procedures

If issues arise after deployment:

1. Immediate Rollback

   ```bash
   firebase hosting:clone VERSION_ID live
   ```

2. Version Management
   - Access previous versions in Firebase Console
   - Review deployment history
   - Select stable version for rollback

## Monitoring and Maintenance

After deployment, monitor the application using:

1. Firebase Console

   - Hosting metrics
   - Error reporting
   - Performance monitoring

2. Analytics
   - User engagement
   - Error tracking
   - Performance data

For additional support or questions about the deployment process, consult the Firebase documentation or reach out to the development team.
