import { useEffect } from "react";
import { BackHandler } from "react-native";

export function useBackHandler(fn: Function) {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => { 
                fn(); 
                return true;
            }
        );
        return () => backHandler.remove();
    }, [fn]);
}