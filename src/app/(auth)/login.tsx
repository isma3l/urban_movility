import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { View, Button } from '@/core';
import { IntroSlider } from '@/features/auth/components';
import Google from '@/assets/icons/icon-google.svg';
import { Redirect, useRouter } from 'expo-router';
import { googleProvider } from '@/features/auth/providers/googleProvider';
import { useAuth, useAuthState } from '@/features/auth/hooks';

export default function LoginScreen() {
  const { t } = useTranslation("auth");
  const { signIn } = useAuth();
  const { user } = useAuthState();
  const router = useRouter();

  if (user) return <Redirect href={"/(app)/home"} />

  return (
    <View style={styles.container} safe>
      <View style={styles.sliderContainer}>
        <IntroSlider />
      </View>
      <View style={styles.buttonContainer}>
        <Button LeftIcon={Google} variant='elevation' onPress={() => signIn(googleProvider)}>{t("login-button-google")}</Button>
        <Button onPress={() => router.navigate('/phone')}>{t("login-button-phone")}</Button>
        <Button variant='text'>{t("login-button-email")}</Button>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 32,
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