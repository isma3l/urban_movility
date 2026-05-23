import { useEffect } from "react";
import { useCurrentLocation } from "./useCurrentLocation";
import { useLocationPermission } from "./useLocationPermission";

export function useUserLocation() {
    const { hasPermission, requestPermission } = useLocationPermission();
    const { location, refreshLocation } = useCurrentLocation();
    
    useEffect(() => {
        if (hasPermission) {
            refreshLocation()
        } else {
            requestPermission()
        }
    }, [hasPermission, refreshLocation, requestPermission]);

    return {
        hasPermission,
        location,
    }
}