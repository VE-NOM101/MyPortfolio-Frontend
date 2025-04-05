<template>
    <div id="contact" class="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 ">
        <h2 class="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
        <div class="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
            <!-- <ContactMeLeft /> -->
            <div class="flex flex-col gap-8 w-full">
                <div>
                    <h2 class="text-orange text-3xl mb-4">Get In Touch</h2>
                    <p>
                        Feel free to reach out if you’d like to collaborate
                        <br />
                        you are just a few clicks away!
                    </p>
                </div>
                <ContactForm />
            </div>

            <!-- <ContactMeRight /> -->
            <div class="flex flex-col items-center justify-center gap-12">
                <img src="../../../../assets/email-image.png" alt="email image" class="max-w-[300px]" />
                <ContactInfo />
                <ContactSocial />
            </div>
        </div>
    </div>
</template>
<script setup>
import ContactForm from './contactForm.vue';
import ContactInfo from './contactInfo.vue';
import ContactSocial from './contactSocial.vue';

</script>