<template>
    <button
        class=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-(--cyanShadow)">
        Download CV
        <div class="sm:hidden md:block">
            <AkArrowDownRight />
        </div>
    </button>
</template>
<script setup>
import { AkArrowDownRight } from '@kalimahapps/vue-icons';
</script>