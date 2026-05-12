import { useCallback, useEffect, useState } from "react";
import * as Location from 'expo-location'

// TODO: NO esta contemplado el caso que se rechace el permiso, queda pendiente
export function useLocation() {
    const [permissionGranted, setPermissionGranted] = useState(false);

    const requestLocationPermissions = useCallback(async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        setPermissionGranted(status === Location.PermissionStatus.GRANTED);
    }, []);
    
    useEffect(() => {
        requestLocationPermissions();
    }, [requestLocationPermissions]);

    return {
        permissionGranted
    }
    
}