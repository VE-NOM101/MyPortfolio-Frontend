<template>
    <div>
        <p class="text-cyan"></p>
        <form class="flex flex-col gap-4">
            <input type="text" name="from_name" placeholder="Your Name" required
                class="h-12 rounded-lg bg-lightBrown px-2 focus:bg-darkBrown" />
            <input type="email" name="from_email" placeholder="Your Email" required
                class="h-12 rounded-lg bg-lightBrown px-2 focus:bg-darkBrown" />
            <textarea type="text" name="message" rows="9" cols="50" placeholder="Message" required
                class=" rounded-lg bg-lightBrown p-2 focus:bg-darkBrown" />
            <button type="submit"
                class="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">
                Send
            </button>
        </form>
    </div>
</template>