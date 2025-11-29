<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped></style>
