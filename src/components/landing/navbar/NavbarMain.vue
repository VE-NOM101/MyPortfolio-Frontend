<template>
    <nav class="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div
            class="flex justify-between w-full max-w-[1200px] mx-auto  bg-black/60 items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] sm:backdrop-blur-md lg:backdrop-blur-0 ">
            <NavbarLogo />

            <div :class="[isOpen ? 'sm:block' : 'sm:hidden', 'lg:block']">
                <NavbarLinks />
            </div>
            <NavbarBtn />
        </div>

        <div
            class="flex lg:hidden sm:block p-6 bg-black/60 backdrop-blur-md items-center justify-center rounded-full  border-orange border-[0.5px] ">
            <button class="text-lg p-3 border border-orange rounded-full text-white" @click="toggleMenu">
                <CgMenu />
            </button>
        </div>

    </nav>
</template>

<script setup>

import NavbarBtn from './NavbarBtn.vue';
import NavbarLinks from './NavbarLinks.vue';
import NavbarLogo from './NavbarLogo.vue';
import { CgMenu } from '@kalimahapps/vue-icons';
import { ref } from 'vue'

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    console.log(isOpen.value);
};

</script>