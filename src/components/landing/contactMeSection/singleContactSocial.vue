<template>
    <div
        class="hover:text-cyan hover:border-cyan hover:shadow-(--cyanShadow) text-2xl h-12 w-12 border border-grey text-grey rounded-full p-3 flex items-center justify-center ">
        <a href={{link}} class="cursor-pointer">
            <component :is="Icon" />
        </a>
    </div>
</template>
<script setup>
defineProps(['link', 'Icon']);
</script>