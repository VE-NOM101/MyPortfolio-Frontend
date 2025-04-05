<template>
    <div class="px-4">
        <div class="w-full h-[1px] bg-lightGrey mt-24"></div>
        <div class="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
            <p class="text-3xl text-lightGrey ">Choyan Mitra Barua Bijoy</p>
            <ul class="flex gap-4 text-lightGrey text-xl">
                <li v-for="(item, index) in footerLinks" :key="index">
                    <a :href="item.section" class="hover:text-white transition-all duration-500 cursor-pointer">{{
                        item.name
                        }}</a>
                </li>
            </ul>
        </div>
        <p class="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
            © 2025 Choyan | All Rights Reserved.
        </p>
    </div>
</template>

<script setup>
const footerLinks = [
    {
        name: "About Me",
        section: "about",
    },
    {
        name: "Skills",
        section: "skills",
    },
    {
        name: "Experience",
        section: "experience",
    },
    {
        name: "Projects",
        section: "projects",
    },
];

</script>