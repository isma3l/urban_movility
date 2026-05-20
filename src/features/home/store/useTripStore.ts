import { create } from 'zustand';
import { createSelectors } from '@/core/lib/zustand/createSelector';
import { Step, Steps } from '../types/trip';

interface TripStore {
    history: Step[];
    currentStep: Step
    origin: string;
    destination: string;

    setNextStep: (step: Step) => void;
    goBack: () => void;
    selectDestination: () => void;
}

export const useTripStoreBase = create<TripStore>((set, get) => ({
    history: [Steps.ORIGIN],
    currentStep: Steps.ORIGIN,
    origin: '',
    destination: '',
    goBack: () => {
        const hasHistory = get().history.length > 1;

        if (hasHistory) {
            const newHistory = get().history.slice(0, -1);
            set({
                history: newHistory,
                currentStep: newHistory.at(-1)
            })
        }
    },
    setNextStep: (step: Step) => {
        const hasStep = get().history.includes(step);
        if (!hasStep) {
            set((state) => ({
                currentStep: step,
                history: [...state.history, step]
            }))
        }
    },
    selectDestination: () => get().setNextStep(Steps.DESTINATION)

}));

export const useTripStore = createSelectors(useTripStoreBase);