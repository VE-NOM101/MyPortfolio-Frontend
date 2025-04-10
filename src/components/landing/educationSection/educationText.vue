<template>
    <div class="flex flex-col items-center mt-[100px]">
        <h2 class="text-6xl mb-10 bg-gradient-to-r from-bluish via-pink-500 to-purple-500
            bg-clip-text text-transparent" v-motion="fadeIn('down', 0)">Education</h2>
        <p class="text-center text-2xl" v-motion="fadeIn('down', 200)">
            Completed school and college with distinction, currently pursuing a B.Sc. in CSE at KUET, with plans for
            M.Sc. and Ph.D. in the future.
        </p>
    </div>
</template>
<script setup>
import { fadeIn } from '../framerMotion/variants';
</script>