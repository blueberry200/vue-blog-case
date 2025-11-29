import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "featureList",
    component: () => import("../views/featureList/featureList.vue"),
  },
  {
    path: "/guidePage/:id",
    name: "guidePage",
    component: () => import("../views/guidePage/guidePage.vue"),
  },
  // 清單資料維護模組
  {
    path: "/feature/listDataManagement/searchPage",
    name: "featureListDataManagementSearchPage",
    component: () =>
      import("../views/feature/listDataManagement/searchPage.vue"),
  },
  {
    path: "/feature/listDataManagement/addPage",
    name: "featureListDataManagementAddPage",
    component: () => import("../views/feature/listDataManagement/addPage.vue"),
  },
  {
    path: "/feature/listDataManagement/editPage/:id",
    name: "featureListDataManagementEditPage",
    component: () => import("../views/feature/listDataManagement/editPage.vue"),
  },
  // 上傳模組
  {
    path: "/feature/uploadModule/uploadAction",
    name: "featureUploadModuleUploadAction",
    component: () => import("../views/feature/uploadModule/uploadAction.vue"),
  },
  {
    path: "/feature/uploadModule/uploadResult",
    name: "featureUploadModuleUploadResult",
    component: () => import("../views/feature/uploadModule/uploadResult.vue"),
  },
];

// 🔍 判斷是否為 GitHub Pages
const isGithubPages = window.location.hostname.includes("github.io");

// ⭐ 在這裡切換對應的 history 模式
const history = isGithubPages ? createWebHashHistory() : createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
