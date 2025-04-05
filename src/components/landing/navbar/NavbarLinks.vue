<template>
    <ul
        class="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:rounded-2xl sm:bg-darkGrey sm:shadow-lg sm:shadow-cyan/50 lg:shadow-none lg:bg-transparent sm:w-full py-4">
        <li v-for="(item, index) in links" :key="index" class="group">
            <a href="#" class="cursor-pointer text-white sm:hover:text-orange 
          lg:hover:text-cyan 
          hover:text-cyan  transition-all duration-500">
                {{ item.link }}
            </a>
            <div
                class="mx-auto lg:bg-cyan sm:bg-orange bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500">
            </div>
        </li>
    </ul>
</template>
<script setup>
const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

</script>