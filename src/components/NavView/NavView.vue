<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch, watchEffect } from 'vue'
import {useHeader} from '@/components/NavView/header'
import {usePublicStore} from "@/store/public.ts"
import { useRouter } from "vue-router";
const router = useRouter();
const publicStore = usePublicStore();
const {
  menuList
} = useHeader()
const activeIndex = ref('/home')
const ellipsis = ref(false)
const navWidth = ref(window.innerWidth) // 导航栏的宽度，初始值为当前屏幕宽度

const changeMenuItem = async (item: any) => {
  router.push(item.index);
  publicStore.activeIndex = item.index;
  sessionStorage.setItem("activeIndex", item.index);
  activeIndex.value = item.index;
};


const updateCollapse = () => {
  navWidth.value = window.innerWidth
  // isCollapse.value = window.innerWidth < 800
  ellipsis.value = window.innerWidth < 1250
}
onMounted(() => {
  // 在组件挂载时调用方法
  activeIndex.value = sessionStorage.getItem('activeIndex') || '/home'
  window.addEventListener('resize', updateCollapse)
})

onBeforeUnmount(() => {
  // 组件销毁前，移除监听器
  window.removeEventListener('resize', updateCollapse)
})

</script>
<template>
      <el-menu
        :default-active="activeIndex"
        router
        mode="horizontal"
        :ellipsis="ellipsis"
      >
        <template v-for="(item, index) in menuList">
          <el-menu-item
            @click="changeMenuItem"
            :index="item.path"
            v-if="!item.children && !item.link"
            :key="index"
            class="menu-item"
          >
          <!-- <a :href="item.anchor"> -->
            <span>{{ item.title }}</span>
            <!-- </a> -->
          </el-menu-item>
          <!-- 判断是否含有子菜单 -->
          <el-menu-item v-else-if="item.link" :index="item.title">
            <a :href="item.link" target="_blank">
              {{ item.title }}
            </a>
          </el-menu-item>
          <el-sub-menu v-else-if="item.children && !item.link" :index="item.path" >
            <template #title>{{ item.title }}</template>
            <el-menu-item
              @click="changeMenuItem"
              v-for="(subItem, index) in item.children"
              :index="subItem.path"
              :key="index"
            >
            <!-- <a :href="item.anchor"> -->
              {{ subItem.title }}
            <!-- </a> -->
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.el-menu{
  width: 100%;
  justify-content: center;
  overflow: hidden;
}
/* .el-menu--horizontal.el-menu {
    border-bottom: none !important;
} */
</style>
