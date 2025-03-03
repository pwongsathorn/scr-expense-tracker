// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import '@/styles/main.scss'
import { createVuetify } from 'vuetify'
import DayJsAdapter from '@date-io/dayjs'
import { enUS as DateEn, th as DateTh } from 'date-fns/locale'
import th from '@/locale/th'
import en from '@/locale/en'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { en as VuetifyEn } from 'vuetify/locale'
// themes
import midnight from '@/theme/midnight'

export default defineNuxtPlugin((app) => {
  const messages = {
    en: {
      ...en,
      $vuetify: {
        ...VuetifyEn,
        dataIterator: {
          rowsPerPageText: 'Items per page:',
          pageText: '{0}-{1} of {2}',
        },
      },
    },
    th: {
      ...th,
      $vuetify: {
        ...VuetifyEn,
        // dataIterator: {
        //   rowsPerPageText: 'Element per sida:',
        //   pageText: '{0}-{1} av {2}',
        // },
      },
    },
  }
  const i18n = createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: 'th',
    fallbackLocale: 'en',
    messages,
  })
  const vuetify = createVuetify({
    // ... your configuration
    date: {
      adapter: DayJsAdapter,
      locale: { en: DateEn, th: DateTh },
    },
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    theme: {
      defaultTheme: 'midnight',
      themes: {
        midnight,
      },
    },
  })
  app.vueApp.use(vuetify)
})

declare module 'vuetify' {
  namespace DateModule {
    interface Adapter extends DayJsAdapter {}
  }
}
