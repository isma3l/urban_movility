import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button, useAppTheme, View, Text } from "@/core";
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTripStore } from '../../store/useTripStore';
import { GooglePlaceRow } from '../GooglePlaceRow';

export function OriginSelector() {
    const { colors } = useAppTheme();
    const { t } = useTranslation("home");
    const selectDestination = useTripStore.use.selectDestination();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {t("bottom_sheet.origin_selector.title")}
            </Text>
            
            <Button
                onPress={selectDestination}
                LeftIcon={<MaterialCommunityIcons name="magnify" size={24} color="gray" />}
                style={[styles.destinationButton, { backgroundColor: colors.inputBackground }]}  
                textStyle={[styles.labelButton, { color: colors.inputTextPlaceholder }]}
            >
                {t("bottom_sheet.origin_selector.select_destination_button")}
            </Button>
            <View style={styles.addressContainer}>
                <GooglePlaceRow title={'Aeropuerto Barcelona - El Prat T2 y todos se van de viaje a pasear'} subtitle={'Barcelona'} />
                <GooglePlaceRow title={'Aeropuerto Barcelona - El Prat T1'} subtitle={'Barcelona'} />
                <GooglePlaceRow title={'Aeropuerto Barcelona - El Prat T3'} subtitle={'Barcelona'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 16,
        marginTop: 8,
        gap: 2
    },
    destinationButton: {
        justifyContent: 'flex-start',
        paddingStart: 52,
    },
    labelButton: {
        fontSize: 15,
        fontWeight: 500,
    },
    title: {
        fontSize: 18,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    addressContainer: {
        flex: 1,
        marginTop: 16,
        gap: 8,
    }
})