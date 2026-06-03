import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { usePermissionStore } from "../store/usePermissionStore";

export function useSyncLocationPermission() {
    const appState = useRef<AppStateStatus>(AppState.currentState);
    const checkPermission = usePermissionStore.use.checkPermission();

    useEffect(() => {
        // cold start
        checkPermission();

        const suscription = AppState.addEventListener('change', (nextAppState) => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                checkPermission();
            }
            appState.current = nextAppState;
        });

        return () => suscription.remove();
    }, [checkPermission]);
}