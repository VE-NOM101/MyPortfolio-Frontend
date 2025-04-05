<template>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        <div class="flex flex-col items-center" v-for="(item, index) in skills" :key="index">
            <component :is="item.icon" class="text-7xl text-orange hover:text-cyan" />
            <p class="text-center mt-4 text-lg">{{ item.skill }}</p>
        </div>
    </div>
</template>

<script setup>


defineProps({
    skills: Array,
})
</script>