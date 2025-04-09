<template>

    <div>
        <span
            class="absolute flex items-center justify-center w-6 h-6 bg-darkBrown rounded-full -start-3 ring-8 ring-cyan">
            <AiResearchgate />
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
            {{ paper.title }} <span v-if="latest" class="text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-full bg-orange
                ms-3">Latest</span>
        </h3>
        <time class="block mb-2 text-[16px] font-normal leading-none text-lightGrey">Released
            on
            {{ paper.date }}</time>
        <p class="font-special mb-4 text-base font-normal text-white">{{ paper.description }}</p>
        <a :href="paper.link"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Goto
            Link</a>

    </div>
</template>
<script setup>
import { AiResearchgate } from '@kalimahapps/vue-icons';

defineProps(['paper', 'latest'])
</script>