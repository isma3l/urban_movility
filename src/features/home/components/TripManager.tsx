import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView, useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import { Easing } from 'react-native-reanimated';
import { DestinationSelector, OriginSelector } from '@/features/home/components';
import { StepsRegistry, Steps } from "../types";
import { useTripStore } from "../store/useTripStore";
import { BottomSheetHeader } from './BottomSheetHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, WINDOW_HEIGHT } from '@/core';
import { useBackHandler } from '@/core/hooks/useBackHandler';

const configState: StepsRegistry = {
    [Steps.ORIGIN]: {
        component: OriginSelector,
        maxHeight: false,
    },
    [Steps.DESTINATION]: {
        component: DestinationSelector,
        maxHeight: true,
        title: "bottom_sheet.destination_selector.title",
        showBackButton: true,
    },
}

export function TripManager() {
    const currentStep = useTripStore.use.currentStep();
    const goBack = useTripStore.use.goBack();
    const insets = useSafeAreaInsets();
    const [shouldBeFull, setShouldBeFull] = useState(false);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const { component: CurrentStep, maxHeight, title, showBackButton } = configState[currentStep];
    useBackHandler(goBack);

    useEffect(() => {
        if (maxHeight) {
            requestAnimationFrame(() => {
                setShouldBeFull(true);
            })
        } else {
            setShouldBeFull(false);
        }
    }, [maxHeight]);

    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 380,
        easing: Easing.out(Easing.quad)
    })

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enablePanDownToClose={false}
            handleIndicatorStyle={ maxHeight ? styles.indicator : undefined}
            enableDynamicSizing={true}
            backgroundStyle={{
                backgroundColor: 'white',
                paddingBottom: WINDOW_HEIGHT
            }}
            animationConfigs={animationConfigs}
        >
            <BottomSheetView 
                style={[
                        styles.container, 
                        { 
                            paddingBottom: insets.bottom, 
                            height: shouldBeFull ? WINDOW_HEIGHT : undefined,
                            minHeight: shouldBeFull ? WINDOW_HEIGHT : undefined,
                        }
                    ]}
            >
                <View style={{ display: maxHeight ? 'flex' : 'none'}}>
                    <BottomSheetHeader 
                        title={title}
                        showBackButton={showBackButton}
                        onPressBack={goBack}
                    />
                </View>                
                <CurrentStep />
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicator: {
        backgroundColor: 'transparent'
    }
})