import { getAuth, signInWithCredential, signOut as signOutFirebase } from "@react-native-firebase/auth";
import { ProviderResult, ProviderStatus } from "../types/auth"
import { useState } from "react";

export type AuthResult = {
    isSuccess: boolean;
    isError: boolean;
    isCancelled: boolean;
    error?: unknown
}

function getAuthResult(status: ProviderStatus, error?: unknown): AuthResult {
    return {
        isCancelled: status === ProviderStatus.CANCELLED,
        isError: status === ProviderStatus.ERROR,
        isSuccess: status === ProviderStatus.SUCCESS,
        error
    }
}

export function useAuth() {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const authInstance = getAuth();

    const signIn = async (providerFn: () => Promise<ProviderResult>): Promise<AuthResult> => {
        try {
            if (isSigningIn) return { isCancelled: false, isError: false, isSuccess: false};
            
            setIsSigningIn(true);
            const result = await providerFn();

            if (result.type === ProviderStatus.SUCCESS) {
                await signInWithCredential(authInstance, result.credential);
            }
            return getAuthResult(result.type)
        } catch (error: unknown) {
            return getAuthResult(ProviderStatus.ERROR, error);
        } finally {
            setIsSigningIn(false);
        }
    }
    
    const signOut = async (): Promise<AuthResult> => {
        try {
            if (isSigningIn) return { isCancelled: false, isError: false, isSuccess: false};
            
            setIsSigningIn(true);
            await signOutFirebase(authInstance);
            return getAuthResult(ProviderStatus.SUCCESS);
        } catch (error: unknown) {
            return getAuthResult(ProviderStatus.ERROR, error);
        } finally {
            setIsSigningIn(false);
        }
    }

    return {
        isSigningIn,
        signIn,
        signOut
    }
}