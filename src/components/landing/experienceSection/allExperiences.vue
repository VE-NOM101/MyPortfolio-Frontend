<template>
    <div class="flex flex-wrap md:flex-row sm:flex-col items-center justify-center gap-4">
        <template v-for="(item, index) in experiences" :key="index">
            <SingleExperience :experience="item" />
            <div v-if="index < experiences.length - 1" class="lg:block sm:hidden">
                <CgArrowLongRightC class="text-6xl text-orange" />
            </div>
        </template>
    </div>
</template>
<script setup>
import SingleExperience from './singleExperience.vue';
import { CgArrowLongRightC } from '@kalimahapps/vue-icons';
const experiences = [
    {
        job: "Intermediate-Student",
        company: "Chittagong University College",
        date: "2018 - 2020",
        responsibilities: [
            "I passed my HSC examination under the Chittagong Board with a GPA of 5.00.",
        ]
    },
    {
        job: "Student",
        company: "Khulna University of Engineering and Technology",
        date: "2022 - present",
        responsibilities: [
            "Completing my undergrad program",
        ]
    },
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