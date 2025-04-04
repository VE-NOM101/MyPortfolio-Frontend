<template>
    <main class="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <RouterView />
    </main>
</template>

<script setup>
import HeroGradient from '@/components/landing/heroSection/HeroGradient.vue';
import HeroMain from '@/components/landing/heroSection/HeroMain.vue';
import NavbarMain from '@/components/landing/navbar/NavbarMain.vue';

import { RouterView } from 'vue-router';
</script>