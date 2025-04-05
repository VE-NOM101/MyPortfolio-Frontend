<template>
    <div id="projects" class="max-w-[1200px] mx-auto px-4">
        <div>
            <ProjectText />
        </div>
        <div class="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            <template v-for="(item, index) in projects" :key="index">
                <SingleProject :name="item.name" :year="item.year" :align="item.align" :image="item.image"
                    :link="item.link" />
            </template>

        </div>
    </div>
</template>

<script setup>
import ProjectText from './projectText.vue';
import SingleProject from './singleProject.vue';

const projects = [
    {
        name: "Vision Aid",
        year: "Mar2022",
        align: "right",
        image: "../../../../assets/website-img-1.jpg",
        link: "#",
    },
    {
        name: "Draw it App",
        year: "Sept2022",
        align: "left",
        image: "../../../../assets/website-img-2.webp",
        link: "#",
    },
    {
        name: "Digital Care",
        year: "Jan2023",
        align: "right",
        image: "../../../../assets/website-img-3.jpg",
        link: "#",
    },
    {
        name: "Finance App",
        year: "May2024",
        align: "left",
        image: "../../../../assets/website-img-4.jpg",
        link: "#",
    },
];
</script>