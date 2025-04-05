<template>
    <div class="flex flex-col gap-4">
        <SingleInfo text="choyanbaruakuetcse@gmail.com" :logo=AnTwotoneMail />
        <SingleInfo text="+00000" :logo=BsTelephone />
        <SingleInfo text="Chittagong,Bangladesh" :logo=BxMap />
    </div>
</template>

<script setup>
import SingleInfo from './singleInfo.vue';
import { AnTwotoneMail } from '@kalimahapps/vue-icons';
import { BsTelephone } from '@kalimahapps/vue-icons';
import { BxMap } from '@kalimahapps/vue-icons';
</script>