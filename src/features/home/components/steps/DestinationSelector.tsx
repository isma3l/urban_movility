import { useTranslation } from 'react-i18next';
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppTheme, View } from "@/core";
import { GooglePlaceInput } from '../GooglePlaceInput';
import { useLocationStore } from '../../store/useLocationStore';
import { useEffect } from 'react';

export function DestinationSelector() {
    const { colors } = useAppTheme();
    const { t } = useTranslation("home");
    const currentLocation = useLocationStore.use.currentLocation();
    const setDestination = useLocationStore.use.setDestination();
    const setOrigin = useLocationStore.use.setOrigin();
    const destination = useLocationStore.use.destination();
    const origin = useLocationStore.use.origin();
console.log({currentLocation});
    console.log({origin});
    console.log({destination})

    useEffect(() => {
        if (origin !== null) return;

        if (Boolean(currentLocation?.shortAddress)) {
            setOrigin(currentLocation);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (origin && destination) {
            console.log("iniciar viaje");
        }
    }, [origin, destination]);

    const originAddress = origin?.shortAddress ?? currentLocation?.shortAddress;
    const destinationAddress = destination?.shortAddress;
    const hasOrigin = Boolean(originAddress);
    // ojo que al volver ATRAS debes eliminar los datos origin y destination , pendiente
    // como sabes que vuelves atras?

    return (
        <View style={styles.container}>
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.origin_placeholder")}
                leftIcon={<MaterialCommunityIcons name="human-greeting-variant" size={24} color={colors.inputTextPlaceholder} />}
                containerStyle={styles.originInput}
                addressListStyle={styles.originAddressList}
                initialValue={originAddress}
                initialFocus={!hasOrigin}
                setLocation={setOrigin}
            />
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.destination_placeholder")}
                leftIcon={<MaterialCommunityIcons name="flag" size={24} color={colors.inputTextPlaceholder} />}
                containerStyle={styles.destinationInput}
                addressListStyle={styles.destinationAddressList}
                initialFocus={hasOrigin}
                initialValue={destinationAddress}
                setLocation={setDestination}
            />
            <View style={{ borderTopWidth: 4, borderColor: colors.surfaceVariant, marginTop: 8 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 16,
    },
    originInput: {
        marginBottom: 8,
        marginHorizontal: 12
    },
    destinationInput: {
        marginHorizontal: 12
    },
    originAddressList: {
        top: 137,
    },
    destinationAddressList: {
        top: 80,
    }
})