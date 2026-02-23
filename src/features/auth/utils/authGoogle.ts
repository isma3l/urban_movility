import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';

export async function signInGoogle() {
    const signInResult = await GoogleSignin.signIn(); // oojo puede lanzar un  error y ver que se hace luego
    const authInstance = getAuth();
    const idToken = signInResult.data?.idToken;
    const googleCredential = GoogleAuthProvider.credential(idToken);
    await signInWithCredential(authInstance, googleCredential);
}