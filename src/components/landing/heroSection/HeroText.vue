<template>
    <div class="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <div v-motion="fadeIn('down', 200)" class="flex lg:text-2xl sm:text-xl uppercase text-cyan">
            <MdEngineering />
            <h2>
                An Engineer
            </h2>

        </div>
        <h1 v-motion="fadeIn('right', 400)" class="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold">
            Choyan Mitra Barua <br class="sm:hidden md:block" /> Bijoy
        </h1>
        <p v-motion="fadeIn('up', 600)"
            class="lg:text-[20px] sm:text-lg mt-4 text-white lg:max-w-[600px] md:max-w-[450px] sm:max-w-[400px]">
            A passionate CSE engineer with experience in <span class="text-cyan">web development</span>,<span
                class="text-orange"> app development</span>,<span class="text-cyan"> backend development</span>,
            <span class="text-orange">blockchain development</span>, & <span class="text-cyan">machine-learning</span>.
            Dedicated to building innovative solutions and sharing knowledge to empower others.
        </p>
    </div>
</template>
<script setup>
import { MdEngineering } from '@kalimahapps/vue-icons';
import { fadeIn } from '../framerMotion/variants';

</script>