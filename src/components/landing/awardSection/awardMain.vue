<template>
    <div id="awards" class="relative max-w-[1200px] mx-auto px-4">
        <div v-motion="fadeIn('down', 0)">
            <awardText />
        </div>
        <div class="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            <template v-for="(item, index) in awards" :key="index">
                <singleAward :name="item.name" :year="item.year" :align="item.align" :image="item.image" />
            </template>

        </div>

        <div class=" shadow-(--purpleMediumShadow) absolute top-[50%] left-[50%] -z-10 animate-pulse"></div>
    </div>
</template>

<script setup>

import { fadeIn } from '../framerMotion/variants';
import awardText from './awardText.vue';
import singleAward from './singleAward.vue';

const awards = [
    {
        name: "University Dean Award, KUET",
        year: "2024",
        align: "right",
        image: "/assets/website-img-1.jpg",
    },
    {
        name: "University Dean Award, KUET",
        year: "2023",
        align: "left",
        image: "/assets/website-img-2.webp",
    },
    {
        name: "University Dean Award, KUET",
        year: "2022",
        align: "right",
        image: "/assets/website-img-3.jpg",
    },
    {
        name: "Datch Bangla Bank Scholarship",
        year: "2018",
        align: "left",
        image: "/assets/website-img-4.jpg",
    },
    {
        name: "JSC-General Scholarship",
        year: "2016",
        align: "right",
        image: "/assets/website-img-4.jpg",
    },
];
</script>