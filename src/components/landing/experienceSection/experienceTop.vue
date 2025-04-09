<template>
    <div class="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
        <!-- Experience top left -->
        <div class="flex flex-col gap-6 w-[300px]">
            <p class="text-orange font-bold uppercase text-3xl font-special text-center">
                Since 2023
            </p>
            <div class="flex justify-center items-center gap-4">
                <ExperienceInfo number="2" text="Years" />
                <p class="font-bold text-6xl text-lightBrown">-</p>
                <ExperienceInfo number="4" text="Websites" />
                <p class="font-bold text-6xl text-lightBrown">-</p>
                <ExperienceInfo number="2" text="Apps" />
            </div>
            <p class="text-center">
                With 2 years of experience building dynamic and user-friendly web applications, along with expertise in
                Machine Learning.
            </p>
        </div>

        <!-- Experience Top Middle -->
        <div class="lg:w-[35%] md:w-[50%] sm:w-[80%]">
            <img src="/assets/experience.png" alt="my experience" />
        </div>
        <!--ExperienceTopRight  -->
        <div class="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
            <p class="text-lg text-center text-lightGrey">

                I specialize in <span class="font-bold text-white">Vue.js, modern JavaScript, Node.js, MongoDB, Tailwind
                    CSS, and Machine
                    Learning</span> —leveraging best practices to build scalable and maintainable solutions. My
                experience spans a
                wide range of projects, from small business websites to <span class="font-bold text-white">complex
                    front-end & back-end systems</span>, always with a focus
                on clean code and exceptional user experiences
            </p>
        </div>

    </div>
</template>

<script setup>
import ExperienceInfo from './experienceInfo.vue';
</script>