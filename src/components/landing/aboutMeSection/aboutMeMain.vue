<template>
    <div id="about"
        class="mb-12 flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <div v-motion="fadeIn('right', 0)">
            <AboutMeText />
        </div>
        <div v-motion="fadeIn('left', 0)">
            <AboutMeImage />
        </div>
    </div>
</template>
<script setup>
import { fadeIn } from '../framerMotion/variants';
import AboutMeImage from './aboutMeImage.vue';
import AboutMeText from './aboutMeText.vue';

</script>