<template>
    <main class="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain />
        <SubSkill />
        <ExperienceMain />
        <ProjectMain />
        <EducationMain />
        <AwardMain />
        <ContactMeMain />
        <ScrollToTop />
        <FooterMain />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AboutMeMain from '@/components/landing/aboutMeSection/aboutMeMain.vue';
import ContactMeMain from '@/components/landing/contactMeSection/contactMeMain.vue';
import ExperienceMain from '@/components/landing/experienceSection/experienceMain.vue';
import FooterMain from '@/components/landing/footerSection/footerMain.vue';
import HeroGradient from '@/components/landing/heroSection/HeroGradient.vue';
import HeroMain from '@/components/landing/heroSection/HeroMain.vue';
import NavbarMain from '@/components/landing/navbar/NavbarMain.vue';
import SkillsMain from '@/components/landing/skillsSection/skillsMain.vue';
import SubSkill from '@/components/landing/skillsSection/subSkill.vue';
import SubHeroSection from '@/components/landing/subHeroSection/subHeroSection.vue';
import ProjectMain from '@/components/landing/projectSection/projectMain.vue';
import EducationMain from '@/components/landing/educationSection/educationMain.vue';
import ScrollToTop from '@/components/landing/scrollToTop.vue';
import Practice from '@/components/landing/framerMotion/practice.vue';
import AwardMain from '@/components/landing/awardSection/awardMain.vue';


</script>