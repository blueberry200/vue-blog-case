<template>
  <div class="flex flex-col items-center my-5">
    <div class="text-4xl font-black p-5 w-full max-w-5xl">模組導覽</div>
    <div class="flex flex-col w-full md:w-3xl px-5">
      <div class="flex flex-col md:flex-row justify-start gap-5 w-full">
        <div class="flex flex-col w-full md:w-1/2 gap-5">
          <div
            class="grid relative w-full bg-slate-100 before:content-[''] before:block before:pt-[50%] before:col-start-1 before:row-start-1"
          >
            <el-image
              class="col-start-1 row-start-1 block h-auto w-full"
              :src="currentFeatureData.imageUrl"
            />
          </div>
        </div>
        <div class="flex flex-col w-full md:w-1/2 gap-5">
          <div class="text-3xl font-black">{{ currentFeatureData.title }}</div>
          <div class="flex gap-3 flex-wrap">
            <div class="text-xl font-bold">
              相關頁面(共{{ currentFeatureData.relatedPages.length }}頁)：
            </div>
            <template v-for="item in currentFeatureData.relatedPages">
              <div
                class="flex items-center bg-purple-700 px-3 text-white rounded-md h-8"
              >
                {{ item.name }}
              </div>
            </template>
          </div>
          <div class="flex gap-3 flex-wrap">
            <div class="text-xl font-bold">相關技能:</div>
            <template v-for="item in currentFeatureData.skills">
              <div
                class="flex items-center bg-green-700 px-3 text-white rounded-md h-8"
              >
                {{ item }}
              </div>
            </template>
          </div>
          <div></div>
        </div>
      </div>
      <div class="flex flex-col md:mt-8">
        <div class="text-xl font-bold">模組介紹：</div>
        <div>{{ currentFeatureData.content }}</div>
      </div>
      <div class="flex justify-center w-full mt-8">
        <button
          class="w-full max-w-lg h-12 bg-green-700 text-white font-bold hover:bg-green-800 transition-all duration-200 hover:cursor-pointer rounded-lg"
          @click="router.push(currentFeatureData.landingPageRoute)"
        >
          前往登陸頁
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { featureListData } from "@/views/featureList/featureListData";

const currentFeatureData = ref({
  id: 0,
  title: "",
  description: "",
  content: "",
  imageUrl: "",
  landingPageRoute: "",
  relatedPages: [],
  skills: [],
});

onMounted(() => {
  currentFeatureData.value = featureListData.find(
    (item) => item.id === Number(router.currentRoute.value.params.id)
  );
});
</script>

<style scoped></style>
