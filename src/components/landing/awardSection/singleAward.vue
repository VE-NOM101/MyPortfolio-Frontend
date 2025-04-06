<template>
    <div :class="[
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
            <h2 class="md:text-3xl sm:text-2xl text-orange">{{ name }}</h2>
            <h2 :class="['text-xl', 'font-thin', 'text-white', 'font-special', 'sm:text-center',
                align === 'left' ? 'md:text-right' : 'md:text-left']">
                {{ year }}
            </h2>
        </div>
        <div
            class="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
            <div
                class="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden">
            </div>
            <img :src=image alt="website image" class="w-full h-full" />
        </div>
    </div>
</template>

<script setup>
import { BsArrowRightCircleFill } from '@kalimahapps/vue-icons';
const props = defineProps({
    name: String,
    year: String,
    align: String,
    image: String,
})

const { name, year, align, image } = props
</script>