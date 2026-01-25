import { Platform } from "react-native";

export const isIOs = () => {
    return Platform.OS === 'ios';
}