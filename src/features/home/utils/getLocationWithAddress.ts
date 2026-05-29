import * as Location from 'expo-location'
import { TripLocation } from "../types";

export async function getLocationWithAddress(location: TripLocation) {
    try {
        const results = await Location.reverseGeocodeAsync({
            latitude: location.latitude,
            longitude: location.longitude
        });
        const address = results[0];

        const updatedTripLocation: TripLocation = {
            ...location,
            address: address.formattedAddress ?? "",
            shortAddress: `${address.street} ${address.streetNumber}`
        }
        return updatedTripLocation;
    } catch {
        return null;
    }
}