<template>
    <div id="papers" class="max-w-[1200px] mx-auto px-4">
        <div>
            <PaperText />
        </div>
        <div class="group flex lg:justify-start sm:justify-center items-center p-4 m-4">
            <AllPapers />
        </div>
    </div>

</template>
<script setup>

import AllPapers from './allPapers.vue';
import PaperText from './paperText.vue';



</script>