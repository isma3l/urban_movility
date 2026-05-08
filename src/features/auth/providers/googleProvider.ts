import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider } from '@react-native-firebase/auth';
import { ProviderResult, ProviderStatus } from "../types/auth";

export async function googleProvider(): Promise<ProviderResult> {
  // Verify Play Services (Android)
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { type, data } = await GoogleSignin.signIn();

    if (type === 'cancelled') return { type: ProviderStatus.CANCELLED };
  
    const idToken = data?.idToken;
    if (!idToken) throw new Error("Error obtaining Google ID token");

    const credential = GoogleAuthProvider.credential(data.idToken);
    return { type: ProviderStatus.SUCCESS, credential };
}