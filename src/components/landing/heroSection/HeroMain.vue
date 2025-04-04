<template>
    <div class=" pt-40 pb-18">
        <div class="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
            <HeroText />
            <HeroPic />
        </div>
    </div>
</template>
<script setup>
import HeroPic from './HeroPic.vue';
import HeroText from './HeroText.vue';
</script>