---
id: development-guide
sidebar_positon: 2
---

# Local Development Setup

This guide provides comprehensive instructions for setting up your local development environment for the Dillo Day mobile application. Our application uses React Native with Expo, TypeScript, and NativeWind, requiring specific setup steps to ensure a smooth development experience.

## Prerequisites

Before beginning the setup process, ensure you have the following software installed on your development machine:

```bash
# Required versions
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.40.0
```

You will also need to install the Expo Go application on your mobile device for testing:

- iOS: Download from the App Store
- Android: Download from the Google Play Store

## Initial Setup

First, clone the repository and install the project dependencies:

```bash
# Clone the repository
git clone https://github.com/mayfestproductions/dilloday-app.git
cd dilloday-app

# Install dependencies
npm ci
```

## Environment Configuration

Create a local environment configuration file in your project root:

```bash
# Create environment file
cp .env.example .env.local
```

Edit `.env.local` with your development credentials. You will need to obtain the following:

```plaintext
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

Contact the development team to obtain these credentials for local development.

## Development Tools

Install the following development tools to enhance your development experience:

```bash
# Install Expo CLI globally
npm install -g expo-cli

# Install iOS Simulator (macOS only)
xcode-select --install

# Install Android Studio (for Android development)
# Download from https://developer.android.com/studio
```

## Running the Application

Start the development server using the following commands:

```bash
# Start the development server
npm run start

# Run on iOS (macOS only)
npm run ios

# Run on Android
npm run android
```

The Expo development server will start, and a QR code will appear in your terminal. You can scan this code with your mobile device's camera to open the application in Expo Go.

## Development Workflow

Our development environment includes several helpful commands:

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Code formatting
npm run format

# Run tests
npm run test
```

## Common Issues and Solutions

### Metro Bundler Port Conflicts

If you encounter a port conflict with the Metro bundler:

```bash
# Kill the process using port 8081
sudo lsof -i :8081
kill -9 <PID>
```

### iOS Simulator Issues

If the iOS simulator fails to start:

```bash
# Reset iOS simulator
xcrun simctl erase all
```

### Android Emulator Issues

If the Android emulator is not responding:

```bash
# Clear Android build
cd android
./gradlew clean
```

## Working with NativeWind

Our application uses NativeWind for styling. To ensure proper functionality:

```typescript
// Example component with NativeWind styling
import { View, Text } from "react-native";

export function ExampleComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-text-primary">Hello Dillo Day!</Text>
    </View>
  );
}
```

All NativeWind classes are strictly typed. The TypeScript compiler will catch any invalid class names.

## Development Best Practices

When developing new features:

1. Create a new branch from main:

```bash
git checkout -b feature/your-feature-name
```

2. Enable strict mode in your editor to catch type errors early:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

3. Use the provided component templates:

```bash
# Generate a new component
npm run generate:component ComponentName
```

4. Test on both iOS and Android regularly to ensure cross-platform compatibility.

## Firebase Emulator Setup

For local development without affecting production data:

```bash
# Install Firebase tools
npm install -g firebase-tools

# Start Firebase emulators
npm run firebase:emulate
```

Configure your application to use the local emulator by setting:

```typescript
// app/config/firebase.ts
if (__DEV__) {
  connectFirebaseEmulator(auth, "localhost", 9099);
  connectFirebaseEmulator(firestore, "localhost", 8080);
}
```

## Debugging

For debugging your application:

1. Enable remote debugging in Expo Go by shaking your device
2. Use React Native Debugger for an enhanced debugging experience:

```bash
# Install React Native Debugger (macOS)
brew install --cask react-native-debugger
```

3. Configure your editor for debugging:

```json
{
  "debug.javascript.usePreview": true
}
```

## Getting Help

If you encounter issues during setup:

1. Check the project's GitHub issues
2. Review the Expo documentation
3. Contact the development team through official channels
4. Consult the React Native documentation

Remember to keep your development environment updated with the latest changes from the main branch.
