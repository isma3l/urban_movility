import { View, Text } from '@/core';
import Logo from '@/features/auth/assets/logo.svg';

export const Header = () => {
  return (
    <View className="flex-row items-center gap-2 pt-3">
      <Logo />
      <Text className="">Get Started</Text>
    </View>
  );
};
