import { Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from "@/core";
import { useTranslation } from 'react-i18next';

type Props = {
    title?: string;
    showBackButton?: boolean;
    onPressBack?: () => void;
}

export function BottomSheetHeader({ title, showBackButton, onPressBack}: Props) {
    const { t } = useTranslation("home");
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top/2 }}>
            <View style={styles.contentHeader}>
                { 
                    showBackButton && 
                    (
                        <Pressable 
                            style={(pressed) => ([
                                styles.button,
                                { opacity: pressed ? 0.6 : 1}
                            ])} 
                            onPress={onPressBack}
                            hitSlop={12}
                        >
                            <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
                        </Pressable>
                    )                
                }
                {
                    title && <Text style={styles.title}>{t(title)}</Text>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 8,
        paddingBottom: 8,
    },
    button: {
        position: 'absolute',
        left: 16,
        top: 8,
        borderRadius: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
    }
});