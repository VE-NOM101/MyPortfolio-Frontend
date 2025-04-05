<template>

    <div id="skills">
        <div class="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
            <div>
                <SkillsText />
            </div>
            <div class="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
                <AllSkills :skills="skills" />
            </div>
            <div class="sm:block lg:hidden">
                <AllSkillsSM :skills="skills" />
            </div>
            <!-- <div class="bottom-[50px] absolute right-0">
                <button class="p-5">Button</button>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import AllSkills from './allSkills.vue';
import AllSkillsSM from './allSkillsSM.vue';
import SkillsText from './skillsText.vue';

import { AkNodeFill, CoBrandMysql, BxMongodb, BxTailwindCss, CoBrandLaravel, TaBrandCpp, AkPhpFill, AkJavascriptFill, AkVueFill, AnFilledAndroid, CaLogoJupyter, AkPythonFill } from '@kalimahapps/vue-icons';
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
]
</script>