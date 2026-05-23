import { View } from '@/core';
import { StyleSheet, StatusBar } from "react-native";
import { TripMap } from '@/features/home/components';
import { TripManager } from '@/features/home/components/TripManager';
import { useUserLocation } from '@/features/home/hooks';
import { useEffect } from 'react';
import { useLocationStore } from '@/features/home/store/useLocationStore';

export default function HomeScreen() {
  const { hasPermission, location} = useUserLocation();
  const setOrigin = useLocationStore.use.setOrigin();
  const setHasPermission = useLocationStore.use.setHasPermission();

  useEffect(() => {
    setOrigin(location);
    setHasPermission(hasPermission);
  }, [hasPermission, location, setHasPermission, setOrigin]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TripMap />
      <TripManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});