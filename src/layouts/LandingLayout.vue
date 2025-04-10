<template>
    <main class="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <RouterView />
        <FooterMain />
    </main>
</template>

<script setup>
import FooterMain from '@/components/landing/footerSection/footerMain.vue';
import NavbarMain from '@/components/landing/navbar/NavbarMain.vue';
import { RouterView } from 'vue-router';

</script>