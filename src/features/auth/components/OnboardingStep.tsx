import type { Step } from './Onboarding';
import { View, Text, WINDOW_WIDTH } from '@/core';

type OnboardingStepProps = {
  step: Step;
};

export const OnboardingStep = ({ step }: OnboardingStepProps) => {
  const StepImage = step.image;
  return (
    <View className="items-center justify-center p-8 py-16" style={{ width: WINDOW_WIDTH }}>
      <StepImage width={200} height={200} />
      <Text className="mt-4 text-center text-3xl font-bold">{step.title}</Text>
      <Text className="mt-2 text-center text-xl">{step.description}</Text>
    </View>
  );
};
