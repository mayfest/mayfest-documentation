---
id: development-environment
sidebar_position: 3
---

# Development Environment Setup

## Required Accounts

### GitHub Account Setup

1. Sign up for a GitHub account at [GitHub](https://github.com)
2. Set up two-factor authentication:
   - Go to Settings > Password and authentication
   - Choose your preferred 2FA method (authenticator app recommended)
   - Store backup codes in a secure location
3. Request access to Mayfest organization:
   - Reach out to technology director for access to the github organization
   - Accept the organization invitation (check your email)
   - Verify access to repositories

### Firebase Account Setup

1. Create a Google account if you don't have one
2. Visit the [Firebase Console](https://console.firebase.google.com)
3. Set up account:
   - Click "Create a project" to familiarize yourself with the interface
   - Request access to Mayfest projects from the tech lead
   - Accept project invitations via email
4. Configure local Firebase tools:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

### Spotify Developer Account

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create account:
   - Use your existing Spotify account or create a new one
   - Accept developer terms of service
3. Create development application:
   - Click "Create App"
   - Name: "Mayfest-Dev-[YourName]"
   - Description: "Local development environment for Mayfest applications"
   - Redirect URI: `http://localhost:3000/api/auth/callback/spotify`
   - Save your Client ID and Client Secret

## Development Tools

### Core Tools Installation

#### Node.js Setup

1. Download LTS version from [Node.js](https://nodejs.org)
2. Install Node Version Manager (nvm):
   - Mac/Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
   - Windows: Download [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
3. Install and use Node.js 18:
   ```bash
   nvm install 18
   nvm use 18
   nvm alias default 18
   ```
4. Verify installation:
   ```bash
   node -v  # Should show v18.x.x
   npm -v   # Should show 8.x.x or higher
   ```

#### Git Configuration

1. Download Git from [Git](https://git-scm.com/downloads)
2. Configure your identity:
   ```bash
   git config --global user.name "Your Full Name"
   git config --global user.email "your.email@example.com"
   ```
3. Set up SSH key for GitHub:
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   cat ~/.ssh/id_ed25519.pub  # Copy this output
   ```
4. Add SSH key to GitHub:
   - Go to GitHub Settings > SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key

#### Visual Studio Code Setup

1. Download from [VS Code](https://code.visualstudio.com)
2. Install required extensions:
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for code formatting
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for code quality
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for styling assistance
   - [Firebase](https://marketplace.visualstudio.com/items?itemName=toba.vsfire) for Firebase development
   - [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) for mobile development
3. Configure settings:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

### Mobile Development Setup

#### iOS Development (Mac Only)

1. Download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835)
2. Install Additional Components:
   - Launch Xcode
   - Go to Preferences > Locations
   - Install Command Line Tools
3. Install iOS Simulator:
   - Xcode > Preferences > Components
   - Download at least one iOS Simulator
4. Configure Xcode command line tools:
   ```bash
   sudo xcode-select --switch /Applications/Xcode.app
   ```

#### Android Development

1. Download [Android Studio](https://developer.android.com/studio)
2. During installation, ensure these components are selected:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
3. Configure Android SDK:
   - Launch Android Studio
   - Go to Tools > SDK Manager
   - Install Android 13 (API Level 33) SDK
4. Create Android Virtual Device:
   - Go to Tools > AVD Manager
   - Click "Create Virtual Device"
   - Select "Pixel 5" under Phone category
   - Download and select Android 13 system image
   - Complete AVD creation

#### Expo Setup

1. Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```
2. Install Expo Go on your physical device:
   - iOS: Download from [App Store](https://apps.apple.com/us/app/expo-go/id982107779)
   - Android: Download from [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
3. Create Expo account:
   ```bash
   expo register  # Or expo login if you have an account
   ```

## Project Setup

### Repository Setup

1. Clone repositories:
   ```bash
   git clone git@github.com:mayfest/project-name.git
   cd project-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Git hooks:
   ```bash
   npx husky install
   ```

### Environment Configuration

- For these, just look at `.env.example` in the project directory.

## Verifying Your Setup

### Web Applications

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Visit `http://localhost:3000`
3. Verify features:
   - Authentication flow works
   - API routes respond correctly
   - Database connections successful

### Mobile Applications

1. Start with Expo Go:
   ```bash
   npx expo start
   ```
2. Testing options:
   - Scan QR code with Expo Go on your device
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## Troubleshooting Guide

### Common Issues and Solutions

#### Node Version Issues

```bash
nvm install 18
nvm use 18
rm -rf node_modules
npm install
```

#### iOS Build Failures

1. Reset iOS build files:
   ```bash
   cd ios
   pod deintegrate
   pod install
   ```
2. Clear Metro bundler:
   ```bash
   npx react-native start --reset-cache
   ```

#### Android Build Issues

1. Clean Android build:
   ```bash
   cd android
   ./gradlew clean
   ```
2. Update Android SDK platforms in Android Studio

#### Environment Variables

1. Verify all variables are set:
   ```bash
   cat .env
   ```
2. Remember to restart your development server after changing variables

Contact the tech lead if you encounter persistent issues or need access to any services.
