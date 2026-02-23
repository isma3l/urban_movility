import { Redirect, Slot, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function AppLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    }

    if (!initializing) {
      hideSplash();
    }
  }, [initializing]);

  useEffect(() => {
    const authInstance = getAuth();
    const suscriber = onAuthStateChanged(authInstance, (user) => {
      setUser(user);
      setInitializing(false);
      console.log('onAuthStateChanged', { user });
    });
    return suscriber;
  }, []);

  if (initializing) return null;

  if (!user) return <Redirect href="/login" />;

  return <Slot />;
}
