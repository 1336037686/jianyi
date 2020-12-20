<template>
  <router-view />
</template>

<script lang="ts">
import { Ref, ref, provide } from 'vue'
import {router} from "./router";
export default {
  name: 'App',
  setup () {
    const width = document.documentElement.clientWidth;
    const menuFlagValue = ref(width > 500 ? true : false);
    provide<Ref<boolean>>("menuFlagValue", menuFlagValue);
    router.afterEach((to, from) => {
      // 切换时需要重新获取界面宽度
      const width = document.documentElement.clientWidth;
      if (width <= 500) {
        menuFlagValue.value = false;
      }
    })
  }
}
</script>
