import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from "@/core/utils";

type Props = {
  permissionGranted: boolean
}

export function TravelMap({ permissionGranted }: Props) {
    return (
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation={permissionGranted}
        followsUserLocation={permissionGranted}
  // 🌟 ESTO CORRIGE EL ZOOM 
        initialRegion={{
          latitude: 41.3851,
          longitude: 2.1734,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapPadding={{ top: 0, right: 0, left: 0, bottom: WINDOW_HEIGHT * 0.5 }}
      >
        
      </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});