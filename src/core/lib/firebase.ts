import { Env } from '@/core';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function configureGoogle() {
  GoogleSignin.configure({
    webClientId: Env.WEB_CLIENT_ID,
    iosClientId: Env.IOS_CLIENT_ID,
    offlineAccess: false, // firebase dont need access offline to the google's account to keep user'session active
  });
}
