import { useTranslation } from 'react-i18next';

import { View, Text, Button } from '@/core';
import { Header, IntroSlider } from '../components';

export default function OnboardingScreen() {
  const { t } = useTranslation();

  return (
    <View className="p-safe flex-1 items-center pt-16 jus">
      <View className="flex-1 items-center">
        <Header />
        <IntroSlider />
      </View>
      <View className="mt-8 gap-4 px-4">
        <Button className="w-full">Continuar con teléfono</Button>
        <Button className="w-full">Continuar con Google</Button>
        <Text className="text-center text-black">
          Al unirte a nuestra aplicación, aceptas nuestros Términos de Uso y Política de privacidad
        </Text>
        <Text>{t('title')}</Text>
      </View>
    </View>
  );
}
