import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export function useAuthState() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
          setUser(user);
          setInitializing(false);
        });
        return unsubscribe;
      }, []);

      return {
        initializing,
        user
    }
}