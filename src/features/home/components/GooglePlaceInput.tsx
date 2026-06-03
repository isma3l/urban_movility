import { GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocompleteRef, Place } from 'react-native-google-places-autocomplete';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GooglePlaceRow } from './GooglePlaceRow';
import { Env, useAppTheme, View } from '@/core';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { TripLocation } from '../types';

type Props = {
    placeholder?: string;
    containerStyle?: StyleProp<ViewStyle>;
    addressListStyle?: StyleProp<ViewStyle>;
    initialValue?: string;
    leftIcon?: React.ReactNode;
    initialFocus?: boolean;
    predefinedPlaces?: Place[];
    setLocation: (location: TripLocation | null) => void;
}

export function GooglePlaceInput({ 
    containerStyle, 
    leftIcon, 
    initialValue, 
    setLocation,
    predefinedPlaces = [],
    placeholder = "",
    addressListStyle = {}, 
    initialFocus = false, }: Props) {
    const { colors } = useAppTheme();
    const autocompleteRef = useRef<GooglePlacesAutocompleteRef>(null);
    const [focused, setFocused] = useState(initialFocus);
    const [hasText, setHasText] = useState(false);
    const flattenedAddressListStyle = StyleSheet.flatten(addressListStyle);

    useEffect(() => {
        if (!initialValue) return;
        console.log("seteando valor inicial: ", initialValue)
        autocompleteRef.current?.setAddressText(initialValue);
        setHasText(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!initialFocus) return;

        const timeout = setTimeout(() => {
            autocompleteRef.current?.focus();
        }, 300)
        
        return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showClearButton = hasText && focused;

    const defaultIconLeft = (
        <MaterialCommunityIcons 
            name="magnify" 
            size={24} 
            color={colors.inputTextPlaceholder}
        />
    );

    const currentLeftIcon = focused ? defaultIconLeft : (leftIcon ?? defaultIconLeft)

    const clearText = () => {
        autocompleteRef.current?.setAddressText("");
        setHasText(false);
        setLocation(null);
    }

    const handleChangeText = (text: string) => {
        const size = text.length;
        setHasText(size > 0);

        if (size === 0) {
            setLocation(null);
        }
    }

    const handleSelectedAddress = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
        const shortAddress = data.structured_formatting.main_text;
        const address = details?.formatted_address;
        const latitude = details?.geometry.location.lat
        const longitude = details?.geometry.location.lng

        if (latitude && longitude) {
            const location: TripLocation = {
                address,
                shortAddress,
                latitude,
                longitude
            }
            setLocation(location);
        }
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <GooglePlacesAutocomplete 
                ref={autocompleteRef}
                placeholder={placeholder}
                fetchDetails
                query={{
                    key: Env.GOOGLE_MAPS_KEY,
                    language: "en"
                }}
                onPress={handleSelectedAddress}
                predefinedPlacesAlwaysVisible={true}
                predefinedPlaces={predefinedPlaces}
                minLength={0}
                textInputProps={{
                    autoCorrect: false,
                    autoComplete: 'off',
                    textContentType: 'none',
                    onFocus: () => setFocused(true),
                    onBlur: () => setFocused(false),
                    onChangeText: handleChangeText,
                }}
                renderLeftButton={ () => (
                    <View style={styles.leftIconContainer}>
                        { currentLeftIcon }
                    </View>
                    )}
                renderRightButton={ () => showClearButton ? (
                    <Pressable style={styles.clearButton} onPress={clearText}>
                        <MaterialCommunityIcons name="close-circle" size={24} color="black" />
                    </Pressable>
                ) : null }
                renderRow={(data: any) => (
                    <GooglePlaceRow data={{ ...data, isPredefinedPlace: !!data.isPredefinedPlace }} />
                )}
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
                        paddingHorizontal: 36,
                        borderWidth: 2,
                        borderRadius: 8
                    },
                    listView: {
                        display: hasText ? 'flex' : 'none',
                        position: 'absolute',
                        top: 150,
                        zIndex: 99,
                        ...flattenedAddressListStyle
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
    leftIconContainer : {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 8,
        top: 8,
        zIndex: 10
    },
    clearButton: {
        position: 'absolute',
        opacity: 0.6,
        right: 16,
        top: 8,
    }
})