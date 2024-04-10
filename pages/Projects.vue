<template>
    <section class="bg-gray-900" id="projects">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 class="mb-10 text-4xl tracking-tight font-extrabold text-white">
                Projetos
            </h2>
            <fwb-tabs v-model="currentTab" variant="underline" class="p-5">
                <fwb-tab name="PelosCaminhos" title="Pelos Caminhos">
                    <PelosCaminhos />
                </fwb-tab>
                <fwb-tab name="ReisEReis" title="Reis & Reis - Adovacia Penal">
                    <ReisEReis v-if="currentTab === 'ReisEReis'"></ReisEReis>
                </fwb-tab>
                <fwb-tab name="Minder" title="Minder">
                    <Minder v-if="currentTab === 'Minder'"></Minder>
                </fwb-tab>
            </fwb-tabs>
        </div>
    </section>
</template>

<script setup>
import PelosCaminhos from './Projects/PelosCaminhos.vue';
import { FwbTab, FwbTabs } from 'flowbite-vue'
import ReisEReis from './Projects/ReisEReis.vue';
import Minder from './Projects/Minder.vue';

const currentTab = ref("PelosCaminhos");
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>