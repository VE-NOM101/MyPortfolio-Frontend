<template>
    <div class="flex flex-wrap md:flex-row sm:flex-col items-center justify-center gap-4">
        <template v-for="(item, index) in experiences" :key="index">
            <SingleExperience :experience="item" />
            <div v-if="index < experiences.length - 1" class="lg:block sm:hidden">
                <CgArrowLongRightC v-motion="fadeIn('right', 0)" class="text-6xl text-lightBluish" />
            </div>
        </template>
    </div>
</template>
<script setup>

import { fadeIn } from '../framerMotion/variants';
import SingleExperience from './singleExperience.vue';
import { CgArrowLongRightC } from '@kalimahapps/vue-icons';
const experiences = [
    {
        job: "Front-End Developer",
        company: "N/A",
        date: "2023 - Present",
        responsibilities: [
            "Built reusable components with Vue.js and Laravel.",
            "Worked on scalable, large-scale web applications.",
            "Styled UIs using HTML, CSS, Tailwind CSS, and Bootstrap."
        ]
    },
    {
        job: "Back-End Developer",
        company: "N/A",
        date: "2024 - Present",
        responsibilities: [
            "Taught and explained backend development concepts.",
            "Guided students with assignments and provided regular feedback.",
            "Worked with MySQL, MongoDB, Node.js, and Python for backend instruction and demos."
        ]

    },
];


</script>