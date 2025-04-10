<template>
    <div>
        <p class="text-green-500"></p>
        <form class="flex flex-col gap-4">
            <input type="text" name="from_name" placeholder="Your Name" required
                class="h-12 rounded-lg bg-bluish px-2 focus:bg-darkBluish" />
            <input type="email" name="from_email" placeholder="Your Email" required
                class="h-12 rounded-lg bg-bluish px-2 focus:bg-darkBluish" />
            <textarea type="text" name="message" rows="9" cols="50" placeholder="Message" required
                class=" rounded-lg bg-bluish p-2 focus:bg-darkBluish"></textarea>
            <button type="submit"
                class="w-full rounded-lg border border-purple-500 text-white h-12 font-bold text-xl hover:shadow-(--cyanShadow) transition-all duration-500">
                Send
            </button>
        </form>
    </div>
</template>