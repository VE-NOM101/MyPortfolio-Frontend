<template>
    <div id="awards" class="max-w-[1200px] mx-auto px-4">
        <div>
            <awardText />
        </div>
        <div class="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            <template v-for="(item, index) in awards" :key="index">
                <singleAward :name="item.name" :year="item.year" :align="item.align" :image="item.image" />
            </template>

        </div>
    </div>
</template>

<script setup>
import awardText from './awardText.vue';
import singleAward from './singleAward.vue';

const awards = [
    {
        name: "University Dean Award, KUET",
        year: "2024",
        align: "right",
        image: "../../../../assets/website-img-1.jpg",
    },
    {
        name: "University Dean Award, KUET",
        year: "2023",
        align: "left",
        image: "../../../../assets/website-img-2.webp",
    },
    {
        name: "University Dean Award, KUET",
        year: "2022",
        align: "right",
        image: "../../../../assets/website-img-3.jpg",
    },
    {
        name: "Datch Bangla Bank Scholarship",
        year: "2018",
        align: "left",
        image: "../../../../assets/website-img-4.jpg",
    },
    {
        name: "JSC-General Scholarship",
        year: "2016",
        align: "right",
        image: "../../../../assets/website-img-4.jpg",
    },
];
</script>