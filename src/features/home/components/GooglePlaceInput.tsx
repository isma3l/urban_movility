import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import "react-native-get-random-values";
import { Env, useAppTheme, View } from '@/core';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useRef, useState } from 'react';

type Props = {
    placeholder?: string;
    containerStyle?: StyleProp<ViewStyle>;
    addressStyle?: StyleProp<ViewStyle>
}

export function GooglePlaceInput({ placeholder = "", containerStyle, addressStyle = {} }: Props) {
    const { colors } = useAppTheme();
    const inputRef = useRef<any>(null);
    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);
    const flattenedAddressStyle = StyleSheet.flatten(addressStyle) || {};
    
    const clearText = () => {
        inputRef.current?.setAddressText("");
        setHasText(false);
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <GooglePlacesAutocomplete 
                ref={inputRef}
                placeholder={placeholder}
                query={{
                    key: Env.GOOGLE_MAPS_KEY,
                    language: "en"
                }}
                textInputProps={{
                    autoCorrect: false,
                    autoComplete: 'off',
                    textContentType: 'none',
                    onFocus: () => setFocused(true),
                    onBlur: () => setFocused(false),
                    onChangeText: (text) => setHasText(text.length > 0)
                }}
                renderRightButton={ () => hasText ? (
                    <Pressable style={styles.clearButton} onPress={clearText}>
                        <MaterialCommunityIcons name="close-circle" size={24} color="black" />
                    </Pressable>
                ) : null }
                styles={{
                    container: {
                        flex: 0
                    },
                    textInputContainer: {
                        backgroundColor: 'transparent',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        borderColor: focused ? colors.primary : 'transparent',
                        backgroundColor: focused ? 'white' : colors.surfaceVariant,
                        borderWidth: 2,
                        borderRadius: 8
                    },
                    listView: {
                        display: hasText ? 'flex' : 'none',
                        position: 'absolute',
                        top: 150,
                        zIndex: 99,
                        ...flattenedAddressStyle
                    },
                    powered: {
                        opacity: 0.4,
                        width: 80
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
    },
    clearButton: {
        position: 'absolute',
        opacity: 0.6,
        right: 16,
        top: 8,
    }
})