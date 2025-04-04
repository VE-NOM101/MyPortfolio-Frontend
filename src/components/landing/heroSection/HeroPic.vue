<template>

    <div class="h-full flex items-center justify-center">
        <img src="../../../../assets/profile.png" alt="Choyan Barua" class="max-h-[450px] w-auto rounded-full" />
        <div class=" absolute -z-10 flex justify-center items-center animate-pulse ">

            <PhHexagon
                class=" md:h-[90%] sm:h-[120%] min-h-[480px] w-auto text-cyan blur-[2px] animate-[spin_20s_linear_infinite] rotate-30" />
        </div>
        <div class=" absolute -z-11 flex justify-center items-center animate-pulse ">

            <PhHexagon
                class=" md:h-[90%] sm:h-[120%] min-h-[580px] w-auto text-orange blur-lg animate-[spin_20s_linear_infinite] " />
        </div>
    </div>


</template>
<script setup>
import { PhHexagon } from '@kalimahapps/vue-icons';
import { BsStar } from '@kalimahapps/vue-icons';
import { AkCircle } from '@kalimahapps/vue-icons';
</script>