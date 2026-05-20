import { StyleProp, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useAppTheme } from "../hooks/useThemeConfig";

interface InputProps extends TextInputProps {
    ref?: React.Ref<TextInput>,
    style?: StyleProp<TextStyle>
}


export function Field({ ref, style, ...rest }: InputProps) {
    const { colors } = useAppTheme();
    
    return (
        <TextInput
            ref={ref}
            {...rest}
            keyboardType="visible-password"
            style={[styles.container, { borderColor: colors.primary}, style]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 8,
    }
})