<template>
    <nav class="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div
            class="relative flex sm:justify-around lg:justify-between w-full max-w-[1200px] mx-auto  bg-black/60 items-center py-2 px-4 rounded-r-full rounded-l-full border-orange border-[0.5px] sm:backdrop-blur-md lg:backdrop-blur-0 ">
            <NavbarLogo />

            <div :class="[isOpen ? 'sm:block' : 'sm:hidden', 'lg:block']">
                <NavbarLinks />
            </div>

            <NavbarBtn />
            <!-- navbar toggler -->
            <div class="absolute right-5">
                <button class="flex lg:hidden sm:block p-2 text-[30px] rounded-full text-whiteV2 " @click="toggleMenu">
                    <CgMenu class="hover:text-pink-500 bg-clip-text" />
                </button>
            </div>

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