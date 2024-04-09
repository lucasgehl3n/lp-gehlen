<template>
  <nav class=" border-gray-200 bg-transparent fixed w-full z-10" id="navbar-nav">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/images/logo-lucas.svg" height="100" width="50" class="ml-auto mr-auto sm:w-50">
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button data-collapse-toggle="navbar-cta" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Abrir menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700"
          id="navbar-ul">
          <li>
            <a href="#home" class="block py-2 px-3 md:p-0 text-white rounded md:bg-transparen"
              aria-current="page">Início</a>
          </li>
          <li>
            <a href="#about"
              class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Serviços</a>
          </li>
          <li>
            <a href="#whoIAm"
              class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quem
              sou</a>
          </li>
          <li>
            <a href="#experience"
              class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experiência</a>
          </li>
          <li>
            <a href="#projects"
              class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projetos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted } from 'vue';
let navbar;
let navbarUL;

onMounted(() => {
  navbar = document.getElementById('navbar-nav');
  navbarUL = document.getElementById('navbar-ul');

  window.onscroll = function () {
    scrollHandler();
  };

  scrollHandler();
});



const scrollHandler = () => {
  if (window.innerWidth < 768) {
    addBackgroundNavbar();
    navbar.classList.remove('fixed');
    return;
  }
  if (window.scrollY > window.innerHeight - 250) {
    addBackgroundNavbar();
  } else {
    removeBackgroundNavbar();
  }
}

const addBackgroundNavbar = () => {
  navbar.classList.add('bg-gray-900');
  navbarUL.classList.add('bg-gray-900');
  navbar.classList.remove('bg-transparent');
  navbarUL.classList.remove('bg-transparent');
}

const removeBackgroundNavbar = () => {
  navbar.classList.add('bg-transparent');
  navbarUL.classList.add('bg-transparent');
  navbar.classList.remove('bg-gray-900');
  navbarUL.classList.remove('bg-gray-900');
}
</script>