import { View } from '@/core';
import { StyleSheet, StatusBar } from "react-native";
import { TripMap } from '@/features/home/components';
import { TripManager } from '@/features/home/components/TripManager';
import { useUserLocation } from '@/features/home/hooks';
import { useEffect } from 'react';
import { useLocationStore } from '@/features/home/store/useLocationStore';
import { getLocationWithAddress } from '@/features/home/utils';

export default function HomeScreen() {
  const { hasPermission, location} = useUserLocation();
  const setCurrentLocation = useLocationStore.use.setCurrentLocation();
  const setHasPermission = useLocationStore.use.setHasPermission();

  useEffect(() => {
    setHasPermission(hasPermission);
  }, [hasPermission, setHasPermission]);

  useEffect(() => {
    const updateCurrentLocation = async () => {
      if (location) {
        console.log("direcion: ", location)
        setCurrentLocation(location);

        const updatedLocation = await getLocationWithAddress(location);
        if (updatedLocation) {
          console.log("direccion completa:", updatedLocation);
          setCurrentLocation(updatedLocation);
        }
      }
    }
    updateCurrentLocation();
  }, [location, setCurrentLocation]);

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