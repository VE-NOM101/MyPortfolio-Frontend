<template>
    <div class="hover:-translate-y-10 transition-all duration-500">
        <div class="flex flex-col items-center gap-2 relative">
            <div
                class="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
                <component :is="skill.icon" />
            </div>
            <p class="text-white font-bold">{{ skill.skill }}</p>
        </div>
        <div class="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
</template>

<script setup>
defineProps({
    skill: Object,
});
</script>