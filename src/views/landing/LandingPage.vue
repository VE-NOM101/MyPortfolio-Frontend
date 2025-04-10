<template>

    <HeroMain />
    <HeroGradient />
    <SubHeroSection />
    <AboutMeMain />
    <SkillsMain />
    <SubSkill />
    <ExperienceMain />
    <!--
        <ExperienceMain />
        <ProjectMain />
        <EducationMain />
        <PaperMain />
        <AwardMain />
        <ContactMeMain />
        <ScrollToTop />
        <FooterMain /> -->
</template>

<script setup>
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
import AwardMain from '@/components/landing/awardSection/awardMain.vue';
import PaperMain from '@/components/landing/paperSection/paperMain.vue';

</script>