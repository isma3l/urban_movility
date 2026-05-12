import { View, Text } from '@/core';
import { StyleSheet, StatusBar } from "react-native";
import { BottomSheetCustom, TravelMap } from '@/features/home/components'
import { useLocation } from '@/features/home/hooks';

export default function HomeScreen() {
  const { permissionGranted } = useLocation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TravelMap permissionGranted={permissionGranted} />
      <BottomSheetCustom>
        <Text>Awesome 🎉</Text>
      </BottomSheetCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});