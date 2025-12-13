import { useCallback, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { cn, View } from '@/core';
import { OnboardingStep } from './OnboardingStep';
import Step1Image from '@/features/auth/assets/onboarding1.svg';
import Step2Image from '@/features/auth/assets/onboarding2.svg';

export type Step = {
  id: string;
  title: string;
  description: string;
  image: React.FC<SvgProps>;
};

const steps: Step[] = [
  {
    id: 'step1',
    title: 'Tu aplicación para ofertas justas',
    description: 'Aquí puedes elegir conductores, pasajeros y mucho más',
    image: Step1Image,
  },
  {
    id: 'step2',
    title: 'Tu seguridad es nuestra prioridad',
    description:
      'Solo proveedores de servicios verificados. Elige el tuyo por puntuación y reseñas',
    image: Step2Image,
  },
];

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const keyExtractor = useRef((item: Step) => item.id).current;

  const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = useCallback(({ item }: { item: Step }) => {
    return <OnboardingStep step={item} />;
  }, []);

  return (
    <View className="flex-1">
      <FlatList
        data={steps}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      <View className="mt-4 flex-row justify-center gap-2">
        {steps.map((_, index) => (
          <View
            key={index}
            className={cn('h-3 w-3 rounded-full', {
              'bg-black': currentIndex === index,
              'bg-gray-300': currentIndex !== index,
              'dark:bg-white': currentIndex === index,
              'dark:bg-gray-600': currentIndex !== index,
            })}
          />
        ))}
      </View>
    </View>
  );
};
