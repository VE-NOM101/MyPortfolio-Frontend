<template>
    <div id="experience" class="max-w-[1200px] mx-auto px-4">
        <div>
            <ExperienceText />
        </div>
        <div>
            <ExperienceTop />
        </div>
        <div class="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <AllExperiences />
    </div>

</template>

<script setup>
import AllExperiences from './allExperiences.vue';
import ExperienceText from './experienceText.vue';
import ExperienceTop from './experienceTop.vue';
</script>