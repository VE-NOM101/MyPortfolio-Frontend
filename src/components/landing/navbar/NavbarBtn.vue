<template>
    <div v-motion="motionShake"
        class="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 sm:ml-[10px] sm:mr-[50px]">
        <a href="https://drive.google.com/file/d/17NV-sBpD-x3_En-6KkCsdgMXX_OTuEgQ/view?usp=drive_link" target="_blank"
            class=" transition-all duration-500 hover:scale-110 flex justify-center items-center text-[18px] bg-white dark:bg-gray-900 rounded-lg p-2 hover:shadow-(--cyanShadow)">
            Resume
            <div class="sm:hidden md:block">
                <AkArrowDownRight />
            </div>
        </a>
    </div>

</template>
<script setup>
import { AkArrowDownRight } from '@kalimahapps/vue-icons';
import { motionShake } from '../framerMotion/variants';

</script>