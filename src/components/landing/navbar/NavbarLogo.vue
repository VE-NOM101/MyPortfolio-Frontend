<template>
    <div>
        <h1 v-motion="textGlow(1000)" class="text-white  text-2xl sm:hidden md:block">Choyan Barua</h1>
        <h1 v-motion="textGlow(1000)" class="text-white font-special font-extrabold text-4xl md:hidden sm:block">CMB
        </h1>
    </div>
</template>
<script setup>
import { textGlow } from '../framerMotion/variants';
</script>