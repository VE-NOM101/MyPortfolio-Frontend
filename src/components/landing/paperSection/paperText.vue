<template>
    <div v-motion="fadeIn('down', 0)" class="flex flex-col items-center mt-[100px] ">
        <h2 class="text-6xl text-cyan mb-10">Research Papers</h2>
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