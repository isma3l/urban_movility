import { FirebaseAuthTypes  } from '@react-native-firebase/auth';

export enum ProviderStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    CANCELLED = 'CANCELLED'
 }

export type ProviderResult = 
    { type: ProviderStatus.CANCELLED } | 
    { type: ProviderStatus.SUCCESS, credential: FirebaseAuthTypes.AuthCredential}