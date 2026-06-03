import { create } from "zustand";
import { createSelectors } from "@/core/lib/zustand/createSelector";
import { TripLocation } from "../types";

interface LocationState {
    currentLocation: TripLocation | null;
    origin: TripLocation | null;
    destination: TripLocation | null;
    isUpdatingCurrentLocation: boolean;
    error: string | null;
    updateCurrentLocation: () => Promise<void>;
    setOrigin: (origin: TripLocation | null) => void;
    setDestination: (destination: TripLocation | null) => void;
    resetOriginAndDestination: () => void;
}

export const useLocationStoreBase = create<LocationState>((set, get) => ({
    currentLocation: null,
    origin: null,
    destination: null,
    error: null,
    isUpdatingCurrentLocation: false,
    updateCurrentLocation: async () => {
        if (get().isUpdatingCurrentLocation) return;

        set({ isUpdatingCurrentLocation: true, error: null });
        try {
            await new Promise<void>(resolve => setTimeout(resolve, 1500));
            const currentLocation: TripLocation = {
                address: "Carrer de Llança, 11, Eixample, 08015 Barcelona, Spain",
                latitude: 41.3757409,
                longitude: 2.1509197,
                shortAddress: "Carrer de Llança, 11"
            };
            set({ currentLocation });

            /*
            Technical debt: Sometimes location acquisition fails; check it later while working with a default position.

            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
            const currentLocation: TripLocation = { latitude, longitude };
            set( { currentLocation });

            const results = await Location.reverseGeocodeAsync({ latitude, longitude });
            const { formattedAddress = null, street = null, streetNumber = null } = results[0];

            if (formattedAddress !== null && street !== null && streetNumber !== null) {
                set({ currentLocation: {
                    ...currentLocation,
                    address: formattedAddress,
                    shortAddress: `${street} ${streetNumber}`
                }});
            } else {
                throw Error('Invalid address format');
            }
                */
        } catch (e) {
            console.log("ERROR", {e})
            set({ error : 'Error obtaining the position or direction'});
            console.error('Error obtaining the position or direction');
        } finally {
            set({ isUpdatingCurrentLocation:  false });
        }
    },
    setOrigin: (origin) => set({ origin }),
    setDestination: (destination) => set({ destination }),
    resetOriginAndDestination: () => set({ origin: null, destination: null })
}))

export const useLocationStore = createSelectors(useLocationStoreBase);