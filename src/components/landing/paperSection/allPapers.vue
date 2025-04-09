<template>
    <ol v-motion="fadeIn('right', 0)"
        class="relative border-s-2 border-darkGrey group-hover:border-s-3 group-hover:border-lightGrey">
        <li class="mb-10 ms-6" v-for="(item, index) in papers" :key="index">
            <SinglePaper :paper="item" :latest="index === 0 ? true : false" />

        </li>
    </ol>
</template>
<script setup>
import SinglePaper from './singlePaper.vue';
import { fadeIn } from '../framerMotion/variants';
const papers = [
    {
        title: 'Title of the research paper 2',
        date: 'January 13th, 2023',
        description: 'Short descriptionShort descriptionShort descriptionShort descriptionShort descriptionShort description',
        link: '#',
    },
    {
        title: 'Title of the research paper 1',
        date: 'January 13th, 2022',
        description: 'Short description',
        link: '#',
    }
];
</script>