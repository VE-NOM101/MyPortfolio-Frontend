<template>
    <ul
        class="flex lg:flex-row sm:flex-col gap-6 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-[18px] sm:text-[20px] sm:rounded-2xl sm:bg-lightBluish sm:shadow-lg sm:shadow-cyan/50 lg:shadow-none lg:bg-transparent sm:w-full py-4">

        <li v-for="(item, index) in links" :key="index" class="group">
            <a :href="item.section" v-smooth-scroll
                class="cursor-pointer text-whiteV hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 bg-clip-text hover:text-transparent transition-all duration-300">
                {{ item.link }}
            </a>
            <div
                class="mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-0 group-hover:w-full h-[1px] transition-all duration-500">
            </div>
        </li>
    </ul>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const links = ref([]);

const updateLinks = () => {
    if (route.path === '/') {
        links.value = [
            { link: "About Me", section: "#about" },
            { link: "Skills", section: "#skills" },
            { link: "Experience", section: "#experience" },
            { link: "Projects", section: "#projects" },
            { link: "Education", section: "#education" },
            { link: "Papers", section: "#papers" },
            { link: "Awards", section: "#awards" },
            { link: "Contact", section: "#contact" },
        ];
    } else if (route.path === '/more-about-me') {
        links.value = [
            { link: "About Me", section: "#about" },
        ];
    } else {
        links.value = []; // fallback
    }
};

// Run once on component mount
updateLinks();

// Watch for route changes
watch(() => route.path, () => {
    updateLinks();
});
</script>
