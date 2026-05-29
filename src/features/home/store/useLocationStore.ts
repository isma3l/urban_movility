import { create } from "zustand";
import { TripLocation } from "../types";
import { createSelectors } from "@/core/lib/zustand/createSelector";


interface TripLocations {
    hasPermission: boolean,
    currentLocation: TripLocation | null;
    origin: TripLocation | null,
    destination: TripLocation | null,
    setHasPermission: (hasPermission: boolean) => void,
    setCurrentLocation: (currentLocation: TripLocation) => void;
    setOrigin: (origin: TripLocation) => void,
    setDestination: (destination: TripLocation) => void
}

export const useLocationStoreBase = create<TripLocations>((set) => ({
    currentLocation: null,
    origin: null,
    destination: null,
    hasPermission: false,
    setHasPermission: (hasPermission) => set({ hasPermission }),
    setCurrentLocation: (currentLocation) => set({ currentLocation }),
    setOrigin: (origin) => set({ origin }),
    setDestination: (destination) => set({ destination })
}))

export const useLocationStore = createSelectors(useLocationStoreBase);