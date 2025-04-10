<!-- App.vue -->
<template>
    <div id="projects" class="max-w-[1200px] mx-auto px-4">
        <div v-motion="fadeIn('down', 0)">
            <ProjectText />
        </div>
        <div v-motion="fadeIn('down', 0)">
            <ProjectTop />
        </div>
        <div class="w-full h-1 mt-2 bg-lightBrown lg:block sm:hidden"></div>

        <div class="mt-12 flex flex-wrap md:flex-row sm:flex-col items-center justify-center gap-12">
            <SingleProjectCard v-motion-pop-visible-once v-for="(project, index) in projects" :key="index"
                :project="project" :id="index" />
        </div>

    </div>
</template>

<script setup>
import { fadeIn } from '../framerMotion/variants';
import ProjectText from './projectText.vue';
import ProjectTop from './projectTop.vue';
import SingleProjectCard from './singleProjectCard.vue';

const projects = [
    {
        title: 'Draw It',
        description: 'Its an android application. I have implemented many features such as drawing with efficient tools and cloud storing',
        details: 'Details dite hobe',
        frontend: ['XML'],
        backend: ['Java'],
        database: ['Firebase'],
        img: '/assets/website-img-1.jpg',
        github_link: '#',
    },
    {
        title: 'Digital Care',
        description: 'Smart hospital that can take care of your self',
        details: 'Details dite hobe',
        frontend: ['HTML', 'CSS', 'Bootstrap 4'],
        backend: ['Larvel'],
        database: ['MySQL'],
        img: '/assets/website-img-1.jpg',
        github_link: '#',
    },
    {
        title: 'VisionAid',
        description: 'AI based Eye care website',
        details: 'Details dite hobe',
        frontend: ['Vue JS'],
        backend: ['Laravel'],
        database: ['MySQL'],
        img: '/assets/website-img-1.jpg',
        github_link: '#',
    },
    {
        title: 'Modern-Portfolio',
        description: 'Advance Portfolio with dynamic dashboard',
        details: 'Details dite hobe',
        frontend: ['Vue JS', 'Tailwind CSS'],
        backend: ['Node JS', 'Express JS'],
        database: ['MongoDB'],
        img: '/assets/website-img-1.jpg',
        github_link: '#',
    },
]
</script>

<style scoped></style>