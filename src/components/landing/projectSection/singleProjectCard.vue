<template>
    <div class="group p-3 border-2 border-orange/50 card group relative z-[1] block h-[460px] w-[340px] cursor-pointer overflow-hidden bg-Grey shadow-[0_0_5px_rgba(0,0,0,0)] transition-all duration-100 ease-linear hover:z-[2] hover:scale-100 hover:shadow-[0_10px_20px_rgba(0,0,0,0.8)] hover:border-orange"
        href="" target="_blank" ref="card" @mousemove="move" @mouseleave="leave">
        <div class="flex justify-center font-special text-2xl group-hover:text-cyan">
            <h1>{{ project?.title }}</h1>
        </div>
        <div class="text-lightGrey">
            <h1>{{ project?.description }}</h1>
        </div>
        <div class="border-1 border-darkGrey w-full group-hover:border-cyan"></div>

        <div class="m-2 flex justify-between">
            <button
                class="px-3 py-2 border-1 border-darkGrey bg-lightGrey rounded-full text-sm flex items-center gap-1 hover:bg-orange">
                Read More
                <AkArrowForwardThick />
            </button>

            <button
                class="px-3 py-2 border-1 border-darkGrey rounded-full text-sm flex items-center gap-1  hover:bg-orange">
                Source Code
                <CdSourceControl />
            </button>
        </div>
        <div class="mx-2 mt-3">
            <h2 class="uppercase">Tech Stack</h2>
            <div
                class="text-lightGrey my-2 p-1 min-h-[50px] w-full border-1 border-darkGrey rounded-lg hover:border-cyan">
                Frontend
                <ul class="flex justify-start">
                    <li class="p-1 text-sm" v-for="(item, index) in project?.frontend" :key="index">
                        <div class="px-2 bg-orange rounded-full text-black">{{ item }}</div>
                    </li>
                </ul>
            </div>
            <div
                class="text-lightGrey my-2 p-1 min-h-[50px] w-full border-1 border-darkGrey rounded-lg hover:border-cyan">
                Backend
                <ul class="flex justify-start">
                    <li class="p-1 text-sm" v-for="(item, index) in project?.backend" :key="index">
                        <div class="px-2 bg-orange rounded-full text-black">{{ item }}</div>
                    </li>
                </ul>
            </div>
            <div
                class="text-lightGrey my-2 p-1 min-h-[50px] w-full border-1 border-darkGrey rounded-lg hover:border-cyan">
                Database
                <ul class="flex justify-start">
                    <li class="p-1 text-sm" v-for="(item, index) in project?.database" :key="index">
                        <div class="px-2 bg-orange rounded-full text-black">{{ item }}</div>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'
import { AkArrowForwardThick } from '@kalimahapps/vue-icons';
import { CdSourceControl } from '@kalimahapps/vue-icons';
const props = defineProps({
    project: Object
})

const card = ref(null)

const leave = () => {
    card.value.style.transform = 'perspective(500px) scale(1)'
}

const move = (event) => {
    const relX = (event.offsetX + 1) / card.value.offsetWidth
    const relY = (event.offsetY + 1) / card.value.offsetHeight

    const rotY = `rotateY(${(relX - 0.5) * 15}deg)`
    const rotX = `rotateX(${(relY - 0.5) * -15}deg)`
    card.value.style.transform = `perspective(500px) scale(1.1) ${rotY} ${rotX}`
}

</script>