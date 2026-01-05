import { useTranslation } from 'react-i18next';

import { View, Text, Button } from '@/core';
import { Header, IntroSlider } from '@/features/auth/components';

export default function OnboardingScreen() {
  const { t } = useTranslation("auth");

  return (
    <View className="p-safe flex-1 items-center pt-16">
      <View className="flex-1 items-center">
        <Header />
        <IntroSlider />
      </View>
      <View className="mt-8 gap-4 px-4">
        <Button className="w-full">{t("continue-phone")}</Button>
        <Button className="w-full">{t("continue-google")}</Button>
        <Text className="text-center text-black">
            {t("footer")}
        </Text>
        <Text>{t('title')}</Text>
      </View>
    </View>
  );
}
