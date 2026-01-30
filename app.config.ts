import type { ConfigContext, ExpoConfig } from '@expo/config';
import { clientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  name: Env.NAME,
  slug: Env.SLUG,
  version: Env.VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  experiments: {
    typedRoutes: true,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    googleServicesFile: `./firebase/${Env.APP_ENV}/GoogleService-Info.plist`
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    edgeToEdgeEnabled: true,
    package: Env.PACKAGE,
    googleServicesFile: `./firebase/${Env.APP_ENV}/google-services.json`
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        backgroundColor: '#FFFFFF',
        image: './assets/adaptive-icon.png',
        imageWidth: 150,
      },
    ],
    [
      'expo-font',
      {
        fonts: ['./assets/fonts/Inter.ttf'],
      },
    ],
    'expo-router',
    'expo-localization',
    '@react-native-firebase/app',
    '@react-native-google-signin/google-signin',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
          useModularHeaders: true
        }
      }
    ],
    [
        "react-native-edge-to-edge",
        {
          "android": {
            "parentTheme": "Default",
            "enforceNavigationBarContrast": false
          }
        }
      ]
  ],
  extra: {
    ...Env,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
