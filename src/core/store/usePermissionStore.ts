import { createSelectors } from "@/core/lib/zustand/createSelector";
import * as Location from 'expo-location'
import { create } from "zustand"

interface PermissionState {
    status: Location.PermissionStatus;
    canAskAgain: boolean;
    error: string | null;
    isLoading: boolean;
    checkPermission: () => Promise<void>;
    requestPermission: () => Promise<void>;
}

const usePermissionStoreBase = create<PermissionState>((set, get) => ({
    status: Location.PermissionStatus.UNDETERMINED,
    canAskAgain: false,
    isLoading: false,
    error: null,

    checkPermission: async () => {
        if (get().isLoading) return;

        set({ isLoading: true, error: null });
        try {
            const { status, canAskAgain } = await Location.getForegroundPermissionsAsync();
            set({ status, canAskAgain });
        } catch (e) {
            set({ error: 'The location permission could not be verified' });
            console.error('The location permission could not be verified');
        } finally {
            set({ isLoading: false })
        }
    },

    requestPermission: async () => {
        if (get().isLoading) return;

        set({ isLoading: true, error: null});
        try {
            const { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
            set({ status, canAskAgain });
        } catch (e) {
            set({ error: `It was not possible to apply for the location permit.` })
        } finally {
            set({ isLoading: false });
        }
    }
}));

export const usePermissionStore = createSelectors(usePermissionStoreBase);