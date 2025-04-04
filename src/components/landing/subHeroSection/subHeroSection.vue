<template>
    <div
        class="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase lg:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
        <div class="flex">
            <CaExplore class="md:block sm:hidden" />
            <p class="md:block sm:hidden">
                Explorer
            </p>
        </div>
        <div class="flex">
            <CaFavoriteHalf class="md:block sm:hidden" />
            <p class="md:block sm:hidden">Passionate</p>
        </div>
        <div class="flex">
            <BxCodeAlt />
            <p>Problem Solver</p>
        </div>

    </div>
</template>
<script setup>
import { CaExplore } from '@kalimahapps/vue-icons';
import { CaFavoriteHalf } from '@kalimahapps/vue-icons';
import { BxCodeAlt } from '@kalimahapps/vue-icons';
</script>