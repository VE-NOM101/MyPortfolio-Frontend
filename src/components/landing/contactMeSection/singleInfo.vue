<template>
    <div class="flex gap-4 items-center justify-start">
        <component :is="logo" class="text-3xl" />
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
defineProps(['text', 'logo']);
</script>