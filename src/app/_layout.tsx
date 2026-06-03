import { ThemeProvider } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { useAppTheme } from '@/core/hooks/useThemeConfig';
import { APIProvider } from '@/core/api';
import { loadSelectedTheme, configureGoogle } from '@/core';
import '@/core/lib/i18n';
import { useEffect } from 'react';
import { useSyncLocationPermission } from '@/core/hooks/useSyncLocationPermission';

loadSelectedTheme();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useSyncLocationPermission();
  
  useEffect(() => {
    configureGoogle();
  }, []);

  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </Providers>
  );
}
/*
<Stack.Screen
        name="(flows)"
        options={{ presentation: "modal" }}
      />
*/

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useAppTheme();

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

/*

app/
├── _layout.tsx           ← RootLayout (Stack global)
├── index.tsx             ← Redirect inicial (opcional)
├── (auth)/
│   ├── _layout.tsx
│   ├── login.tsx
│   └── register.tsx
├── (app)/
│   ├── _layout.tsx       ← AppLayout (guard + providers)
│   ├── (tabs)/
│   │   ├── _layout.tsx   ← TabsLayout (Tabs)
│   │   ├── index.tsx     ← Home / default tab
│   │   ├── trips.tsx
│   │   └── profile.tsx
│   └── trip/
│       └── [id].tsx
└── (flows)/
    ├── search-destination.tsx
    └── payment.tsx


*/
