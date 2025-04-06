<template>
    <div class="flex flex-col justify-center items-center">
        <p class="font-bold text-6xl text-cyan">{{ number }}</p>
        <p class="font-bold text-xl text-lightGrey uppercase -mt-4">{{ text }}</p>
    </div>

</template>

<script setup>
defineProps(['number', 'text']);
</script>