import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button, useAppTheme, View, Text } from "@/core";
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTripStore } from '../../store/useTripStore';


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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 16,
        marginTop: 8  
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
    }
})