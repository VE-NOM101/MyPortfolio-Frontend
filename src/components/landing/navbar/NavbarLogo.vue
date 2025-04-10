<template>
    <div class="sm:mx-[10px]">
        <h1 v-motion="textGlow(1000)" class="font-logo text-white text-2xl sm:hidden md:block">Choyan
            Barua
        </h1>
        <h1 v-motion="textGlow(1000)" class="font-logo text-white text-4xl font-extrabold md:hidden sm:block">
            CMB
        </h1>
    </div>
</template>
<script setup>
import { textGlow } from '../framerMotion/variants';
</script>