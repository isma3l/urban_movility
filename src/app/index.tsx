import { SplashScreen } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const hide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    hide();
  }, [hide]);

  return (
    <View>
      <Text className="text-blue-200"> textInComponent </Text>
      <Text className="text-blue-200"> textInComponent </Text>
      <Text className="text-blue-200"> textInComponent </Text>
      <Text className="text-blue-200"> textInComponent </Text>
      <Text className="text-blue-200"> textInComponent </Text>
    </View>
  );
}
