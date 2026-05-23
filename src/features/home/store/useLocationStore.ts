import { create } from "zustand";
import { TripLocation } from "../types";
import { createSelectors } from "@/core/lib/zustand/createSelector";


interface TripLocations {
    hasPermission: boolean,
    origin: TripLocation | null,
    destination: TripLocation | null,
    setHasPermission: (hasPermission: boolean) => void,
    setOrigin: (origin: TripLocation | null) => void,
    setDestination: (destination: TripLocation) => void
}

export const useLocationStoreBase = create<TripLocations>((set) => ({
    origin: null,
    destination: null,
    hasPermission: false,
    setHasPermission: (hasPermission) => set({ hasPermission }),
    setOrigin: (origin) => set({ origin }),
    setDestination: (destination) => set({ destination })
}))

export const useLocationStore = createSelectors(useLocationStoreBase);