import { useCallback, useState } from "react";
import * as Location from 'expo-location'
import { TripLocation } from "../types/triplocation";

export function useCurrentLocation() {
    const [location, setLocation] = useState<TripLocation | null>(null)

    const refreshLocation = useCallback(async () => {
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    }, []);

    return {
        location,
        refreshLocation,
    };
}