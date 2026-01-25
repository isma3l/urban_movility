import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import type { Step } from './IntroSlider';
import { View, Text, WINDOW_WIDTH } from '@/core';

type OnboardingStepProps = {
  step: Step;
};

export const IntroPanel = ({ step }: OnboardingStepProps) => {
  return (
    <View className="items-center justify-center p-8 py-16" style={{ width: WINDOW_WIDTH }}>
      <Image source={step.imageId} style={styles.image} resizeMode="contain" />
      <Text className="mt-4 text-center text-3xl font-bold">{step.title}</Text>
      <Text className="mt-2 text-center text-xl">{step.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WINDOW_WIDTH * 0.8,
    height: 350,
    resizeMode: "cover"
  }
});