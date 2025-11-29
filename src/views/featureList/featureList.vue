<template>
  <div class="my-5">
    <div class="text-4xl font-black p-5">模組清單</div>
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 justify-start items-center px-5"
    >
      <template v-for="item in featureListData">
        <article
          class="group mx-auto w-[250px] h-[340px] overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 hover:cursor-pointer"
          @click="router.push('/guidePage/' + item.id)"
        >
          <!-- 圖片：佔一半高度 -->
          <div class="h-1/2 w-full overflow-hidden bg-slate-100">
            <el-image
              :src="item.imageUrl"
              class="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- 內容：佔一半高度 -->
          <div class="flex h-1/2 flex-col p-4">
            <!-- 標題（最多一行 + 粗體 + 比簡述大） -->
            <h3 class="text-lg font-bold text-slate-900 line-clamp-1">
              {{ item.title }}
            </h3>

            <!-- 簡述（最多三行） -->
            <p class="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
              {{ item.description }}
              這是簡述內容，最多顯示三行。超過三行會用省略號呈現。
              用來放文章摘要、商品描述、或任何你需要的卡片文字。
            </p>

            <!-- 你可以放 footer / tag；沒有就刪掉 -->
            <div class="mt-auto pt-3 text-xs text-slate-400">
              共{{ item.relatedPages.length }}頁
            </div>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>

<script setup>
import { featureListData } from "./featureListData";
import router from "@/router";
</script>

<style scoped></style>
