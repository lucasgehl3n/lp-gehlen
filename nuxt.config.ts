// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    plugins: [
        { src: '~/plugins/mask.js', ssr: false },
        '~/plugins/gtag.js',
        '~/plugins/i18n.js',
    ],
    runtimeConfig: {
        public: {
            baseURLBackend: process.env.BASE_URL_BACKEND || 'http://localhost:3000',
            googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
            gaConversionWPP: process.env.GA_CONVERSION_WHATSAPP,
        },
    },
    darkMode: 'class',
})
