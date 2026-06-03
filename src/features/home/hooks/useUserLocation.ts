import { useEffect } from "react";
import { PermissionStatus } from 'expo-location'
import { useLocationStore } from "../store/useLocationStore";
import { usePermissionStore } from "@/core/store/usePermissionStore";
import { Linking } from "react-native";

export function useUserLocation() {
    const status = usePermissionStore.use.status();
    const isCheckingPermission = usePermissionStore.use.isLoading();
    const canAskAgain = usePermissionStore.use.canAskAgain();
    const requestPermission = usePermissionStore.use.requestPermission();
    const updateCurrentLocation = useLocationStore.use.updateCurrentLocation();
    const currentLocation = useLocationStore.use.currentLocation();
    
    useEffect(() => {
        if (isCheckingPermission) return;

        if (status === PermissionStatus.GRANTED && currentLocation === null) {
            updateCurrentLocation();
        }
        
        if (status !== PermissionStatus.GRANTED && canAskAgain) {
            requestPermission();
        } 
        
        if (status === PermissionStatus.DENIED && !canAskAgain) { 
            console.log("peor caso");
            Linking.openSettings();
        }
    }, [canAskAgain, currentLocation, isCheckingPermission, requestPermission, status, updateCurrentLocation]);
}
