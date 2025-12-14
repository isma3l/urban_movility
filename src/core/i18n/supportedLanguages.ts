import * as Localization from 'expo-localization';

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const getDeviceLanguage = (): AppLanguage => {
  const locale = Localization.getLocales()[0]?.languageCode;
  console.log({ locale });
  if (locale && SUPPORTED_LANGUAGES.includes(locale as AppLanguage)) {
    return locale as AppLanguage;
  }

  return 'en';
};
