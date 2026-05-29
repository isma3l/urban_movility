import { useTranslation } from 'react-i18next';
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppTheme, View } from "@/core";
import { GooglePlaceInput } from '../GooglePlaceInput';
import { useLocationStore } from '../../store/useLocationStore';


export function DestinationSelector() {
    const { colors } = useAppTheme();
    const { t } = useTranslation("home");
    const currentLocation = useLocationStore.use.currentLocation();

    console.log('Destination Screen: ', currentLocation);
    const isCurrentLocationComplete = !!currentLocation?.shortAddress;

    return (
        <View style={styles.container}>
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.origin_placeholder")}
                leftIcon={<MaterialCommunityIcons name="human-greeting-variant" size={24} color={colors.inputTextPlaceholder} />}
                containerStyle={styles.originInput}
                addressListStyle={styles.originAddressList}
                initialValue={currentLocation?.shortAddress}
                initialFocus={!isCurrentLocationComplete}
            />
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.destination_placeholder")}
                leftIcon={<MaterialCommunityIcons name="flag" size={24} color={colors.inputTextPlaceholder} />}
                containerStyle={styles.destinationInput}
                addressListStyle={styles.destinationAddressList}
                initialFocus={isCurrentLocationComplete}
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
        top: 137
    },
    destinationAddressList: {
        top: 80
    }
})