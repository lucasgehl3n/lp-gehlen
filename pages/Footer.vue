<template>
  <footer class="footer bg-gray-800 p-4 py-8 md:p-8 lg:p-10">
    <div class="container mx-auto text-center">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <a href="#" class="footer-logo flex items-center mb-4 text-2xl font-semibold lg:mb-0 text-white">
          <img src="~/assets/images/logo-lucas.svg" height="100" width="50" class="ml-auto mr-auto" alt="Logotipo Lucas">
        </a>
        <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ $t('copyright', { year: new Date().getFullYear(), name: 'Lucas Gehlen' }) }}
        </span>
        <div class="social-links flex justify-center mt-4 space-x-6 sm:mt-0">
          <a href="https://www.instagram.com/l_gehlen/" class="social-icon hover:text-white text-gray-400" aria-label="Instagram" target="_blank">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <!-- SVG path here -->
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lgehlen" class="social-icon hover:text-white text-gray-400" aria-label="LinkedIn" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 50 50">
              <!-- SVG path here -->
            </svg>
          </a>
          <a href="https://github.com/lucasgehl3n/" class="social-icon hover:text-white text-gray-400" aria-label="GitHub" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
              <!-- SVG path here -->
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2d3748; /* bg-gray-800 */
}
.footer-logo img {
  width: 50px;
  height: 100px;
}
.social-icon {
  width: 24px;
  height: 24px;
}
</style>
