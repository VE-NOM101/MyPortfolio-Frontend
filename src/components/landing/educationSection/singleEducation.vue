<template>
    <div :class="[
        'flex',
        'w-full',
        'items-center',
        'justify-center',
    ]">
        <!-- Your content here -->
        <div
            class="group relative min-h-[220px] w-[500px] border-t-8 border-x-1 border-b-1 rounded-ss-[40px] rounded-ee-[40px] pt-6 px-4 pb-2 border-x-darkGrey border-b-darkGrey border-t-cyan hover:border-x-lightGrey hover:border-b-lightGrey">
            <h2 class="md:text-2xl sm:text-[20px] text-cyan text-center">{{ name }}</h2>
            <h2 class="md:text-[20px] sm:text-[18px] text-center">{{ institute }}</h2>
            <div class="flex justify-between items-center mt-4">
                <div class="bg-lightBrown rounded-full px-4 py-1 flex justify-between items-center">
                    <BsCalendarDate class="mr-2" />
                    <h2
                        :class="['lg:text-[16px] md:text-[16px] sm:text-[12px]', 'font-thin', 'text-white', 'font-special']">
                        {{ year }}
                    </h2>
                </div>
                <div class="bg-lightBrown rounded-full px-4 py-1 flex justify-between items-center">
                    <FeMapPin class="mr-2" />
                    <h2
                        class="lg:text-[16px] md:text-[16px] sm:text-[12px] font-thin font-special text-white text-center">
                        {{ place }}
                    </h2>
                </div>

            </div>

            <div class="flex justify-center items-center mt-[12px] text-orange ">
                <FaAward class="mr-2" />
                <h2 class="lg:text-[20px] md:text-[20px] sm:text-[16px] font-special text-center">
                    {{ remark }}
                </h2>
            </div>
            <div
                class="size-12 border-lightBrown border-t-1 border-l-1 group-hover:border-t-6 group-hover:border-l-6 group-hover:border-cyan absolute bottom-0 right-0 rounded-full">

            </div>
        </div>
    </div>
</template>

<script setup>
import { BsCalendarDate } from '@kalimahapps/vue-icons';
import { FeMapPin } from '@kalimahapps/vue-icons';
import { FaAward } from '@kalimahapps/vue-icons';
const props = defineProps({
    name: String,
    year: String,
    institute: String,
    place: String,
    remark: String,
})

const { name, year, institute } = props
</script>