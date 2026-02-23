import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from '@/core';
import { IntroSlider } from '@/features/auth/components';
import Google from '@/assets/icons/icon-google.svg';
import { useRouter } from 'expo-router';
import { signInGoogle } from '@/features/auth/utils/authGoogle';

export default function LoginScreen() {
  const { t } = useTranslation("auth");
  const router = useRouter();

  return (
    <View style={styles.container} safe>
      <View style={styles.sliderContainer}>
        <IntroSlider />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => router.navigate('/phone')}>{t("continue-phone")}</Button>
        <Button LeftIcon={Google} onPress={() => signInGoogle()}>{t("continue-google")}</Button>
        <Text style={styles.footer}>
            {t("footer")}
        </Text>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
  footer: {
    textAlign: 'center'
  }
});