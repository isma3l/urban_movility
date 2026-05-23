import { useCallback, useState } from "react";
import * as Location from 'expo-location'

export function useLocationPermission() {
    const [hasPermission, setPermissionGranted] = useState(false);
    
    const requestPermission = useCallback(async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        setPermissionGranted(status === Location.PermissionStatus.GRANTED);
    }, []);
    
    return {
        hasPermission,
        requestPermission
    }
}