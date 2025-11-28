import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AnimatedSplashScreen from '../AnimatedsplashScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Perform any necessary tasks (e.g., API calls, asset loading)
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate loading
      } catch (e) {
        console.warn(e);
      } finally {
        // Set app readiness state
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const hideNativeSplash = useCallback(async () => {
    if (appIsReady && animationCompleted) {
      await SplashScreen.hideAsync(); // Hide the native splash screen
    }
  }, [appIsReady, animationCompleted]);

  // If both conditions are met, hide the native splash
  useEffect(() => {
    hideNativeSplash();
  }, [appIsReady, animationCompleted, hideNativeSplash]);

  if (!animationCompleted) {
    return <AnimatedSplashScreen onAnimationFinish={() => setAnimationCompleted(true)} />;
  }

  // Once animation and loading are complete, show the main app
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}
