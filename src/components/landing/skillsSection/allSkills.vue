<template>
    <div>
        <div class="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            <div v-for="(item, index) in skills.slice(0, 8)" :key="index">
                <SingleSkill v-motion="fadeIn('up', index * 100 + 5)" :skill="item" />
            </div>

        </div>
    </div>
</template>

<script setup>
import { fadeIn } from '../framerMotion/variants';
import SingleSkill from './singleSkill.vue'

defineProps({
    skills: Array,
})
</script>