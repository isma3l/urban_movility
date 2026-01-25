import { Redirect, Slot, SplashScreen, Stack } from 'expo-router';
import { useCallback, useEffect } from 'react';

const value = true;

export default function AppLayout() {
  const hide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    hide();
  }, [hide]);

  if (value) return <Redirect href="/login" />;

  return <Slot />;
}
