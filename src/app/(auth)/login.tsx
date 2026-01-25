import { useTranslation } from 'react-i18next';

import { View, Text, Button } from '@/core';
import { IntroSlider } from '@/features/auth/components';
import Google from '@/assets/icons/icon-google.svg';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const { t } = useTranslation("auth");
  const router = useRouter();

  return (
    <View className="flex-1 items-center pt-16" safe>
      <View className="flex-1 items-center">
        <IntroSlider />
      </View>
      <View className="mt-8 gap-4 px-4">
        <Button className="w-full" onPress={() => router.navigate('/phone')}>{t("continue-phone")}</Button>
        <Button className="w-full" LeftIcon={Google} >{t("continue-google")}</Button>
        <Text className="text-center text-black">
            {t("footer")}
        </Text>
      </View>
    </View>
  );
}
