---
id: deployment
sidebar_position: 4
---

# Deployment Guide

This guide outlines the complete deployment process for the Dillo Day mobile application, covering EAS builds and submissions to both the Apple App Store and Google Play Store. We maintain separate deployment pipelines for development, staging, and production environments.

## Prerequisites

Before beginning the deployment process, ensure you have the following prerequisites configured:

First, install and configure the EAS CLI globally:

```bash
npm install -g eas-cli
eas login
```

You will need access to the following accounts and credentials:

- Apple Developer Account with App Store Connect access
- Google Play Console account with proper permissions
- Expo account with access to the project
- Firebase project credentials for the production environment

## Environment Setup

Our deployment process uses different environment configurations for each build profile. Create the necessary environment files:

```bash
# Production environment variables
cp .env.example .env.production

# Staging environment variables
cp .env.example .env.staging
```

Configure the environment variables appropriately for each environment:

```plaintext
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
```

## EAS Configuration

Our eas.json configuration defines multiple build profiles:

```json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "YOUR_APPLE_ID",
        "ascAppId": "YOUR_APP_STORE_ID",
        "appleTeamId": "YOUR_TEAM_ID"
      },
      "android": {
        "serviceAccountKeyPath": "./path/to/service-account.json",
        "track": "internal"
      }
    }
  }
}
```

## Build Process

### Development Builds

For testing on physical devices or simulators:

```bash
# iOS development client
eas build --profile development --platform ios

# Android development client
eas build --profile development --platform android
```

### Staging Builds

For internal testing and verification:

```bash
# Create staging builds for both platforms
eas build --profile preview --platform all
```

### Production Builds

For app store submission:

```bash
# Create production builds for both platforms
eas build --profile production --platform all
```

## App Store Deployment

### Apple App Store

The deployment process for iOS requires several steps:

1. Prepare app store metadata in App Store Connect:

   - Screenshots for various device sizes
   - App description and keywords
   - Privacy policy URL
   - Support URL
   - Marketing information

2. Submit the build using EAS:

```bash
eas submit -p ios --latest
```

3. Monitor the submission in App Store Connect:
   - Complete app review information
   - Respond to any reviewer questions
   - Track review status

### Google Play Store

For Android deployment:

1. Prepare store listing in Google Play Console:

   - Store listing details
   - Graphics assets
   - Content rating questionnaire
   - Data safety form

2. Submit using EAS:

```bash
eas submit -p android --latest
```

3. Monitor the submission in Google Play Console:
   - Track review progress
   - Address any policy concerns
   - Manage release rollout

## Version Management

We use semantic versioning for our releases. Version numbers are managed in two places:

1. app.json for Expo configuration:

```json
{
  "expo": {
    "version": "1.0.0",
    "ios": {
      "buildNumber": "1"
    },
    "android": {
      "versionCode": 1
    }
  }
}
```

2. EAS builds auto-increment configurations:

```json
{
  "build": {
    "production": {
      "autoIncrement": true
    }
  }
}
```

## Automated Deployment

Our CI/CD pipeline automates certain deployment tasks:

1. Pull Request Builds:

   - Automated development builds
   - Test suite execution
   - Code quality checks

2. Main Branch Deployment:
   - Staging environment updates
   - Internal testing distribution
   - Production build preparation

## Post-Deployment Verification

After deployment, perform these verification steps:

1. Install the production app from both stores
2. Verify all critical functionality:

   - User authentication
   - Push notifications
   - Map functionality
   - Real-time updates

3. Check analytics and monitoring:
   - Firebase Analytics
   - Crash reporting
   - Performance metrics

## Rollback Procedures

In case of critical issues:

1. App Store:

   - Remove app from sale in App Store Connect
   - Submit expedited review for critical fixes
   - Contact Apple Developer Support if needed

2. Play Store:
   - Halt staged rollout
   - Roll back to previous version
   - Push immediate update if necessary

## Troubleshooting

Common deployment issues and solutions:

1. Code Signing Issues:

   ```bash
   # Regenerate provisioning profiles
   eas credentials --platform ios
   ```

2. Build Failures:

   ```bash
   # Clear Expo cache
   expo clean
   ```

3. Submission Errors:
   ```bash
   # Verify credentials
   eas whoami
   eas credentials
   ```

## Support Resources

For deployment assistance:

1. Review the Expo documentation for EAS
2. Consult App Store guidelines
3. Check Google Play policies
4. Contact the development team for internal issues
