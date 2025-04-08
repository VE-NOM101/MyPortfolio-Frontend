<template>
    <div v-motion="fadeIn('right', 0)"
        class="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
        <p class="font-bold text-cyan">{{ experience.job }}</p>
        <p class="text-orange">{{ experience.company }}</p>
        <p class="text-lightGrey">{{ experience.date }}</p>
        <ul class="list-disc mt-4 pl-4">
            <li v-for="(resp, index) in experience.responsibilities" :key="index">
                {{ resp }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { fadeIn } from '../framerMotion/variants';

defineProps({
    experience: Object,
})

</script>