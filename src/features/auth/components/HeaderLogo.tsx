import { View } from '@/core';
import { Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View className="flex-row items-center gap-2 pt-3">
      <Image source={require("@/assets/images/logo_png.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "55%",
    height: 55,
    resizeMode: "center",
  }
});
