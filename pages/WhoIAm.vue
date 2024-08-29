<template>
    <section class="bg-gray-900" id="whoIAm">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="grid grid-cols-2 gap-4 mt-8 max-w-lg">
                <img class="max-w-full max-h-fit rounded-lg" src="~/assets/images/lucas1.webp" alt="Foto 1 de Lucas Gehlen" loading="lazy">
                <img class="mt-4 max-w-full max-h-fit lg:mt-10 rounded-lg" src="~/assets/images/lucas2.webp" alt="Foto 2 de Lucas Gehlen" loading="lazy">
            </div>
            <div class="font-light sm:text-lg text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">{{ t('whoAmI') }}</h2>
                <p class="mb-4">
                    {{ t('developerIntro') }}
                </p>
                <p class="mb-4">
                    {{ t('education') }}
                </p>
                <p>{{ t('techApproach') }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
