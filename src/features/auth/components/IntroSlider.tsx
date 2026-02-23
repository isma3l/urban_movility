import { useCallback, useRef, useState } from 'react';
import { FlatList, ImageSourcePropType, StyleSheet } from 'react-native';

import { useAppTheme, View } from '@/core';
import { IntroPanel } from './IntroPanel';

export type Step = {
  id: string;
  title: string;
  description: string;
  imageId: ImageSourcePropType;
};

const steps: Step[] = [
  { 
    id: 'step1',
    title: 'Tu aplicación para ofertas justas',
    description: 'Aquí puedes elegir conductores, pasajeros y mucho más',
    imageId: require('../assets/confidence.png'),
  },
  {
    id: 'step2',
    title: 'Tu seguridad es nuestra prioridad',
    description:
      'Solo proveedores de servicios verificados. Elige el tuyo por puntuación y reseñas',
    imageId: require('../assets/security.png'),
  },
];

export const IntroSlider = () => {
  const { colors } = useAppTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const keyExtractor = useRef((item: Step) => item.id).current;

  const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = useCallback(({ item }: { item: Step }) => {
    return <IntroPanel step={item} />;
  }, []);

  return (
    <View style={styles.container}>
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
      <View style={styles.dotsContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: currentIndex === index ? colors.primarySurfaceText : colors.border
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 12
  }
});