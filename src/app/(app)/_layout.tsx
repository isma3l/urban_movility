import { Redirect, Slot } from 'expo-router';
import { useEffect } from 'react';
import { useAuthState } from '@/features/auth/hooks';

export default function AppLayout() {
  const { initializing, user } = useAuthState();

  useEffect(() => {
    const hideSplash = async () => {
      //await SplashScreen.hideAsync(); // usar una biblioteca externa para manejar el splash
    }

    if (!initializing) {
      hideSplash();
    }
  }, [initializing]);

  if (initializing) return null;

  if (!user) return <Redirect href="/login" />;

  return <Slot />;
}
