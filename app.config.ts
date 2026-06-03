import type { ConfigContext, ExpoConfig } from '@expo/config';
import { Env } from './env';

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
    config: {
      googleMapsApiKey: Env.GOOGLE_MAPS_KEY
    },
    googleServicesFile: `./firebase/${Env.APP_ENV}/GoogleService-Info.plist`,
    infoPlist: {
      NSLocationWhenInUseUsageDescription: "Necesitamos tu ubicación para mostrarte los servicios cercanos.",
      NSLocationAlwaysAndWhenInUseUsageDescription: "Necesitamos tu ubicación continua para rastrear tu ruta."
    }
  },
  android: {
    config: {
      googleMaps: {
        apiKey: Env.GOOGLE_MAPS_KEY
      }
    },
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    "softwareKeyboardLayoutMode": "pan",
    edgeToEdgeEnabled: true,
    package: Env.PACKAGE,
    googleServicesFile: `./firebase/${Env.APP_ENV}/google-services.json`,
    permissions: [
      'ACCESS_COARSE_LOCATION',
      'ACCESS_FINE_LOCATION',
      'ACCESS_BACKGROUND_LOCATION',
      'FOREGROUND_SERVICE',
      'FOREGROUND_SERVICE_LOCATION'
    ]
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
        image: './assets/logo_png.png',
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
    [
      'expo-localization', {
        locationAlwaysPermission: "Permite a Altoque acceder a tu ubicación todo el tiempo.",
        locationWhenInUsePermission: "Permite a Altoque acceder a tu ubicación mientras usas la app."
      }
    ],
    '@react-native-firebase/app',
    '@react-native-google-signin/google-signin',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
          forceStaticLinking: ["RNFBApp", "RNFBAuth", "RNFBFirestore"]
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
