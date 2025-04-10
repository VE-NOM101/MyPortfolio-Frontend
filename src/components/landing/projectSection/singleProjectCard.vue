<template>
    <div class="group p-3 border-2 border-white/50 card group relative z-[1] block h-[460px] w-[320px] cursor-pointer overflow-hidden bg-Grey shadow-[0_0_5px_rgba(0,0,0,0)] transition-all duration-100 ease-linear hover:z-[2] hover:scale-100 hover:shadow-(--purpleShadow) hover:border-purple-600/70"
        href="" target="_blank" ref="card" @mousemove="move" @mouseleave="leave">
        <div class="flex justify-center font-special text-2xl group-hover:text-cyan">
            <h1>{{ project?.title }}</h1>
        </div>
        <div class="text-lightGrey">
            <h1>{{ project?.description }}</h1>
        </div>
        <div class="border-1 border-darkGrey w-full group-hover:border-cyan"></div>

        <div class="m-2 flex justify-between">
            <router-link :to="`/read-project/${id}`"
                class="px-3 py-2 border-1 border-darkGrey bg-lightBluish rounded-full text-sm flex items-center gap-1 transition-all duration-500 hover:scale-[110%] hover:shadow-(--cyanShadow)">
                Read More
                <AkArrowForwardThick />
            </router-link>

            <button
                class="px-3 py-2 border-1 border-darkGrey rounded-full text-sm flex items-center gap-1  hover:shadow-(--cyanShadow) hover:scale-[110%] transition-all duration-500">
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
                        <div class="px-2 bg-purple-600/70 rounded-full text-white font-mono ">{{ item }}
                        </div>
                    </li>
                </ul>
            </div>
            <div
                class="text-lightGrey my-2 p-1 min-h-[50px] w-full border-1 border-darkGrey rounded-lg hover:border-cyan">
                Backend
                <ul class="flex justify-start">
                    <li class="p-1 text-sm" v-for="(item, index) in project?.backend" :key="index">
                        <div class="px-2  bg-purple-600/70 rounded-full text-white font-mono ">{{ item }}</div>
                    </li>
                </ul>
            </div>
            <div
                class="text-lightGrey my-2 p-1 min-h-[50px] w-full border-1 border-darkGrey rounded-lg hover:border-cyan">
                Database
                <ul class="flex justify-start">
                    <li class="p-1 text-sm" v-for="(item, index) in project?.database" :key="index">
                        <div class="px-2  bg-purple-600/70 rounded-full text-white font-mono ">{{ item }}</div>
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
const props = defineProps(['project', 'id']);

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