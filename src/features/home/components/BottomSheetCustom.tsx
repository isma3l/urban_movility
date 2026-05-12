import { useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type Props = {
    children: React.ReactNode,
    dynamicSizing?: boolean,
    points?: (string|number)[],
    index?: number,
    handleChange?: (index: number) => void,
}

export function BottomSheetCustom({ children, points = ['50%'], dynamicSizing = false, index = 0, handleChange }: Props) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => points, [points]);

    return (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleChange}
          snapPoints={snapPoints}
          enableDynamicSizing={dynamicSizing}
          index={index}
        >
          <BottomSheetView style={styles.container}>
            {children}
          </BottomSheetView>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})