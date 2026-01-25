import { Button, isIOs, Text, View } from "@/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'


export default function PhoneHumberScreen() {
    const { t } = useTranslation("auth");
    const [phone, setPhone] = useState('');
    const [showPhoneCountryModal, setShowPhoneCountryModal] = useState(false);
    const [countryCode, setCountryCode] = useState<CountryCode>("ES");
    const [callingCode, setCallingCode] = useState("");
    const [country, setCountry] = useState<Country>();

    const handleSelectCountry = (country: Country) => {
        console.log({ country});
        setCountryCode(country.cca2);
        setCountry(country);
        setCallingCode(country.callingCode[0]);
    }

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1}} 
            behavior={isIOs() ? 'padding' : "height"}
            keyboardVerticalOffset={90}
        >
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Introduce tu número de teléfono</Text>
                <Text style={styles.description}>Te enviaremos un código para verificar tu número telefónico</Text>
                <View style={styles.inputContainer}>
                    <CountryPicker
                        withFlag
                        withFilter
                        withCallingCode
                        withCallingCodeButton
                        visible={showPhoneCountryModal} 
                        countryCode={countryCode}
                        onSelect={handleSelectCountry}
                        withFlagButton={true}
                        onClose={() => setShowPhoneCountryModal(false)}
                    />
                    <TextInput 
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                </View>
                <Button style={{ marginTop: 'auto', marginBottom: 32 }}>
                    {t("send-code")}
                </Button>
            </View>
        </KeyboardAvoidingView>
        
    );
}
//<Button style={{alignSelf: 'flex-end', flex: 1, backgroundColor: 'yellow'}}>Enviar código</Button>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'column',
        paddingBottom: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 6,
        padding: 8,
        height: 48        
    },
    mainTitle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 8
    },
    description: {
        fontSize: 16,
        marginBottom: 16
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        height: 36,
        marginTop: 2,
        paddingVertical: 0,
        paddingBottom: 0
    },
    prefix: {
        fontSize: 18
    }
});