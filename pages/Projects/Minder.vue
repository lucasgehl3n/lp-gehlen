<template>
    <section class="bg-gray-900">
        <div class="gap-4 items-center py-4 px-4 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-4 lg:px-6">
            <div class="w-100 h-100">
                <Carousel id="gallery" :items-to-show="1" v-model="currentSlide" :wrap-around="true">
                    <Slide v-for="slide in pictures" :key="slide">
                        <div class="carousel__item">
                            <img :src="slide.src" class="h-full max-h-96 w-auto" v-on:click="showGalleryImage" />
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
                    Minder
                </h2>
                <p class="mb-6 font-light md:text-lg text-gray-400">
                    Minder se trata de um software que disponibiliza mecanismos de interação para o profissional da área da saúde mental,
                    que possibilitam um controle de vínculos entre sintomas, patologias e questionamentos.
                    A partir disso, realiza-se um cálculo capaz de criar um pré-diagnóstico para o paciente. 
                </p>
                <p class="mb-6 font-light md:text-lg text-gray-400">
                    Um teste que avalia sintomas de depressão e ansiedade já está disponível, a nível de exemplificação.
                    Os questionamentos foram construídos juntamente a um profissional vinculado a área da psicologia (Louise Dall’Agnol).
                </p>
                <p class="mb-6 font-light md:text-lg text-gray-400">
                    "Minder" foi apresentado como Trabalho de Conclusão de Curso do "Curso de Informática Integrado ao
                    Ensino Médio" na instituição "IFRS - Campus Farroupilha".
                </p>

                <a href="https://advocaciapenal.com" target="_blank"
                    class="mobile-text-center-button inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                    Ler artigo
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                </a>
            </div>

            

            <vue-easy-lightbox :visible="showGallery" :imgs="pictures" :index="currentSlide" :loop="true"
                :moveDisabled="true" @hide="closeGallery" :rotateDisabled="true">
            </vue-easy-lightbox>
        </div>
    </section>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import VueEasyLightbox from "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js";

const currentSlide = ref(0);
const pictures = computed(() => {
    return [
        { src: '/assets/img/minder-1.png' },
        { src: '/assets/img/minder-2.png' },
        { src: '/assets/img/minder-3.png' },
        { src: '/assets/img/minder-4.png' },
        { src: '/assets/img/minder-5.png' },
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