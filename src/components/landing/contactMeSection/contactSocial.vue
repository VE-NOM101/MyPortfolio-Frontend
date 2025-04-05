<template>
    <div class="flex gap-4">
        <SingleContactSocial link="#" :Icon=AkLinkedinBoxFill />
        <SingleContactSocial link="#" :Icon=AkGithubFill />
        <SingleContactSocial link="#" :Icon=AkFacebookFill />
    </div>
</template>
<script setup>
import SingleContactSocial from './singleContactSocial.vue';
import { AkGithubFill } from '@kalimahapps/vue-icons';
import { AkLinkedinBoxFill } from '@kalimahapps/vue-icons';
import { AkFacebookFill } from '@kalimahapps/vue-icons';
</script>