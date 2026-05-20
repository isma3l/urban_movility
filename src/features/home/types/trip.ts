export const Steps = {
    ORIGIN: 'ORIGIN',
    DESTINATION: 'DESTINATION',
} as const;

export type Step = typeof Steps[keyof typeof Steps];

export interface StepConfig {
    component: React.ComponentType,
    maxHeight: boolean;
    title?: string;
    showBackButton?: boolean;
}

export type StepsRegistry = Record<Step, StepConfig>;