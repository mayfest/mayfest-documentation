---
id: development-guide-mobile
sidebar_position: 3
---

# Mobile Development Guide

## Development Standards

### Code Quality Requirements

We maintain high code quality standards through automated tools and strict typing requirements. All code must pass our linting and formatting checks before being merged into the main branch.

To ensure your code meets our standards, run the following command before creating a pull request:

```bash
npm run lint:check && npm run prettier:check
```

If you encounter linting errors, address them manually. For formatting issues, you can automatically fix them with:

```bash
npm run prettier:fix
```

### TypeScript Usage

We enforce strict TypeScript usage across all our mobile applications. The ESLint configuration intentionally prohibits the use of `any` type except in rare, justified circumstances. This requirement serves multiple purposes:

1. Ensures type safety across our applications
2. Improves code maintainability
3. Enhances developer experience through better autocomplete
4. Reduces runtime errors through compile-time checking

## Development Workflow

### Feature Branch Development

We follow a feature branch workflow where all development occurs in dedicated branches. Never commit directly to the main branch. To start working on a new feature:

```bash
git checkout -b username-feature_name
```

Example: `git checkout -b john-push-notifications`

### Development Process

1. Create your feature branch
2. Make your changes locally
3. Test thoroughly on both iOS and Android
4. Submit a pull request with detailed description
5. Address review feedback
6. Merge after approval

## React Native and Expo Development Tips

### Fast Development Cycle

Expedite your development process by utilizing Expo's fast refresh capabilities:

1. Start your development server with hot reloading:

   ```bash
   npx expo start --clear # the --clear flag removes any cached state of the build
   ```

2. Use the Expo Go app on your physical device for rapid testing
   - Connect to the same network as your development machine
   - Scan the QR code from the terminal
   - Changes will reflect instantly
   - if they do not, go to the termianl where you have expo running and press `r` on your keyboard to trigger a refresh of the build

### Styling with NativeWind

We use NativeWind to maintain styling consistency between our web and mobile applications. Here are some best practices:

1. Style components using Tailwind classes:

   ```typescript
   import { View, Text } from "react-native";

   export function ProfileCard() {
     return (
       <View className="p-4 bg-white rounded-lg shadow-sm">
         <Text className="text-lg font-semibold">Profile</Text>
       </View>
     );
   }
   ```

2. Utilize the styled utility for complex styles:

   ```typescript
   import { styled } from "nativewind";
   import { TouchableOpacity } from "react-native";

   const StyledButton = styled(TouchableOpacity, "bg-blue-500 p-4 rounded-lg");
   ```

3. Maintain responsive layouts using Tailwind's responsive classes:
   ```typescript
   <View className="flex-row md:flex-col">
   ```

### Performance Optimization

Implement these practices to maintain optimal app performance:

1. Use React's useMemo and useCallback for expensive computations:

   ```typescript
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```

2. Implement list optimization with FlashList:

   ```typescript
   import { FlashList } from "@shopify/flash-list";

   export function OptimizedList() {
     return (
       <FlashList
         data={items}
         renderItem={renderItem}
         estimatedItemSize={200}
       />
     );
   }
   ```

3. Lazy load components when appropriate:
   ```typescript
   const HeavyComponent = lazy(() => import("./HeavyComponent"));
   ```

### Testing Across Platforms

Ensure your application works consistently across platforms:

1. Test on iOS:

   ```bash
   npx expo run:ios
   ```

2. Test on Android:

   ```bash
   npx expo run:android
   ```

3. Use platform-specific code when necessary:

   ```typescript
   import { Platform } from "react-native";

   const styles = {
     ...Platform.select({
       ios: { shadow: true },
       android: { elevation: 4 },
     }),
   };
   ```

### Debugging Tools

You can improve your debugging workflow with these tools:

1. React Native Debugger:

   - Install via Brew: `brew install --cask react-native-debugger`
   - Launch before starting your app
   - Enable remote debugging in your app

2. Flipper for native debugging:
   - Install Flipper desktop application
   - Use for network inspection, crash reporting, and layout debugging

_note_: not really required for the scale of our apps, this is a nice-to-learn

## Pull Request Guidelines

When submitting your changes:

1. Fill out the PR template completely, including:

   - Feature description
   - Testing procedures performed
   - Screenshots of UI changes
   - Potential risks or concerns

2. Ensure all automated checks pass:

   - TypeScript compilation
   - ESLint validation
   - Prettier formatting
   - Unit tests

3. Request review from appropriate team members

4. Be responsive to feedback and make requested changes promptly

## Resources

1. [Expo Documentation](https://docs.expo.dev/)
2. [React Native Documentation](https://reactnative.dev/)
3. [NativeWind Documentation](https://www.nativewind.dev/)
4. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

Remember that mobile development requires attention to platform-specific details while maintaining code consistency. Take advantage of our tooling to ensure high-quality, maintainable code.
