<template>
  <Header></Header>
  <div class="max-w-100 h-full bg-gray-900">
    <Hello></Hello>
    <About></About>
    <WhoIAm></WhoIAm>
    <Experience></Experience>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Hello from './Hello.vue';
import About from './About.vue';
import WhoIAm from './WhoIAm.vue';
import Experience from './Experience.vue';
import Projects from './Projects.vue';
import ContactMe from './ContactMe.vue';
import Footer from './Footer.vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'
onMounted(async () => {
  initFlowbite();
  document.documentElement.classList.add('dark');
  const { inject } = await import('@vercel/analytics');
  inject();
  definePageMeta({
    title: 'Lucas Gehlen',
  });

  useHead({
    title: 'Lucas Gehlen',
    htmlAttrs: {
      lang: 'pt-br',
    }
  });
});

</script>