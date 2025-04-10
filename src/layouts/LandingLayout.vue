<template>
    <main class="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <RouterView />
    </main>
</template>

<script setup>
import NavbarMain from '@/components/landing/navbar/NavbarMain.vue';
import { RouterView } from 'vue-router';

</script>