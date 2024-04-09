<template>
    <section class="bg-gray-900" id="experience">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 class="mb-10 text-4xl tracking-tight font-extrabold text-white">
                Experiência
            </h2>
            <div class="md:flex sm:block sm:w-full">
                <ul
                    class="flex-column space-y space-y-4 text-sm font-medium text-gray-400 md:me-4 mb-4 md:mb-0">
                    <li v-on:click="changeTab('Compass')" class="w-full">
                        <a class="items-center px-4 py-3 rounded-lg active inline-flex w-full sm:grid"
                            :class="getColorButtonTab('Compass')" aria-current="page">
                            Compass&nbsp;UOL
                        </a>
                    </li>
                    <li v-on:click="changeTab('Conecta')" class="w-full">
                        <a :class="getColorButtonTab('Conecta')" class="inline-flex w-full sm:grid md:inline-flex items-center px-4 py-3 rounded-lg">
                            Conecta Softwares
                        </a>
                    </li>
                    <li v-on:click="changeTab('Vero')" class="w-full">
                        <a :class="getColorButtonTab('Vero')"
                        class="items-center px-4 py-3 rounded-lg inline-flex w-full sm:grid">
                            Vero Dellaudo
                        </a>
                    </li>
                </ul>
                <Compass v-if="checkCurrentTab('Compass')"></Compass>
                <Conecta v-else-if="checkCurrentTab('Conecta')"></Conecta>
                <Vero v-else-if="checkCurrentTab('Vero')"></Vero>
            </div>
        </div>
    </section>
</template>

<script setup>
import Compass from './Experiences/Compass.vue';
import Conecta from './Experiences/Conecta.vue';
import Vero from './Experiences/Vero.vue';
const currentTab = ref("Compass");
const changeTab = (tab) => {
    currentTab.value = tab;
};

const getColorButtonTab = (tab) => {
    return checkCurrentTab(tab) ? 'bg-blue-600 text-white' : 'hover:text-white bg-gray-50 hover:bg-gray-100 bg-gray-800 hover:bg-gray-700';
};
const checkCurrentTab = (tab) => {
    return currentTab.value === tab;
};
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>