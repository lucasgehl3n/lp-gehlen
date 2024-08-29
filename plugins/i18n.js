import { createI18n } from 'vue-i18n';
export default defineNuxtPlugin(nuxtApp => {
    const i18n = createI18n({
        locale: 'pt',
        fallbackLocale: 'en',
        legacy: false,
        messages: {
            en: {
                hello: 'dsadsad'
            },
            pt: {
                hello: 'Ola'
            }
        }
    });

    nuxtApp.vueApp.use(i18n);
});