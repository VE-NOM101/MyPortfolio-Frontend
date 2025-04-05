<template>
    <div>
        <div class="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            <SingleSkill v-for="(item, index) in skills.slice(0, 8)" :key="index" :skill="item" />
        </div>
    </div>
</template>

<script setup>
import SingleSkill from './singleSkill.vue'

defineProps({
    skills: Array,
})
</script>