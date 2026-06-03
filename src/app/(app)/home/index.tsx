import { View } from '@/core';
import { StyleSheet, StatusBar } from "react-native";
import { TripMap } from '@/features/home/components';
import { TripManager } from '@/features/home/components/TripManager';
import { useUserLocation } from '@/features/home/hooks';

export default function HomeScreen() {
  useUserLocation();
  
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