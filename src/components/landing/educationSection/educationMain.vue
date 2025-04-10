<template>
    <div id="education" class=" relative not-visited:max-w-[1200px] mx-auto px-4">
        <div>
            <EducationText />
        </div>
        <div class="flex flex-col justify-center items-center gap-4 max-w-[900px] mx-auto mt-12">
            <template v-for="(item, index) in awards" :key="index">
                <AkArrowUpThick :class="['flex', 'text-lightBluish', 'text-2xl', index == 0 ? 'hidden' : 'block']" />
                <singleEducation v-motion-roll-visible-once-left :duration="500" :name="item.name" :year="item.year"
                    :institute="item.institute" :remark="item.remark" :place="item.place" />
            </template>

        </div>
        <!-- Gradient -->
        <div>
            <div class="  shadow-(--cyanMediumShadow) absolute top-[500px] left-0 -z-10 animate-pulse"></div>
            <div class="  shadow-(--purpleMediumShadow) absolute top-0 right-0 -z-10 animate-pulse"></div>
        </div>
    </div>
</template>

<script setup>
import EducationText from './educationText.vue';
import singleEducation from './singleEducation.vue';
import { AkArrowUpThick } from '@kalimahapps/vue-icons';

const awards = [
    {
        name: "BSc in Computer Science and Engineering",
        year: "Mar 2022-Present",
        institute: "Khulna University of Engineering and Technology",
        remark: "CGPA: 3.90 out of 4.00 (Till 5th Semester)",
        place: "Khulna, Bangladesh"
    },
    {
        name: "HSC",
        year: "Jun 2018-May 2020",
        institute: "Chittagong University College",
        remark: "GPA: 5.00 out of 5.00",
        place: "Chittagong, Bangladesh"
    },
    {
        name: "SSC",
        year: "Jan 2016- Mar 2018",
        institute: "Jobra P.P School and College",
        remark: "GPA: 5.00 out of 5.00",
        place: "Chittagong, Bangladesh"
    },
];
</script>