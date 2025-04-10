<template>
    <div v-motion="getMotion" :class="[
        'flex',
        'w-full',
        'sm:flex-col-reverse',
        'items-center',
        'gap-8',
        'justify-end',
        'sm:flex-col',
        align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
    ]">
        <!-- Your content here -->
        <div>
            <h2 class="md:text-3xl sm:text-2xl text-cyan">{{ name }}</h2>
            <h2 :class="['text-xl', 'font-thin', 'text-white', 'font-special', 'sm:text-center',
                align === 'left' ? 'md:text-right' : 'md:text-left']">
                {{ year }}
            </h2>
        </div>
        <div
            class="group relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-grey hover:shadow-[var(--cyanShadow)]">
            <!-- Hover Overlay Background -->
            <div
                class="w-full h-full bg-lightBluish opacity-50 absolute top-0 left-0 group-hover:opacity-0 transition-all duration-500 md:block sm:hidden">
            </div>

            <!-- Icon Overlay (Centered) -->
            <a href="">
                <CaViewFilled
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-darkBluish text-4xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
            </a>

            <!-- Image -->
            <img :src="image" alt="website image" class="w-full h-full object-cover" />
        </div>

    </div>
</template>

<script setup>
import { CaViewFilled } from '@kalimahapps/vue-icons';

import { fadeIn } from '../framerMotion/variants';

const props = defineProps({
    name: String,
    year: String,
    align: String,
    image: String,
})

const { name, year, align, image } = props;

const getMotion = align === 'left' ? fadeIn('left', 200) : fadeIn('right', 200);
</script>