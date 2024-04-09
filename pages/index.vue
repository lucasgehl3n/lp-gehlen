<template>
  <Header></Header>
  <div class="w-full h-full bg-gray-900">
    <Hello></Hello>
    <About></About>
    <WhoIAm></WhoIAm>
    <Experience></Experience>
    <Projects></Projects>
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
import Footer from './Footer.vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
  document.documentElement.classList.add('dark');
});

</script>