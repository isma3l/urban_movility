import { View } from '@/core';
import { StyleSheet, StatusBar } from "react-native";
import { useLocation } from '@/features/home/hooks';
import { TripMap } from '@/features/home/components';
import { TripManager } from '@/features/home/components/TripManager';

export default function HomeScreen() {
  const { permissionGranted } = useLocation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TripMap permissionGranted={permissionGranted} />
      <TripManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});