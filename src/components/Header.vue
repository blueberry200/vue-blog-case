<template>
  <div
    class="sticky flex justify-between items-center w-full h-20 px-10 bg-green-700 z-100"
  >
    <div class="text-3xl font-black text-white">Vue案例展示</div>
    <div
      class="text-xl font-black text-white hover:cursor-pointer"
      @click="router.push('/')"
    >
      回目錄
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped></style>
