<template>
    <div>
        <LandingNavbar />
        <RouterView />
    </div>
</template>

<script setup>
import LandingNavbar from '@/components/landing/navbar/LandingNavBar.vue';
import { RouterView } from 'vue-router';
</script>