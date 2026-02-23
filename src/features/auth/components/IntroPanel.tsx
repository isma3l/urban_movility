import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import type { Step } from './IntroSlider';
import { View, Text, WINDOW_WIDTH } from '@/core';

type OnboardingStepProps = {
  step: Step;
};

export const IntroPanel = ({ step }: OnboardingStepProps) => {
  return (
    <View style={[ styles.container, { width: WINDOW_WIDTH }]}>
      <Image source={step.imageId} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{step.title}</Text>
      <Text style={styles.subtitle}>{step.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16
  },
  image: {
    width: WINDOW_WIDTH * 0.8,
    height: 350,
    resizeMode: "cover",
  }
});