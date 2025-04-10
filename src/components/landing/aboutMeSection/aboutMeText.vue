<template>
    <div class="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2
            class="text-6xl bg-gradient-to-r from-bluish  via-pink-500  to-purple-500  bg-clip-text text-transparent mb-10">
            About Me
        </h2>
        <p class="text-lg">
            I'm a passionate Computer Science and Engineering student at KUET, Bangladesh, graduating in 2026. With a
            strong foundation in both software and hardware, I love turning ideas into impactful, real-world solutions.
            I’ve worked on diverse projects in web development, Android apps, and deep learning, and I’m skilled in a
            wide range of technologies — from Vue, Node.js, Express.js, MongoDB, Laravel, MySQL to Python, PHP, C/C++,
            Java, Swift, and even hardware platforms like Arduino and Raspberry Pi.
            Whether it's frontend or backend, AI or embedded systems, I enjoy learning, building, and solving complex
            problems. I'm always excited to explore new tools and contribute to innovative projects that make a
            difference.
        </p>
        <router-link to="/more-about-me"
            class="border border-purple-500 rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:scale-[110%] hover:shadow-(--cyanShadow) transition-all duration-500 cursor-pointer md:self-start sm:self-center">
            More About Me
        </router-link>
    </div>
</template>