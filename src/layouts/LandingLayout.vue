<template>
    <main class="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain />
        <SubSkill />
        <RouterView />
    </main>
</template>

<script setup>
import AboutMeMain from '@/components/landing/aboutMeSection/aboutMeMain.vue';
import HeroGradient from '@/components/landing/heroSection/HeroGradient.vue';
import HeroMain from '@/components/landing/heroSection/HeroMain.vue';
import NavbarMain from '@/components/landing/navbar/NavbarMain.vue';
import SkillsMain from '@/components/landing/skillsSection/skillsMain.vue';
import SubSkill from '@/components/landing/skillsSection/subSkill.vue';
import SubHeroSection from '@/components/landing/subHeroSection/subHeroSection.vue';
import { RouterView } from 'vue-router';
</script>