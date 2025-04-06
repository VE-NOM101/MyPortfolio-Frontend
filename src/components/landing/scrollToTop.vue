<template>
    <div ref="scrollTopButton" class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition">
        <div class="text-gray-400 hover:text-blue-400 transition">
            <button @click="scrollToTop">
                Scroll to top
            </button>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";

let scrollTopButton = ref(null);

const handleScroll = () => {
    if (window.scrollY > 0) {
        scrollTopButton.value.classList.remove("invisible");
    } else {
        scrollTopButton.value.classList.add("invisible");
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>