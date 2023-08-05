<template>
    <Header></Header>
    <Hero></Hero>
    <Featured></Featured>
    <Footer></Footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Footer from "@/components/Footer/Footer.vue";
import Header from "@/components/Header/Header.vue";
import Featured from "@/components/Primary/Featured.vue";
import Hero from "@/components/Primary/Hero.vue";

const route = useRoute();
const mode = route.query?.mode || "light";
useHead({
    title: "Keue IO - Fully managed push queue service",
    description:
        "Get started in one click - Queue-as-a-service built for scale and reliability",
    htmlAttrs: {
        class: computed(() => {
            return mode;
        }),
    },
    bodyAttrs: {
        class: computed(() => {
            return "dark:bg-black";
        }),
    },
});
</script>
