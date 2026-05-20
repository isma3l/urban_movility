import { authResource } from '@/features/auth/i18n';
import { homeResource } from '@/features/home/i18n';

export const resources = {
  en: {
    auth: authResource.en,
    home: homeResource.en,
  },
  es: {
    auth: authResource.es,
    home: homeResource.es,
  },
} as const;
