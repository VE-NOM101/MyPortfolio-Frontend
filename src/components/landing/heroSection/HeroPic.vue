<template>

    <div v-motion="fadeIn('right', 200)" class=" h-full flex items-center justify-center">
        <img src="/assets/profile.png" alt="Choyan Barua"
            class=" grayscale-100 hover:grayscale-0 hover:scale-[110%] transition-all duration-500 max-h-[450px] w-auto rounded-full" />
        <div class=" absolute -z-10 flex justify-center items-center animate-pulse ">
            <PhHexagon
                class=" md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-purple-500/40 blur-lg animate-[spin_10s_linear_infinite] " />
        </div>
    </div>


</template>
<script setup>
import { PhHexagon } from '@kalimahapps/vue-icons';
import { fadeIn } from '../framerMotion/variants';

</script>