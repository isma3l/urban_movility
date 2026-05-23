import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from "@/core"
import { StyleSheet } from 'react-native';

type Props = {
    title: string
    subtitle: string
}

export function GooglePlaceRow({ title, subtitle }: Props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="map-marker" size={20} color="gray" />
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
                <Text style={styles.addressSubtitle}>{subtitle}</Text>
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
    },
    addressTitle: {
        fontSize: 15,
    },
    addressSubtitle: {
        fontSize: 14
    }
})