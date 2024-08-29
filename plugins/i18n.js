import { createI18n } from 'vue-i18n';
import en from '../lang/en';
import pt from '../lang/pt';

export default defineNuxtPlugin(nuxtApp => {
    const i18n = createI18n({
        locale: 'pt',
        fallbackLocale: 'en',
        legacy: false,
        messages: {
            en,
            pt
        }
    });

    nuxtApp.vueApp.use(i18n);
});