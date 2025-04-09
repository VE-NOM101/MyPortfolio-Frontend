<template>
    <div ref="scrollTopButton" class="fixed bottom-6 right-6 z-50 invisible opacity-0 transition-opacity duration-300">
        <button @click="scrollToTop" v-motion='scrollBtnAnim'
            class="border-2 hover:text-black border-cyan hover:bg-orange text-white p-2 rounded-full shadow-md transition">
            <AkCircleChevronUpFill class="text-3xl" />
        </button>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { AkCircleChevronUpFill } from '@kalimahapps/vue-icons';
import { scrollBtnAnim } from './framerMotion/variants';

const scrollTopButton = ref(null);

const handleScroll = () => {
    if (window.scrollY > 100) {
        scrollTopButton.value.classList.remove('invisible');
        scrollTopButton.value.classList.add('opacity-100');
    } else {
        scrollTopButton.value.classList.add('invisible');
        scrollTopButton.value.classList.remove('opacity-100');
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>