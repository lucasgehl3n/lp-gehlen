import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    // Add the Google Analytics script to the page
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${nuxtApp.$config.googleAnalyticsId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize the Google Analytics configuration
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', nuxtApp.$config.googleAnalyticsId)
    }
  }
})
