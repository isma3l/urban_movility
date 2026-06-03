import { GooglePlaceData, Place } from 'react-native-google-places-autocomplete';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from "@/core"
import { StyleSheet } from 'react-native';

type PredefinedPlaceWithFlag = Place & { isPredefinedPlace: true };
type GooglePlaceWithFlag = GooglePlaceData & { isPredefinedPlace: false };

type Props = {
    data: (PredefinedPlaceWithFlag | GooglePlaceWithFlag);
}

export function GooglePlaceRow({ data }: Props) {
    const { title, subtitle } = data.isPredefinedPlace 
        ? { title: data.description, subtitle: "" }
        : { title: data.structured_formatting.main_text, subtitle: data.structured_formatting.secondary_text }
    
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="map-marker" size={20} color="gray" />
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                { subtitle && (
                        <Text style={styles.addressSubtitle}>{subtitle}</Text>
                    )
                }                    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        gap: 8,
    },
    addressContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    addressTitle: {
        fontSize: 15,
    },
    addressSubtitle: {
        fontSize: 14
    }
})