<template>

    <div id="skills">
        <div v-motion="fadeIn('down', 0.2)" class="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
            <div>
                <SkillsText />
            </div>
            <div v-if="safety">
                <div v-if="showLarge" class="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
                    <AllSkills :skills="skills" />
                    <button
                        class="text-2xl absolute -right-12 bottom-[50%] p-2 rounded-2xl hover:text-grey hover:bg-orange bg-cyan/60 border-2 text-white sm:hidden lg:block"
                        @click="showLarge = !showLarge">
                        <BsPlusCircleFill />
                    </button>
                </div>
                <div v-else>
                    <AllSkillsSM :skills="skills" />
                    <button
                        class="text-2xl absolute bottom-[10%] p-2 rounded-2xl hover:text-grey hover:bg-cyan bg-orange/60 border-2 text-white sm:hidden lg:block"
                        @click="showLarge = !showLarge">
                        <AkCircleMinusFill />
                    </button>
                </div>
            </div>

            <div class="sm:block lg:hidden">
                <AllSkillsSM :skills="skills" />
            </div>

        </div>
    </div>
</template>

<script setup>
import AllSkills from './allSkills.vue';
import AllSkillsSM from './allSkillsSM.vue';
import SkillsText from './skillsText.vue';
import { ref, watchEffect } from 'vue'
import { AkCircleMinusFill } from '@kalimahapps/vue-icons';
import { BsPlusCircleFill } from '@kalimahapps/vue-icons';

import { SiHiveBlockchain, AkNodeFill, CoBrandMysql, BxMongodb, BxTailwindCss, CoBrandLaravel, TaBrandCpp, AkPhpFill, AkJavascriptFill, AkVueFill, AnFilledAndroid, CaLogoJupyter, AkPythonFill } from '@kalimahapps/vue-icons';
let showLarge = ref(true); // Toggle state
let safety = ref(true);
const skills = [
    { skill: 'Vue', icon: AkVueFill },
    { skill: 'JS', icon: AkJavascriptFill },
    { skill: 'Jupyter', icon: CaLogoJupyter },
    { skill: 'Laravel', icon: CoBrandLaravel },
    { skill: 'Tailwind CSS', icon: BxTailwindCss },
    { skill: 'MongoDB', icon: BxMongodb },
    { skill: 'MySQL', icon: CoBrandMysql },
    { skill: 'Node JS', icon: AkNodeFill },
    { skill: 'Php', icon: AkPhpFill },
    { skill: 'Android', icon: AnFilledAndroid },
    { skill: 'Python', icon: AkPythonFill },
    { skill: 'Cpp', icon: TaBrandCpp },
    { skill: 'Blockchain', icon: SiHiveBlockchain },
]

import { useMediaQuery } from '@vueuse/core'
import { fadeIn } from '../framerMotion/variants';

const isLargeScreen = useMediaQuery('(min-width: 1024px)');

watchEffect(() => {
    console.log(safety.value);
    if (isLargeScreen.value) {
        safety.value = true;
    } else {
        safety.value = false;
    }
})
</script>