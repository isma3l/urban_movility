import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet } from 'react-native';
import { Env, useAppTheme, WINDOW_HEIGHT } from "@/core";
import { useEffect, useRef } from "react";
import { useLocationStore } from "../store/useLocationStore";

const initialLocation = { latitude: 41.3851, longitude: 2.1734 };

export function TripMap() {
    const { colors } = useAppTheme();
    const mapRef = useRef<MapView>(null);
    const hasPermission = useLocationStore.use.hasPermission();
    const currentLocation = useLocationStore.use.origin();
    const { latitude, longitude } = currentLocation ?? initialLocation;

    useEffect(() => {
      mapRef.current?.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }, 1000)
    }, [latitude, longitude]);

    return (
        <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation={hasPermission}
        followsUserLocation={hasPermission}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapPadding={{ top: 0, right: 0, left: 0, bottom: WINDOW_HEIGHT * 0.5 }}
      >
        <MapViewDirections
          apikey={Env.GOOGLE_MAPS_KEY}
          origin={{
            latitude: 41.3851,
            longitude: 2.1734,
          }}
          destination={{
            latitude: 41.4036,
            longitude: 2.1744,
          }}
          strokeColor={colors.primary}
          strokeWidth={4}
        />
      </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});