<template>
    <section class="bg-gray-900">
        <div class="gap-4 items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-4 lg:px-6">
            <div class="w-100 h-100">
                <Carousel id="gallery" :items-to-show="1" v-model="currentSlide" :wrap-around="true">
                    <Slide v-for="slide in pictures" :key="slide">
                        <div class="carousel__item">
                            <img :src="slide.src" class="h-full max-h-96 w-auto" v-on:click="showGalleryImage" loading="lazy"/>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>

            <lazy-vue-easy-lightbox :visible="showGallery" :imgs="pictures" :index="currentSlide" :loop="true"
                :moveDisabled="true" @hide="closeGallery" :rotateDisabled="true">
            </lazy-vue-easy-lightbox>

            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
                    Reis & Reis - Advocacia Criminal
                </h2>
                <p class="mb-6 font-light md:text-lg text-gray-400">
                    O projeto desenvolvido para o escritório de advocacia Reis & Reis tinha o objetivo de ser o mais limpo e
                    simples possível,
                    com o foco na apresentação dos serviços prestados pelo escritório, e um público alvo que necessita de objetividade.
                </p>
                <p class="mb-6 font-lightmd:text-lg text-gray-400">
                    O site foi construído pensando na identidade visual que o escritório possuia, com cores sóbrias e uma
                    tipografia que remete a seriedade.
                </p>

                <a href="https://advocaciapenal.com" target="_blank"
                    class="mobile-text-center-button inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900">
                    Ir para o site
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import LazyVueEasyLightbox from "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js";

const currentSlide = ref(0);
const pictures = computed(() => {
    return [
        { src: '/assets/img/reisereis-2.webp' },
        { src: '/assets/img/reisereis-1.webp' },
    ]
})
const showGallery = ref(false);

const showGalleryImage = (index) => {
    showGallery.value = true;
};

const closeGallery = () => {
    showGallery.value = false;
};
</script>