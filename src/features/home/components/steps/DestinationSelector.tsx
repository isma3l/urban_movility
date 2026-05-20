import { useTranslation } from 'react-i18next';
import { StyleSheet } from "react-native";
import "react-native-get-random-values";
import { useAppTheme, View } from "@/core";
import { GooglePlaceInput } from '../GooglePlaceInput';


export function DestinationSelector() {
    const { colors } = useAppTheme();
    const { t } = useTranslation("home");

    return (
        <View style={styles.container}>
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.origin_placeholder")}
                containerStyle={styles.originInput}
                addressStyle={{ top: 137 }}
            />
            <GooglePlaceInput 
                placeholder={t("bottom_sheet.destination_selector.destination_placeholder")}
                containerStyle={styles.destinationInput}
                addressStyle={{ top: 80 }}
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
        //zIndex: 2,
        marginBottom: 8,
        marginHorizontal: 12
    },
    destinationInput: {
        marginHorizontal: 12
    }
})