import '../../global.css';
import { ThemeProvider } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { useThemeConfig } from '@/core/hooks/useThemeConfig';
import { APIProvider } from '@/core/api';
import { loadSelectedTheme } from '@/core';

loadSelectedTheme();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <GestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <ThemeProvider value={theme}>
          <APIProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
            <FlashMessage position="top" />
          </APIProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
