<template>
    <div v-motion="fadeIn('down', 0)" class="flex flex-col justify-center items-center mt-[100px] ">
        <h2 class="text-6xl bg-gradient-to-r from-bluish via-pink-500 to-purple-500
            bg-clip-text text-transparent mb-10 text-center">Research Papers</h2>
    </div>
    <div v-motion="fadeIn('down', 200)" class="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
        <p class="text-center text-2xl">
            Here are some references to the research papers I have contributed to.
        </p>
    </div>
</template>
<script setup>
import { fadeIn } from '../framerMotion/variants';
</script>